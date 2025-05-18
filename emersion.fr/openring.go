package main

import (
	"flag"
	"html"
	"log"
	"net/url"
	"os"
	"sort"
	"time"

	"github.com/BurntSushi/toml"
	"github.com/SlyMarbo/rss"
	"github.com/mattn/go-runewidth"
	"github.com/microcosm-cc/bluemonday"
)

type Article struct {
	Date        time.Time
	Link        string
	SourceLink  string
	SourceTitle string
	Summary     string
	Title       string
}

func main() {
	var narticles, summaryLen int
	var sources []*url.URL
	flag.IntVar(&narticles, "n", 3, "number of output articles")
	flag.IntVar(&summaryLen, "l", 256, "maximum summary length")
	flag.Func("s", "source URL", func(s string) error {
		u, err := url.Parse(s)
		if err != nil {
			return err
		}
		sources = append(sources, u)
		return nil
	})
	flag.Parse()

	if len(flag.Args()) > 0 {
		log.Fatalf("Usage: %s [-s https://source.rss...] > out.toml", os.Args[0])
	}

	log.Println("Fetching feeds...")
	var feeds []*rss.Feed
	for _, source := range sources {
		feed, err := rss.Fetch(source.String())
		if err != nil {
			log.Printf("Error fetching %s: %s", source.String(), err.Error())
			continue
		}
		feeds = append(feeds, feed)
		log.Printf("Fetched %s", feed.Title)
	}
	if len(feeds) == 0 {
		log.Fatal("Expected at least one feed to successfully fetch")
	}

	policy := bluemonday.StrictPolicy()

	var articles []Article
	for _, feed := range feeds {
		if len(feed.Items) == 0 {
			log.Printf("Warning: feed %s has no items", feed.Title)
			continue
		}
		item := feed.Items[0]
		rawSummary := item.Summary
		if len(rawSummary) == 0 {
			rawSummary = html.UnescapeString(item.Content)
		}
		summary := runewidth.Truncate(
			policy.Sanitize(rawSummary), summaryLen, "…")
		articles = append(articles, Article{
			Date:        item.Date,
			SourceLink:  feed.Link,
			SourceTitle: html.UnescapeString(feed.Title),
			Summary:     summary,
			Title:       html.UnescapeString(item.Title),
			Link:        item.Link,
		})
	}
	sort.Slice(articles, func(i, j int) bool {
		return articles[i].Date.After(articles[j].Date)
	})
	if len(articles) < narticles {
		narticles = len(articles)
	}
	articles = articles[:narticles]

	if err := toml.NewEncoder(os.Stdout).Encode(struct {
		Articles []Article
	}{articles}); err != nil {
		log.Fatal(err)
	}
}
