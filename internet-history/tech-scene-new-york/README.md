In Steve Blank's history of the internet:
(If you’re interested in the history of the tech scene in New York, Fred Wilson gives a cogent summary here)
he mentions:
https://www.youtube.com/watch?v=v636zGsXy5I&t=146s

Book: F'd Companies
Spectacular Dot-com Flameouts
By Philip J. Kaplan

https://www.youtube.com/watch?v=hAau6W--iMo

---
Time Capsule from the past!
From: https://smartlogic.io/blog/2009-11-23-web-2-0-expo-nyc-wrap-up-ignite/

## Web 2.0 Expo NYC and Ignite Wrap Up
By Yair Flicker, November 23 2009

# Web 2.0 Expo NYC and Ignite Wrap Up

Johnand I went to the Web 2.0 Expo in New York City last week to learn about new trends in Web 2.0 and to try meet interesting people in the industry. We had fun, and I even won a Flip Ultra HD from the folks at a party hosted byRackspaceandNeustar. This post includes my notes from various sessions from the weekend.

## Ignite NYC

Web 2.0 Expo kicked off withIgnite NYCon Monday (11/16) night. We're a big fan of Ignite talks (having created the websites for Ignites inBaltimore,DC,AnnapolisandRailsConf) so it was exciting to check out Ignite in the Big Apple. TheIgnite NYC websitelists the speakers but doesn't mention what they spoke about (we'd be happy to host your website). Unfortunately I didn't take notes at this event and I'm not going to go through all the youtube videos right now, so I don't have much to share.

## Web 2.0 Sessions

### NoSQL: The Shift to a Non-relational World

This talk, given by Dwight Merriman, was about non-relational databases, which is a different paradigm from traditional databases like MySQL, Oracle, MS Access, MS SQL Server, etc. Non-relational databases are interesting to me as I think they might be applicable to some of our client projects. My notes:

- No joins

- Uses map reduce instead

- When considering scaling out - think about "CAP" - you can pick any two of the following but you can never achieve 100% of all three:Consistency: ensuring that data on multiple database servers are consistentAvailable: you want the database to be available when you need itPartition-tolerant: partitioning the database to run across multiple servers

  - Consistency: ensuring that data on multiple database servers are consistent

  - Available: you want the database to be available when you need it

  - Partition-tolerant: partitioning the database to run across multiple servers

- CAP constraints are most relevant when writing to the database. If you're only reading from the database, it's easy to have all three.

### The Lean Startup: a Disciplined Approach to Imagining, Designing, and Building New Products

This talk was given by Eric Ries (@ericries), who blogs atLessons Learned. He is someone with whom many tech entrepreneurs are smitten, and I must say I myself was impressed. My notes:

- Continuous DeploymentDevs can check code in, gets deployed everywhere within 20 minutesCluster will detect bad changes to the code, revert them, email everyoneThe example Eric gave was that if someone messes up the UI of the checkoutscreen, e.g. changes the "pay now" button such that users can't see itand this causes the company not to receive payments, the system will automaticallyrevert itself after 20 minutes or so.

  - Devs can check code in, gets deployed everywhere within 20 minutes

  - Cluster will detect bad changes to the code, revert them, email everyone

  - The example Eric gave was that if someone messes up the UI of the checkoutscreen, e.g. changes the "pay now" button such that users can't see itand this causes the company not to receive payments, the system will automaticallyrevert itself after 20 minutes or so.

- Lean StartupsCommodity Technology StackCustomer DevelopmentAgile Product Development

  - Commodity Technology Stack

  - Customer Development

  - Agile Product Development

- Agile Product DevelopmentPrinciples from Lean Manufacturing, Agile, and TPSUnit of Progress: A line of Working Code (as opposed to advancing the plan in waterfall).  Problem: known, Solution: unknown.

  - Principles from Lean Manufacturing, Agile, and TPS

  - Unit of Progress: A line of Working Code (as opposed to advancing the plan in waterfall).  Problem: known, Solution: unknown.

- Product Development at Lean StartupUnit or Progress: Validated Learning About Customers ($$$)Problem, Solution: unknown.Hypotheses, Experiments, Insights feed into XP, which feeds Data, Feedback, Insights back into Problem Definition / Customer Development cycleProblem team: (formerly sales, marketing, product development) - cross functional teamSolution team: (formerly engineering, ops) - but should also include marketing - cross functional team

  - Unit or Progress: Validated Learning About Customers ($$$)

  - Problem, Solution: unknown.

  - Hypotheses, Experiments, Insights feed into XP, which feeds Data, Feedback, Insights back into Problem Definition / Customer Development cycle

  - Problem team: (formerly sales, marketing, product development) - cross functional team

  - Solution team: (formerly engineering, ops) - but should also include marketing - cross functional team

- Pivot: one turn through this feedback loopIdeas - build - code - measure - data - learn - back to ideasMinimize total time through the loop

  - Ideas - build - code - measure - data - learn - back to ideas

  - Minimize total time through the loop

- AAA's of metrics:ActionableAccessible - must make sense to anyone, and must be accessible by anybody in the company (everyone should be able to pull the report)Most useful thing is to kill pet projects and help people see that pet projects are bad ideas.Auditable - "metrics are people too" - reports come from tangibles

  - Actionable

  - Accessible - must make sense to anyone, and must be accessible by anybody in the company (everyone should be able to pull the report)Most useful thing is to kill pet projects and help people see that pet projects are bad ideas.

    - Most useful thing is to kill pet projects and help people see that pet projects are bad ideas.

  - Auditable - "metrics are people too" - reports come from tangibles

- when someone sees a report, they must be believable and must stand upto any questions.  People must be able to audit them because initialhuman reaction is to doubt and deny, etc.

- Measure the MacroAlways look at cohort-based metrics over timeSplit-test the small, measure the large

  - Always look at cohort-based metrics over time

  - Split-test the small, measure the large

- Five Why'sA technique for continuous improvement of company process.Theory: behind every technical problem is a human problemExample: imagine a server crashes.  Why?  Code got deployedthat used some obscure API that caused it to crash.  Why?  Personthat wrote the code was a noob engineer and didn't know better and wasn'ttrained.  Why?  Managerdoesn't believe in training.  Started with a server problem endedup with a management problem.Ask "why" five times when something unexpected happens.Makeproportionalinvestments in prevention at allfive levels of the hierarchy.Behind every supposed technical problem is usually a human problem.  Fixthe cause, not just the symptom.Helps us identify that we're too busy to find out why we're too busyor somethingActs as a natural speed regulator.  If we're spending too much timefire-fighting - we'll have to slow down to address problem, etc.  Regulatesour speed.

  - A technique for continuous improvement of company process.

  - Theory: behind every technical problem is a human problem

  - Example: imagine a server crashes.  Why?  Code got deployedthat used some obscure API that caused it to crash.  Why?  Personthat wrote the code was a noob engineer and didn't know better and wasn'ttrained.  Why?  Managerdoesn't believe in training.  Started with a server problem endedup with a management problem.

  - Ask "why" five times when something unexpected happens.

  - Makeproportionalinvestments in prevention at allfive levels of the hierarchy.

  - Behind every supposed technical problem is usually a human problem.  Fixthe cause, not just the symptom.

  - Helps us identify that we're too busy to find out why we're too busyor something

  - Acts as a natural speed regulator.  If we're spending too much timefire-fighting - we'll have to slow down to address problem, etc.  Regulatesour speed.

- Minimum Viable ProductWhat's the absolute least amount of product we can build to engage thevisionaries?Instead of asking customers what they want (which they don't usuallyknow), we're going to take our theory, put it out there, and TEST.Visionary customers can fill in the gaps on missing features - if theproduct solves a real problem.Fears:False negative: customers would have liked the full product, but theMVP sucks, so we abandoned the visionToo busy to learn: it would be faster to just build it right, all thismeasuring distracts from delighting customersMust have an agreement with the team to iterate - just because clientsdon't like the first version doesn't mean they're not going to continueto iterate.

  - What's the absolute least amount of product we can build to engage thevisionaries?

  - Instead of asking customers what they want (which they don't usuallyknow), we're going to take our theory, put it out there, and TEST.

  - Visionary customers can fill in the gaps on missing features - if theproduct solves a real problem.

  - Fears:False negative: customers would have liked the full product, but theMVP sucks, so we abandoned the visionToo busy to learn: it would be faster to just build it right, all thismeasuring distracts from delighting customers

    - False negative: customers would have liked the full product, but theMVP sucks, so we abandoned the vision

    - Too busy to learn: it would be faster to just build it right, all thismeasuring distracts from delighting customers

  - Must have an agreement with the team to iterate - just because clientsdon't like the first version doesn't mean they're not going to continueto iterate.

Eric mentioned a book he's publishing:Startup Lessons Leaned (book)- still in "beta." He also recommendedThe Four Steps to Epiphany.

### Sketchboards & Prototyping - Method for Rapid Design

This talk, given by Todd Zaki Warfel (@zakiwarfel), described a process his company uses for prototyping ideas for applications. It was my favorite talk from the conference. Todd's website is athttp://zakiwarfel.com/. My notes:

1. Prototyping is a process

2. People often say "I think I get it but I'm gonna have to see it" -need to see prototypes

3. Todd's company doesn't do wireframes.  Their wireframes are theirprototypes.  Wireframesmight be sketched out on paper.  Click-through wireframes are theirprototypes (XHTML/CSS).  They do production-level prototypes, not recommendedfor anybody else.

4. Two main reasons for sketching / prototyping in the process

5. Sketches are a great communication tool - don't write notes - sketchthem out

6. Pics have less room for interpretation than text

7. Lo-fi is cheaper, generally speaking, than doing AI, etc.

8. No written requirements - just visual requirements

9. "Agile Conference" - 1500 - 1600 people show up. Todd's groupmade some app in two days, for charity, and raised a few thousand bucks withthe app.

10. Design Studio Method

11. Industrial design / architecture method

12. A methodology where you build something, sketch something - create anidea - and then show it to people, let them critique it and tell you what'sgood and bad about it.  Then iterate.  Take an idea, put it outin front of people, rip it to shreds, etc.  But you get to do thatto their designs as well.

13. They'll do the Design Studio Method sessions with their clients and getpaid for it.

14. Write down a few keywords to describe the product today

15. Write down a few keywords to describe the product 6-9 months from now

- print this out, put it in big words in the room

1. --> allows them to see their goals --> see what it is now, andwhat they're targetting

2. Personas - people that are going to

3. Inspirational printouts - stuff that looks aesthetically good or stuffthat has good interaction - stuff to aspire to include in the next versionof the product

4. Break into teams

their ideas

to critique.  Say 2 things that are strong about the idea and7. Process:

1. Get started ASAP

2. Messy is okay

3. Quantity then quality --> generate lots of ideas and then refine

1. Templates that they use:

marker to denote what's good and what's not)2. Second round your sketches are up on the wall3. 5 minutes to draw 6-8 sketches4. Can also be used as a storyboard5. One or two rounds with 8 ups - sketching, critiquing, etc.2. Then a 1 up14. Three rules:

CEO?)2. Plan a little.  Prototype the rest.  This guy does about70% in sketches / planned out, then starts prototyping.3. Set expectations - to combat questions like "why is this B&W" or "whatabout the admin" etc.15. Closing thoughts:

sketch, good enough to put their idea down on paper.2. It's [sketches] not the mona lisa.  Just needs to be good enough.  Notgoing to live forever in Moma or the Louvre, etc.3. If you can't make it then fake it.  E.g. if you can't get it towork in Javascript, use Keynote.4. Prototype only what you need.  Prototype the unique parts, notthe entire system.5. Reduce risk.  Prototype early and often.  Do about 2 weeksof design studio sessions with their clients.  Then they jump rightinto prototyping.  Then they do weekly releases.  Whole agileargument - small and rapid iterations.

"You can fix it now on the drafting board with an eraser or you can fixit later on the construction site with a sledge hammer." - Frank LloydWright

Todd was promoting his new book:Prototyping - A Practioner's Guide - byTodd Zaki Warfel, which I've added tomy wishlist at Amazon. He mentioned that it has 6 tutorial chapters, a bit on how to sell prototyping, and some other interesting stuff.

### Freeing and Visualizing Financial Data

This talk was given byToby Segaran(@kiwitobes) andJesper Andersen(@jandersen). They put theslides from the presentation up on slideshare. My notes:

1. Why visualize?

2. To form a hypothesis

3. To tell a story

4. Single variable - shows you that a variable is moving but doesn't tell you why

5. Data Sources

6. XBRL- put forth by SEC - to put all corporate-filed reports into the open domain in an XML readable format

1. BSYM - Bloomberg Open Symbology

1. Yahoo! Finance data - downloadable via CSV - data goes back

2. Amazon Web Services -> Category: Economics -> lots of data feeds

3. "Trader Work Station" - some Java thing

4. Freerisk - site they created

- Facebook

- Twitter

- Linkedin

### Subscribe to SmartLogic Blog

Get the latest posts delivered right to your inbox.

### Rack::Rewrite for Site Maintenance and Downtime

### Rack::Rewrite + Google Analytics Makes Site Transitions Seamless
