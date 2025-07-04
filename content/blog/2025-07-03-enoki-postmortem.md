+++
date = "2025-07-03T00:00:00+02:00"
title = "Enoki Postmortem"
slug = "enoki-postmortem"
lang = "en"
tags = ["meta"]
+++

# Postmortem of a Venture-Backed Startup

As I write this, I am in the process of officially closing Enoki's corporation, marking the end of my first startup. Before diving into the lessons learned, I want to reminisce a little on the first days of Enoki.

## The Idea Seemed So Obvious

At the time I worked as the first data scientist at Kumospace (3D spatial audio video chat company which grew tremendously fast during COVID and remote work, and fundraised very well). I also loved tools like Figma and Google Docs and saw firsthand how great products that have sharing have such an unfair advantage when it comes to product-led growth. Having been working remotely for all of my career, I wondered if it was possible to build the same kind of product for coding. Especially due to the pandemic, the coding experience was a very isolating one - whether it is professional software engineering work or contributing to open-source software.

I experimented with having multiple users interacting with the same Linux desktop environment. I learned about multi-seating which was made available with Xpra, and how this was achieved in the past actually with Plan9. I came across [this HackerNews post](https://news.ycombinator.com/item?id=25892128) explaining how libseatd could achieve that with multiple wayvnc sessions. Lo and behold: this was feasible on sway window manager, the spiritual successor of i3 window manager, so I migrated my configuration and got testing. The same day, I showed two mice on the same local desktop through multiple mice and keyboard.

I hacked together a version of Linux that had multi-seating (multiple independent mouse cursors on the desktop that can each control their own programs). When run on a large enough display it can mimic the feeling of Figma's infinite canvas with the full power of desktop apps like web browsers, file explorers and crucially coding tools (like VSCode). This enabled multiple users to interact with the same desktop concurrently. The final step was to run the desktop on a powerful cloud machine and to turn the website browser into a VNC client ([technology from the 90's](https://en.wikipedia.org/wiki/Virtual_Network_Computing)).

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/3a4019f7-cbb2-4264-44cd-95346e0b5000/public)

"Figma for developers" was born > Enoki.

And at that time I got into the Antler startup accelerator in Austin, Texas (where I had just moved a few months ago, and got in purely out of luck since I had also applied to 15 global accelerators and could have gone to Singapore equally as likely as Austin!). This was for the Summer 2022 batch.

## The Early Days

At the end of the first 6 weeks I made it through the first selection process (one of 5 founders in a cohort of 50 founders in residence) and got Antler's backing. I hired my cofounders - two of my best friends from Columbia University - and we started this journey officially. We incorporated in September 2022 and received $250,000 in angel and pre-seed funding.

From there we built this "multiplayer desktop environment in a box" called Aither, inspired by docker-webtop which was a proof of concept of the multi-seating but had unfixable issues like the latency when used through a browser (a noVNC limitation that we never got over). The AWS-hosted infrastructure Aither service was capped to 20 fps which made the system feel slow or clunky. This frame rate limitation was a fundamental constraint of the noVNC protocol that made real-time coding feel sluggish compared to native development environments.

This was the MVP to validate my hypothesis that "one desktop, multiple users" had productivity benefits especially for software developers. We found a great analogy in nature with the Japanese mushroom Enoki-take which has one root but multiple heads. Take (kanji) means mushroom so by subtraction Enoki is the metaphor for the company. I had seen the power of network effects and product-led growth firsthand while at Charge Ventures and Kumospace, and it was the key feature of this product.

We initially marketed Enoki as a browser-based synchronous AND asynchronous cloud development environment (with multiple IDEs/terminals/browsers) that could be shared with a single click. We wanted to eventually compete with the likes of Replit, Github Codespaces and Gitpod. We were also convinced from our customer interviews that software engineering teams had the "shift-left" trend which as a practice meant that when building software, developers were trying to perform code testing earlier and earlier in the coding process. We spoke about this initial vision at length in the [ChangeThat Podcast](https://podcasts.apple.com/us/podcast/episode-4-multiplayer-desktops/id1566867158?i=1000584542397) ([Spotify link](https://open.spotify.com/episode/0UwBDlq2ZcY5KqaU7xVcym)).

## Things I Wish I Spent More Time On

### Talking to customers (not at them)

We found through our extensive surveys that less than 5% of software engineers practiced live pair programming. The truer insight there was that 95% of engineers didn't enjoy or believe in pair programming from the start. We thought that it was a "generational thing" and that younger devs would collaborate more drawing from tools like Figma.

To another technical founder: was true then and is true now: nobody should get in the way of you speaking with users/customers and asking the right questions to them.

At one point we had hundreds of daily users but a very low retention rate (less than 5% of users used the product more than 3 times). In fact, while I was in Antler the first 6 weeks I spent my time demoing to new people aggressively to get to a high usage count. I walked around the Austin TX WeWork office and approached every person I saw.

### Understanding what we were actually building

Knowing if you're B2B or B2C. We thought B2D2B (business to developer to business) was the way. Part of why we could not sell is that we failed to translate our product into an ROI benefit. CTOs don't think that way. We were selling vitamins that did not have proven effects to people who only understand painkillers.

We overbuilt the product, without a clear idea of what specific problems our product solved for the end users. We added features like Slack and Jira integrations early on. Interactions with our beta users found it helpful for the code review process. We basically found an adjacent use case and tried to retrofit our complex product for a new problem. Building a product for the first time can feel like "putting on a blindfold and throwing darts." The biggest questions we could not find an answer to quickly were "Who is the customer?", "What channel do they live on?", "What existing communities can you leverage to find new users organically?"

### Managing burn rate like my life depended on it

We recognized the ["fatal pinch"](http://www.paulgraham.com/pinch.html) too late. We let go of one of the founders and reduced salary and burn drastically, and immediately saw faster iteration cycles. In retrospect we should have ripped the band-aid much faster.

Level of urgency and burn. Thought it was going fine. Each month is extra burn. Amount of fund raised is a dick measuring contest. Truly. You're working as if this is the last amount you'll ever raise. How can we make sure there's always more money in the bank. Assume you won't ever raise. We worked based on assumption that we'll raise millions in funding in next few months.

Could have been more resourceful from the get-go i.e. monitor every penny. Instead we paid contractors decent amounts monthly, should have thought of better way to get high output with minimal financial input. More investigation on free resources. Should have anchored salaries on Carta data.

## Things I Wish I Spent Less Time On

### Features nobody asked for

["You're not one feature away from success"](https://twitter.com/jaltma/status/1651670017845391360) - Jack Altman's tweet captures it perfectly. It almost never works like this. We sometimes struggled to internalize the feedback we were getting on our product - from existing and aspiring users. Our deep personal attachment to our product made us blinded to certain changes that were essential. We spent five months building a massive MVP that was still not compelling enough for devs to radically change their workflow. To give a concrete example: we assigned a contractor for a whole 6 weeks on a Jira integration and never even implemented the feature.

Only so much you can do to dress up the pig to make it pretty. Adding features to a broken product is like a pig with lipstick. Knew that deep down. But I spent time on fundraising. But culpability we all share on product perspective. So it's a sequencing problem. It's all about the roadmap.

### Pretty things and distractions

Focus all energy on the absolute nearest necessities. Doing "optional" things is much worse than a waste of time if you do them in the wrong sequencing loop. We found that we sometimes strayed away from focusing strictly on our core product and focusing on miscellaneous items, like brand colors. Anything that does not directly contribute to growth or fundraising or hiring is not the founders' priority ([Why Figma Wins](https://kwokchain.com/2020/06/19/why-figma-wins/)). We also spent too much time listening to the commentators instead of our actual users.

Sequencing issue: pretty things, GrowthRocks. External devs. Trello board graveyard for good ideas.

### Contractor management

Getting contractors is very dangerous early on because of the misalignment of interest. The key is to assess them based on clear metrics and KPIs. Hiring software engineering contractors/devs on demand are just a variable resource, and they should not be allocated in a month where you A/B test. I distinctly remember having a conversation on having to create work for a contractor we pay for already. This added more managerial overhead and slowed us down effectively.

## The Technical Reality Check

We never nailed the single player experience before building the multiplayer experience. The product was laggy for most users. The AWS-hosted infrastructure Aither service was capped to 20 fps which made the system feel slow or clunky - due to the legacy browser-based VNC clients like noVNC which Aither is built on top of. Based on the initial insights we got from our users, we found that the product itself had a very high k-factor as each user brought on an average of 3 new users. I had seen these numbers during my time with Kumospace and correlated it with immense product-led growth potential. However this number quickly eroded as our sample size grew. We had a very viral product but retention was the main issue - virality is an accelerant but the core single-player product experience has to be polished. We made a big bet on network effects but this is an accelerant to growth, it cannot be the reason growth happens.

Another big problem in retrospect is that we were extremely slow at producing outputs. Myself and my technical cofounder, it was our first time interacting with the thousands of AWS tools. We didn't know what we didn't know so could never estimate complexity, deliverable dates (and costs) for what we built.

## Missing the Shift

We "missed the technical shift". The ground was basically moving beneath our feet and there was a clear demand for AI tools in the software development space ([Insight Partners analysis](https://www.insightpartners.com/ideas/ai-coding-developer-productivity-software-supply-chain/)). Once we realized that the future of coding was not collaborative-driven but rather AI-driven, we moved away from Enoki, the multiplayer desktop and tried to get into AI. Drawing from our open source backgrounds, we launched Osai, an open source prompt bank. Each prompt came with the OS Public Prompt License. This quickly developed further into a multiplayer version of ChatGPT powered by Liveblocks, a collaborative tool for LLM interactions (which we sold to an AI/Blockchain Software Development Company to extend runway).

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/14d877c7-59f2-4894-e263-b7a183d2db00/public)

This shift-left pattern had been occurring since my time as an Analyst at Charge Ventures in 2020 when we saw a large increase in the developer tools dealflow. As the graph shows, the ground was indeed moving beneath our feet with the advent of AI and its incredible potential to accelerate code production.

Our hunch of changing the IDE space was not wrong. There was potential to change how devs work. They were not "attached to VSCode forever". It was not the idea that was flawed. It was the execution. Just take a look at Cursor AI or Windsurf etc.

## It's All About People

Founder-market fit - we were not the right people. Not dev centric. Paradoxically while we were very close to the problem (working remotely on our own feeling isolated; yearning for a similar experience to live collaborative tools like Figma and Google Docs but for coding); we were not the right founders to build this company. Not the right product/engineering experience on team (failure to recognize weakness/hire); or the talent to steer DevRel for an opensource project; and certainly not the right zero to one sales acumen. At a deeper psychological level it made me aware of how low my tolerance for rejection was and forced me to confront these fears (exposure).

We candidly did not build the right team, with the "right DNA", to be the ones to solve this problem. This doesn't mean we could never do it. But we did not have enough iterations on product and speaking with customers to get there.

Better assessment of skills needed on team. We needed a Figma beast. Needed sales experience, 0 to 1 salesman. Or somebody with willingness to do it.

Too explicit in terms of delegation: rigidity in roles put people in silo.

CEO dilemma: being a visionary while balancing execution of that (understanding operator role). They need to be grounded in the team's execution of that vision and how long that's gonna take. "CEO wants it done yesterday." How do you balance that division with execution time. Diallo would say "Thomas keeps printing ideas." In hindsight it was what I should have been doing but should have been grounded in reality of current state of product and what it would truly be. When you have limited engineering resources and hands, how do you execute. Priorities gotta align properly then waste time on non high priority thing.

## False Signals

Interest does not equal traction. We took metrics like Github stars and usage data strictly as signs of traction, when we should have been only interested in sales as the main sign of traction.

At some point, it's either consulting or SaaS. We started ["selling cereal"](https://entrepreneurshandbook.co/how-airbnb-founders-sold-cereal-to-keep-their-dream-alive-d44223a9bdab) through consulting. Consulting can entail long sales cycles, and the cynical view is that "you are always one contract away from dying". It can however enable you to get closer to identifying new problems and - in our case - rediscover our love for building products that users love.

Thinking what's best for your business vs what's best for investor. Was thinking through lens of nicest narrative, how to mitigate tech moat. Truth of matter none of those come up with those. Nobody's gonna argue with million ARR. Moat defensibility roadmap but live in moment: revenues are coming in. Balancing expectation of investor vs of the business.

## The Hardest Part

Guilt and shame was unwarranted. Drop off from monthly update. How do you make sure what you're saying this month is not happening. What do you do with that? Then there's no urgency to step up and make sure that those updates are concrete. Even if Prerna did not scold us, internally we should have said "No, this is not on track" and tried to fix it. Disappearing on people never solves the issue.

If I could go back in time at one specific moment I would talk to me the day after I raised the funding round from Antler and tell myself: this is not a mandate to build Enoki as you pitched it, you have to start with an open mindset and identify exactly what it is that you want to build. Are you sure that you are tackling the right problem? And are you doing it the right way? Instead of optimizing for "how am I going to raise my seed round in the shortest amount of time possible" + how do I create traction for this MVP that got some people thinking it's cool.

Startup accelerators are not a mandate to stick to the same idea. You have no "moral" obligation to stick to an original hypothesis if there is clear market data that screams that you don't want to build it. In fact your moral obligation is to pivot as soon as your intuition or real-world data points you away from your product.

## What I Know Now

Evaluate your flaws to the max. This is the true hiring pipeline.

I need to reframe a perception. You didn't "skip" the corporate job (your investors are your boss now). You just started the game on Hard difficulty and without spending 2 years working "for a great boss". Or having easy, measurable wins. You're in for a series of reality checks, heartbreaks (giving it your all doesn't always work, inputs != outputs). Embrace the nonlinearity of it all.

But there are proxies to that: coaches. It's not uni. You are no longer graded. I got all this advice and still failed my first company. Being analytical as we are is a short term handicap but a long term superpower. You will be less of a pure doer. And that's fine.

Making the business a well oiled machine is primordial. SOP, every month third Friday of the month get notes to investors. Every Monday put down priority and collectively prioritize. Honest conversation about burn rate, personal conversation. How the hell do you focus on work if no cash coming in.

Being quick to kill a product or feature or a priority. Done analysis on feedback and realize it's not high priority feature. Every day wasted is a day you don't get back to move the needle.

Didn't iterate fast enough. Feedback loops not fast enough. Too stuck into weeds of let's build this ignore signals. Replit pushing features.

Better at roadmapping: where we wanted to end up. Clearer timelines clearly defined. More intentional about deadlines.

Reactivity: new info coming in. Reframe. Out of your 50 ideas what are the next 10 that people will pay for. Deep customer centric approach. Roadmap revolves around that.

Parallelization of tasks: fundraising little bit today, little bit tomorrow. Even if just scratching surface on each. Good for routine building. Setup CRM, pull.

Asks: should have an email that this is what we want from you. Part of monthly update. Intros to top devs from startups, companies that could be a good fit. Or we can leverage to improve customer discovery.

Cheap tests vs expensive "big bets".

If a founder's first startup is a reflection of the founders' personality and it is their attempt to express themselves, then Enoki failed because we focused on the wrong things in the wrong sequencing loop while not locking into the signal (paid contracts or traction on the open source side).

## Moving Forward

After over a year of working on this, several pivots later, we have finally put the Enoki mission to rest. Ultimately we decided to stop the company because we ran out of runway, and while it was a tough decision, we each individually felt this was the right move. The Delaware C Corp was dissolved. [There was an ambiguous acquisition of some core IP](https://finance.yahoo.com/news/enokis-core-asset-acquired-alphadevs-090000641.html), but the truth is simpler: we ran out of money.

Building this company made me so close to DevOps and Linux and the Wayland display environment that I still run Linux. And it has made me very close to the concept of workflows. I am still convinced that opensource software is a great way to build a company with strong fundamentals and a defensible value proposition. Of course this changed my approach as I now sell before I build and focus on being a cash flow positive company (default alive).

## Gratitude

We would like to express our deepest gratitude to our early backers from Antler, especially Prerna Sharma, Joseph Cardini and Tyler Norwood for believing in us and giving us the chance to jump into the entrepreneurial world. The whole ecosystem created by the Antler US team is incredible. We would like to thank Gary Schall and the whole team from the Wilmerhale Launch program. To all who accepted to demo our product, sat with us on user interviews, signed up for our alpha and beta programs, and contributed to our open-source initiatives - thank you very much for giving us a chance. And finally to all the friends who coded on the project - with a special mention to Sergio Nahas and Alessandro Merola - we appreciate your help and look forward to your future endeavors.

---

*This postmortem was inspired by [Brett Martin's "Postmortem of a Venture-Backed Startup"](https://medium.com/@brett1211/postmortem-of-a-venture-backed-startup-72c6f8bec7df) and his follow-up ["Scar Tissue"](https://medium.com/@brett1211/scar-tissue-f29ba9f15825), as well as [Martí Gouca's learnings](https://medium.com/@martigouca/learnings-of-not-finding-product-market-fit-in-a-24-b2b-saas-startup-98911c9ee565). I consider Brett my mentor and his candid writing about failure gave me the courage to share this story. You can also hear Brett discuss these experiences on [Danielle Newnham's podcast](https://danielle-newnham-podcast.simplecast.com/episodes/brett-martin-wurAQrht).*

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/58812937-a340-4994-9068-cdf7db842400/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/7e3ad068-28a1-444e-7587-7c30d7eb9400/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/6d1b733f-b19c-42d6-db6c-8c1cf2e2d200/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/f61e9a20-1215-44f0-a073-3d6fce66c800/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/a5344e21-7306-4818-dfef-6c0e9d98eb00/public)

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/49927eb5-965a-4b13-64c4-4b25e792e600/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/d9cc2f1e-3acc-4def-e303-dd64e64a5000/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/fee24f36-efe0-48a0-da32-df840879d700/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/68dd624e-6793-45a2-abe4-f9cb0ea88300/public)
![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/2b9b279b-8afb-49f7-61de-a8c41f004100/public)

