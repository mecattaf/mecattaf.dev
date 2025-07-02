## Definition

Dev Rel is all about having empathy with users. You represent the community for the company. How do you do it with developers?

syndicate content creation, be able to reuse content, good documentation and relevant content. Need to be able to go from Slack → Discord for community → or StackOverFlow

"you're not trying to create a community, you're trying to recognize one that exists"

"you have to tell a story about the opportunity and size of the movement"

## *Three components of the Developer Experience Engineer role*
    
    1) Customer Operations:
    
    Who is the customer? How do they get value out of the product? Being their voice. Go through different customer use cases and generalize learnings for other users. Help new users solving problems, turn existing design partners into customers, make new introductions to folks.
    
    2) Product focus:
    
    Should we prototype this feature? What are the gaps? Identify the high-leverage strategies. Help hit the right pain points with new feature releases. Understand what causes complexity to increase when deploying ML models in production. One idea I had was to run an experiment on university Data Science academic classes vs. this year's cohort of YC Seed-stage companies vs. some B2B companies doing their Series A. 
    
    3) Growth:
    
    Distribution, community, content (with different levels of technical difficulty). No need for PMs ("you know what done means" culture). Leads community initiatives to acquire, retain and grow the user base. This means allocating the right resources to nail onboarding, documentation and community engagement.

## *Some KPIs for DS tooling, AI and ML products*
    
    **AARRR framework for B2D:**
    
    - Acquisition ([LTV](https://statsforstartups.com/kpis/Customer-Lifetime-Value/), [CAC](https://statsforstartups.com/kpis/Customer-Acquisition-Cost/), [L/C](https://statsforstartups.com/kpis/LTV-CAC-Ratio/), segmentation per acquisition channel, content engagement on different platforms)
    - Activation ([L/A](https://statsforstartups.com/kpis/logins-to-activation/), "time to Aha! moment", deep network access)
    - Retention (**cohort analysis** for ****[Churn](https://statsforstartups.com/kpis/gross-churn-rate/), days logged in per week, amount of API calls per week. At first, it's sufficient to have "solvability of problems")
    - Referral ([Virality](https://statsforstartups.com/kpis/Viral-Coefficient/), or some proxies like [Power Users](https://statsforstartups.com/kpis/power-users/) and amount of organic third-party content produced on the selected channels)
    - Revenue (really depends if you go B2B SaaS Enterprise where you look at things like [NDR](https://statsforstartups.com/kpis/Net-Dollar-Retention/), [SPC](https://statsforstartups.com/kpis/sales-pipeline-coverage/), [AOV](https://statsforstartups.com/kpis/Average-Order-Value/); or consumer software with [CPR](https://statsforstartups.com/kpis/cac-payback-period/), [GMV](https://statsforstartups.com/kpis/gross-margin-value/), [NRR](https://statsforstartups.com/kpis/Net-Revenue-Retention/))


## *Notes on PLG (product-led growth)*
    
    ### Definition of PLG:
    
    You know you have product-led growth when you scale your business by giving people access to the product, unlocking viral loops and monetizing the self-serve model. The company is expanding because of the product. 
    
    ### What it isn't:
    
    When there are a lot of humans in the loop, or when you need a human to help you achieve the value of the product, it's not PLG. You're trying to get self-help users to get their first Aha! moment without having to speak with anybody. 
    
    ### What's specific about dev-oriented ("B2Developers") software?
    
    You want to tap into the motions where devs on your team and new users can pool insights together to build an approachable product. It's a shift in your mindset for both PLG and DevRel. Product marketing cannot be one person, it's a responsibility of the whole company. But one function has to focus on disseminating those same learnings to the widest possible audience. 
    
    ---
    
    **Properties of developers:** They're complex in nature. 
    
    - Want to jump in right away ⇒ Great documentation
    - No BS marketing. It's DevRel, sampling (let me show you how to do this technical thing). Get product out there on blogs. Live coding sessions. Attending meetups.
    - They like figuring out hard problems on their own
    
    ---
    
    Going from zero to one in DevRel: 
    
    Everybody starts as an unknown company, so build trust and thought leadership. Not about volume, about quality. Open-source: community builds on its own. Show what's under the hood: technical context. 
    
## *Thoughts on Community vs Content*
    
    A good community is an engine for growth, because it makes it easier for users to help each other and it ensures that you are aware of what your users are looking to solve with your product. Allows you to build the features that give the most leverage to the users.
    
    On the other hand, it's easy to underestimate [the compounding returns of content marketing](https://tomtunguz.com/content-marketing-compounding-returns/) in some specific situations, where a consistent strategy is implemented over a long period of time (regular but sparse content is better than many updates in one go). Developers like to try products and quickly make a decision before delving in and committing to becoming advanced users.
    
    Yesterday you asked me which one is more important, and I kind of dodged the question by saying they should both be full team contributions. But in this case, I think the order of importance is Content > Community. By definition, the community will become really crucial when you decide to make the product widely available. In the meantime, it's never too early to start channeling all of your learnings from the product back to the users - not only in the form of features but also in the form of "best practices" or guides.

## The 7 Kinds of Community Roles by @DavidSpinks

    1. Community Marketing - grows the community
    2. Community Engagement - directly engages w/ the cmty
    3. Community Education - develops training and educational content for the cmty
    4. Community Designer - designs cmty products, platforms, and experiences
    5. Community Events - runs live experiences (salons, meetups, conferences)
    6. Community Operations - runs tooling, systems, processes, data, and reporting
    7. Community Programs - runs scaled cmty leadership/moderator/chapter programs


## Developer Experience and Developer Relations

#### Why every software team should have a developer experience owner
In recent years, more and more companies have realized that sentences such as “every company is a software company” and “software is eating the world” are more than theoretical statements. They rather express a new reality in which software departments are not only cost centers providing support functions for “actual business”. Software is now very often a key component of success.

Since development capacity is a scarce resource and good IT talent is hard to find, developer productivity has become very important in almost any scenario. It is no longer enough to have software engineers doing their job of producing software, they also need to do it efficiently. To achieve this, the developer experience (in terms of workflows, tools, communication etc.) must be optimized, which is not a simple task.

What is developer experience (DX)?
Developer Experience (DX) is the experience a developer has while performing a specific task or doing a job.

While this definition might sound simplistic, its real-world meaning is multifaceted and complex.

Developer Experience for Tools
To perform their work, developers always need specific tools, such as IDEs, debuggers, monitoring tools, versioning software, and many others. With increasing competition for pretty much all of these tools, they are already often optimized to meet the needs of their users and the providers of these tools are usually aware of the main factors that drive a good DX for tools. Albert Cavalcante wrote a post about DX for dev tools also showing the relation of DX and UX (User Experience). He lists the following main factors for a good DX of a dev tool:

Stability: The tool is reliable and works when needed. If bugs occur, they are fixed as fast as possible.
Ease of Use: The tool can be used intuitively, you can find all necessary information and there are smart defaults. (This includes more than just the user interface, but things like documentation, templates, shortcuts, community support,…)
Clarity: The tool displays all necessary information in an understandable way and provides full visibility of the consequences of any action.
Beyond what is mentioned in the article, there are certainly other things to consider when you provide a tool with a great developer experience, such as:

Integrability: The tool works with other tools in a meaningful way and provides necessary interfaces for this.
While all these factors just consider the perspective of a user of a single tool, software development takes place in a more complex setting with a variety of tools and usually in a team. For this, it makes sense to also take a look at DX in software teams.

Developer Experience in Teams
DX in a team is the experience a developer has during his actual work of developing software in a team setting and with several tools.

To have a really good developer experience in a team, again many factors play a role:

Workflow Standardization: Everybody on the team should use the same workflow for the same task to avoid additional problems and conflicts. For example, this could include a standardized process of testing and debugging before deploying.
Choice of Tool Set: Everybody on the team should use the same tools for the same task and they should be configured in the same way. (Identical configuration mainly includes shared tools such as CI/CD-tools or staging environments. Of course, it does not mean that everybody needs to have exactly the same settings/user preferences such as a “Dark Mode” in an IDE.)
Documentation: Not only existing software, but also workflows and processes should be properly documented and the documentation should be easy to understand and use.
On-Boarding: If new developers join a team, it should be clear what they have to do. They need to know which tools they should install and use, which tasks to take on, and who to turn to with their questions.
This list could probably be extended by many other factors. However, it should already be clear that ensuring all of this and keeping it up to date is not always easy. This is why I want to propose a new role in developer teams: The Developer Experience Owner, DXO.

The Developer Experience Owner (DXO)
What is a Developer Experience Owner (DXO)?
A DXO is a member of an engineering team who is designated to care for the developer experience of the team by selecting and configuring the tools, defining workflows, on-boarding new team members and being a central person of contact for all questions regarding developer experience.

Typical Tasks of a DXO
As multifaceted as the developer experience itself are the tasks a DXO has to perform. Typically, the DXO should be responsible for the selection of the tools used in a team. The Developer Experience Owner should constantly evaluate if the currently used tools are optimal for the tasks at hand and determine if they should be replaced or differently configured.

Especially in CI/CD, the tool landscape is evolving very fast and the average developer does not want to manage the associated processes. Here, developers often need access to a staging environment, which could also be managed by the DXO, either by managing the staging environment itself or by managing the access of the developers to it.

Another aspect of the role of the DXO is keeping the developers “in sync”, i.e. ensuring that everybody knows what is going on, and when and which updates are needed. This may also include preventing the emergence of a bad form of shadow IT, where developers use tools or processes without telling anybody because they fear it could not be allowed. In such cases, the DXO should be involved in testing the tools and workflows and should subsequently have the power to formally allow and promote their use.

Related to this, the DXO is responsible for the documentation of all internal workflows, which requires a constant process of updating and revising to keep the documentation current and relevant. This is especially important when on-boarding new developers to the team. In this situation, new team members regularly face a lot of issues and the DXO should not only provide them all necessary information but also be the go-to person for any remaining questions.

In general, the DXO serves as central point of contact for all issues, ideas and complaints concerning the developer experience in the team, but also plays a key role for non-technical managers in communicating with the dev team.

Benefits of a DXO
As stated in the beginning, developer productivity is nowadays a key competitive advantage. Besides the obvious productivity advantages, it can also lead to higher quality outcomes if everybody knows exactly what they are doing, why they are doing it and can focus on their specific tasks.

It can also improve the developer happiness resulting in lower employee turnover and more motivation by giving the developers the opportunity to focus on their actual work instead of being distracted by communication problems, malfunctioning tools and finding missing information.

Additionally, every new team member will be positively surprised if they can meaningfully contribute from Day 1 instead of having to set up their environment on their own without a trusted person to turn to for questions.

Of course, all of this can be achieved without a dedicated Developer Experience Owner. However, similar to the concept of code ownership, ownership of the developer experience will enforce responsibility for it. It will also be easier to keep the team synchronized because there are less people involved in decision making.

The Role of a DXO
So, what makes the ideal DXO candidate? At first, as the role is so tightly connected to internal processes and communication, a DXO should almost always be someone who has been working in the team for a while. They need to know the company’s goals and the existing software architecture as well as the current tool set and the reasons why it was chosen as it is. This usually requires a more senior position for DXOs, but I believe this is not a necessity if a suitable candidate can be found otherwise.

Generally, a DXO needs to have an exceptional understanding of software engineering and the related processes. If the DXO is supposed to manage a team with both front- and backend engineers, it should be a person which understands both worlds. Since the role often also involves CI/CD, an understanding of DevOps or even Operations technologies would certainly be helpful, too.

Another very important trait of the ideal DXO is the ability to communicate very efficiently but also sympathetically. They need to be a trusted person the team members can turn to even with “stupid” questions. This also requires a very good reputation with their colleagues as DXOs need to have the authority to make decisions. Finally, it is very important that the candidate is willing to take on this role as it will be at least a major distraction from actual software developing.

Recommendations and Conclusion
Some companies already hire DX Engineers, but this is mostly an externally facing role for an engineer who is responsible for SDKs used by outside developers or who works as developer advocate for open-source software. I believe that an internally facing role caring for the experience of your own developers is at least as important as an externally facing one.

While there might already be someone in your team working as implicit DXO, it could be beneficial turn this into an explicit, formal role. Still, that does not mean that it needs to become a full-time position. It should rather come with additional responsibility, decision authority and a time budget allocated to test new tools and care for the dev experience in your team. It can also make sense to choose a small group to share the tasks in this area.

So maybe think about your team or ask around if there already is an implicit DXO. If not, you should consider promoting someone to DXO. And if there is one, you should really think about appreciating what they do to make their colleagues happy and engineering processes better by giving them an additional title, more time and potentially a raise for the important work they do.

---

#### What is DX?
Albert Cavalcante

Terms like UX, UI, and the overall user experience are no longer news to many tech-savvy people, content like these are multiplying, and you can learn a lot about them within minutes.

It’s important to note that the experience has no longer been just layout and CSS for some time, and today, it’s much more oriented to the consumer’s journey, his touch-points, pain-points, and how to help this person to solve a problem in a better way.

Among the various rising digital product markets, we highlight development, where every day devs become more active and demanding with their experience and the quality of the products they use.

By contrast, in the vast majority of products designed for them, the experience is terrible and can be traumatic. I don’t understand why this happens, but I think because it’s a more technical persona, the product’s UX owners end up believing the developer will turn around, but that’s wrong, developers deserve solutions as well designed as non-technical people.

This thought, as I said earlier, generates terrible and even traumatic experiences, and these are one of the factors that have rejected many new solutions in this market.

Going deeper into this theme, I‘ve seen many people already talking about rich experiences for developers, where the concept already has a name, DX — Developer Experience.

What is DX?

Developer Experience is the equivalent of User Experience when the primary user of the product is a developer. DX cares about the developer experience of using a product, its libs, SDKs, documentation, frameworks, open-source solutions, general tools, APIs, etc.

DX and UX share some principles, but with differences in good practice, this is because developers have different needs in their daily context compared to an average user.

In short, DX is important for the same reasons that UX is important. Developers who find good DX are happier, promote more, and use their product longer.

Those working in the technology world are used to getting recommendations for new solutions from colleagues, friends, and peers, and the products that top the list as the most recommended are the ones with good DX.

Developer Experience Pillars
Just like UX, DX also has premises and pillars identifying when the experience is positive and when it is not. Below I list some pillars and explain more about them:

Function
The foundation of the developer experience, a dev tool is as good as the role it offers to perform an activity. Good interface, marketing, miracle promises, and bullshit, in general, won’t be able to hide bad functionality. If it doesn’t work, it’s no use, there’s no DX.

Stability
In addition to working, your product has to have high performance and reliability, of course, the software is subject to bugs, so it is important to quickly fix product errors so as not to cause major harm to users.

Instability in the relationship of trust with your product begins to build without it, the perception of value drops dramatically.

Ease of Use
Ease of use in DX is beyond what it seems, it’s not just about navigating the tool, but also accessing what you need at all stages of the journey quickly and efficiently.

Rich documentation, use cases, communities, knowledge bases, keyboard shortcuts, snippets, intuitive filters, previously saved searches, as well as deeper points like performance, together add speed to the process of developer interaction with your product and increases engagement.

Clarity
At this point DX is committed to providing a simple interface that brings the information the developer needs to get their work done, helping them with critical actions in their daily lives. Clarity is about giving the developer full visibility of the possible consequences involved in an action and the history of these actions.

DX Cases
As I said earlier, DX may seem like a new term in the market, some companies are already concerned with offering rich experiences for developers and have really interesting cases, below I list some examples and why they are good cases of DX.

Stripe (https://stripe.com) — One of the best online payment tools on the market, Stripe stands out for its concern to provide developers with the best possible experience with their tool, documentation, use cases, demo videos, webinars, tool’s ease of deployment. All this together gives the message regarding DX.

Atlassian (https://www.atlassian.com/) — Atlassian today can be considered the largest software development and collaboration suite on the market, its maturity providing a developer self-experience in any of its tools (such as Jira for project management, Confluence for the knowledge base, and Bitbucket as a repository) is something most software companies should look into.

Firebase (https://firebase.google.com) — Google’s mobile and web app development platform stands out for ease of setup, the highlight of your experience is the ease of use and clarity with which actions can be performed inside the platform.

Conclusion
DX will be increasingly addressed in digital product alignments and strategies, as developers are increasingly considered to be a major player in the business, and often decision-makers.

Here at LinkApi, we are looking at DX with extreme attention and importance as we are a tool for developers looking to eliminate trauma with software integrations.

One thing I can tell is that when you can leverage the experience of developers using your product, you can eliminate at least half of the friction in adopting it, and increase the engagement by 50%.

#### Developer Experience Metrics
Hi people, continuing the series of articles on developer experience now we will address the topic of metrics for DX, the central idea of this article is to bring a list of metrics that can be used to measure whether your product is appropriate or not within this principle. In case you do not have a clear idea of what is DX I recommend that you read the first article in the series.

In my view the first step to create DX metrics is to already have full mastery over UX metrics, but why? Because DX is a strand within UX, that is developers who use your product, even if extremely technical users, are still users who will be impacted if your product has a bad UX.

Users > user experience > developers > developer experience

So, going against the idea that knowing about DX means understanding UX as well, let’s list some pillars within the user’s experience universe and how to measure them.

UX pillars
Usability
How easy is your product for your users? The pillar of usability comes to direct us concerning the experience we will draw for our product, or show us points of improvement within the current experience. To measure usability, I recommend the following methods:

Guerrilla test (go out and ask who you find)
Lab test (call a group of people to a specific location and test your product with them)
Remote usability test (Give the user access to the product and measure their interaction, for this I use hotjar, mixpanel, among others)
Face-to-face and/or remote interview (Assemble your script and select a group of people to interview, here you can collect qualitative and quantitative data, usually adopt a qualitative data approach and then turn it into quantitative).
Accessibility
Is your product or service accessible to your target users in their respective roles? It is important to map all the people who will use your product and your journeys during this use, for this an artifact called journey map is usually elaborated, in it, you can map all the stages of the journey, also being able to map some important points to your context, such as challenges in each step, below I put the framework that I use to create my journey maps.

As you can see, at each step, I’ve already cast what possible metrics I can use to validate that each step is going well or not, for a product manager this greatly facilitates the process mapping business KPIs and technology.

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/bff52d6f-808b-4f40-8cba-a0f3912c4c00/public) <!-- image-uuid: f447ee2e-a951-45eb-b118-d89ea791135f -->


Findability
For those who are Brazilian and like football, reading this word may seem like a term that coach Tite of the Brazilian national team invented lol. Jokes aside, how simple is it for your user to find what they need in your product?

In this pixel the main way to validate efficiency is by measuring the time used by the user to complete a task, you can do this through laboratory tests with screen recording and user, or else remotely using the hotjar or screen record tool.

A cool thing can be to put in the array of user flows a line of “Time to complete a task”, so you can compare time between several different journey proposals.

Credibility
I believe that this is the pilar that most directly has a relationship with DX, because credibility in products is to know if what you promised has been delivered to your customer, and if there is something that developers do not like, it is people/companies that promise things and do not deliver them.

I worked on a large project of a company that used a giant framework for development, they promised to accelerate the work of developers up to 10x, but they had so many bugs that in the end we were delayed by almost 2x, we left the framework aside and only consummated their APIs when necessary, a project delivered on time.

Therefore, one of the best ways to measure credibility is to measure bugs, simple as well, measure beyond bugs that appear within the product, process bugs due to your user’s lack of understanding of how something works are just as bad.

To measure bugs I use Jira’s service desk, I know that sometimes an additional character in a sentence can be understood as a critical bug by your users and this can hinder your metric, so it is important to have mapped business KPIs and technology so that at some point you revisit the tickets and categorize them accordingly to their real importance and accordingly to the KPIs you have.


Is it possible to apply UX metrics in DX?
This is a question That I asked at the beginning of my journey working with products that were intended for developers, because when researching about DX metrics I did not find any framework or list of methods of validation of experience, however, I found dx pixels that helped me define processes to measure the effectiveness of my product.

When analyzing the dx pixels I noticed a natural correlation with UX with some small changes, so I imagined it possible to apply UX metrics, for this I made a correlation of the pixels of each and possible application of the same metrics. Below I list the dx and UX pixels and their correlation.

[DX] Function = [UX] Accessibility
The basis of the developers’ experience, a dev tool is as good as the function it offers to perform an activity. Good interface, marketing, miraculous promises, and bullshit in general, will not be able to hide bad features. If it doesn’t work, it’s no use, there’s no DX.

One thing I noticed in many developers tools is that they solve the challenge they propose, but do not have good accessibility, either because the product is being used by someone who is not the target audience, or because the journey was not designed for the different types of users who will be in contact with the product.

For this point, it is important to make the journey map of all the personas that will be in contact with the product, so you can outline a journey for each thinking of its particularities.

[DX] Stability (Uptime) = [UX] Credibility
In addition to working, your product must have high performance and reliability, of course, the software is subject to bugs, so it is important to quickly troubleshoot errors in the product so as not to cause great damage to users.

Uptime in the relationship of trust with your product begins to be built, with it, the perception of value drops dramatically.

Part of a product’s experience is provided by the degree of credibility that the product passes on to its customers. In the case of products for developers, this is the degree of stability that this product provides since the uptime of a platform in addition to giving headaches to its users can generate losses of millions of dollars.

For example, when AWS or Azure falls for a few moments, it loses all your customers who use this service and consequently, your customers’ customers. For me, stability is one of the strongest piers within DX.

To measure uptime, I recommend using tools that measure uptime as Statuspage.io of Atlassian for ease of implementation, flexibility to measure various services, and a good experience for those who will consume the service.


[DX] Ease of use = [DX] Usability
Ease of use in DX is beyond what it seems, it is not only about navigating the tool, but also about accessing what is needed at all stages of the journey quickly and efficiently.

Rich documentation, use cases, communities, knowledge bases, keyboard shortcuts, snippets, intuitive filters, previously saved searches, also, deeper points like performance together add speed to the developer’s interaction process with your product and increase engagement.

In UX we say that it is common to say that good design does not often need to be explained, but in DX this is a little different because sometimes your product is a horizontal offer (horizontal offer = applicable to various segments and different use cases) and the first step to provide a good DX is to understand what challenges to be solved within by your customer is.

To measure ease of use I recommend using feedback tools within the platform such as Hotjar or Mixpanel (I find hotjar more affordable in terms of costs but less complete as a solution), and the trigger for these feedbacks should appear at the end of a key point of the journey.


[DX] Clarity = [UX] Findability
At this point DX is committed to providing a simple interface that brings the information needed by the developer to do his work, helping them with critical day-to-day actions. Clarity is concerned with providing the developer with full visibility into the possible consequences involved in an action and the history of its actions.

Another common mistake I see on platforms for developers is to present all the functionality they have for a persona at the same time, sometimes even having mapped the journey to that persona, this happens by the fact that being all visible is better for the user when finding something they need.

But this is not correct. The ideal situation is to present all the functionality according to the user’s evolution within the product, according to the specific use case. On very large platforms such as the Atlassian suite, they redesign their navigation to orchestrate the various functionalities between products (common user view and admin) in two menus and a general search.

To measure findability and clarity I recommend it to be used again or Hotjar and Mixpanel for collecting heatmaps on specific pages (in this case only Hotjar has heatmaps), and also for mapping navigation funnel step-by-step and measuring breakpoints of this funnel.


Conclusion
Finally, I believe that UX metrics are valid, to measure DX and the only set of metrics you need to use, as long as you make the necessary adjustments to your context, this is the most important point, because, in the end, you need to deeply understand the people, scenarios, challenges, and objectives that will be in contact with your product, only then can you choose assertively which metrics make sense to measure your business success.

We’re here in this article, in the DX series. In the next article, I’ll cover how developer communities can make your product grow absurdly or die in the blink of an eye.

#### How to reach Developer Experience supreme level — Part one


Hi all, glad to be here again! I have seen many companies recently evolve their products through good DX, and I have to confess, it’s amazing! Recently, I spoke with some of my colleagues about their experiences designing products that provide good solutions for both business and technical personas. I gained interesting insight. During those conversations, I noticed that people professed difficulty measuring how great their DX is — that’s why I wrote the Developer Experience Metrics. But beyond measuring DX, people were struggling to identify the maturity levels of these professionals at their jobs. So I decided to write this article and explain my Developer Experience Maturity thesis.

To begin, why is it important to map DX maturity levels?

Understanding a Developer’s Journey
In my experience, many players tried to provide great DX with high-level actions, forgetting about the details throughout the process. For example, some API Management tool creators tried to enable great DX by giving their users a full distribution experience within their developer portals, but they forgot to really seek understanding of the beginning of the journey, the development portion… They didn’t map the entire journey, and instead, they focused on just one frame.

Don’t get me wrong, I know some products focus on a small piece of the user’s tasks for good reason, but when you work with developers you should worry about the entire experience, even when your product’s purpose is to resolve a small piece of it. Because when we talk about designing products for developers, it’s almost a rule: they will use your product with another tool. So, when I set out to identify a general developer journey I plotted the following sequence:


The idea of this article isn’t to describe the development process, but it’s important to provide a short explanation to get us on the same footing:

Solution Design: In this step, the developer receives the business requirements from the business personas (Product Manager, Product Owner, etc.), and with them, he designs the solution architecture. He can do it with a BPMN diagram, a mindmap, and any other tool that he feels comfortable using during this process.
Development: The build phase, where the team will develop the proposed solution. Here they can use agile methodologies like Scrum, Kanban, eXtreme Programming, etc.
Tests: You build it, you run it! This is Google’s mindset for their engineering teams, and I deeply believe in it and apply this to my own teams’ evolution. Basically, every developer should test their release, and not only unit tests but testing the entire client’s (end-user) experience to validate if the release will break another part of the product.
Release: Let your customer feel your work, the release should be exciting for developers and customers! Here I prefer to use a cascaded release schedule; first, a smaller group of users, just because I want to understand how they will absorb the new experience, and after this validation process, I release to the larger user base.
Monitoring: You build it, you run it, again! Doesn’t matter if you work with product development or professional services, you should always have a plan to monitor your releases. In every project that I worked on, I recommended my team develop custom dashboards to monitor usage. Usually, we use Metabase as our BI tool. Why Metabase? Because it’s an open-source tool, and we love open-source. ❤
Client’s insights: A well-done monitoring process gives you insights about which clients you should speak to for future information, and don’t think this is only a UX Designer or Product Manager’s responsibility! Great developers like to speak with their users because this helps them evolve the product even more.
DX Maturity Levels
Now we can and speak about Developers Experience Maturity, and relate it to the general developer’s journey. To measure this I developed a framework with five levels:


Suffering Because of Bad DX
Every developer tool/service company will pass through this phase, even if DX is never important to them. This is because bad DX doesn’t impact only the user’s happiness; it will impact their sales, marketing, employee branding, etc. So these companies will be affected by their bad DX but very few of them will realize the problem’s origin.

Understanding DX
The small group of companies that realize the origin of their problems was DX will start to understand this subject by stumbling upon it. The product manager responsible for the product or feature will be the first warrior in this war. He will google the term, search for cases, references, etc. In my experience, I noticed this process takes at least two months. If you are at this level, I deeply recommend that you read What is DX.

Applying DX For Your Product
After understanding “what is DX” you will start to apply the concepts for your product. First, you’ll probably start to track your developers’ journeys; you’ll map it out, identify their needs, identify their desires, and see how your product will make their life greater.

In moments like these things get even more interesting. You start to realize that modifying your product isn’t enough to provide great DX. So you start to analyze your company, how your marketing team speaks about your product, how your sales team sells your product, how your customer success team helps your clients utilize your product.

Since this is not a matter of developing features, you will start to see that even the words you use in your product communication will be important for good developer experience. I recommend using the User Journey Framework to map your developer’s journey. You can find an example here.

This phase is really exciting, and you will need to be an excellent communicator to engage your internal stakeholders to modify your company because you will probably make changes to your organization structure — areas will be redesigned, people will be hired, a developer community will be created.

Evangelizing DX
Back in the days, I was responsible for creating our internal developer community, I realized that just having a great product for our customers and modifying our company internally was not sufficient to master DX for our products. So I started to look externally, to consider how our company and our team could help more developers, and I created the Kapi Community.

After this, I designed a career development plan for my team that helps them evolve and generate great content for the world development community. Currently, our content is primarily in Portuguese; we realized that Brazilian Developers require quality communities dedicated to career growth and accessible development content in their primary language.

We also strive to find great partners in our mission. Here in Brazil, we have Rocketseat, a company designed by developers for developers, as well as NewSchool, a company that helps children in need better prepare themselves for the world in front of them, a future in STEM. These two companies are some of our developers’ community partners.

And to finish, I wrote this article explaining DX because I saw that many people don’t understand a simple fundamental truth: that developers deserve as great an experience as normal users, and these same people don’t understand how their product could be greater, their companies bigger, all through the simple act of making more developer-friendly tools.

The highest level of developer experience is when you start to be an active part of this battle: generating content, gathering insight, creating communities, basically being part of the process of evangelizing DX all over the world. We already have a job title for it — Developer Relations. This is one of the jobs to watch for the future; every company that respects DX will soon have this person on their team.

#### How to reach Developer Experience supreme level — Part Two — Suffering Because of Bad DX

Almost every product built for developers had the same problem in their start, building something good enough in the fastest way possible, it's the common MVP way to build something, or just the developers need to deliver, deliver and deliver…

Probably these products will have unfinished features, which is ok at this point because they need to validate their product-market fit.

So, the company accomplishes the market validation, they have tons of new customers, they start to scale their sales and marketing team, everything looks just fine… Or not.

This growth strategy has a downside, a lot of technical debts probably had been created, sooner or later, these debts come and start to slow down your growth, and then, you start to suffer from Bad DX!

"How do I identify if my product has bad DX?"

Identifying bad DX
First things first, you have a Dev-Tool as a product so you should know the Developer's General Journey, this will be your guide through your DX self-inspection.


I explained deeply about Developer's General Journey in this post https://medium.com/linkapi-solutions/how-to-reach-developer-experience-supreme-level-part-one-ed87015af29f
Every Dev-Tool that I know works with at least four of these six pillars, so basically what you should do is split your product into these pillars and measure their effectiveness.

You can do that using DX Metrics as a framework, and a spreadsheet to track your points. You have to evaluate your features based on DX Metrics and put the results into the spreadsheet. Below I inserted an example to help you through this process, and you can download it here.


![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/3fabac7d-d242-449e-92d0-067efde16d00/public) <!-- image-uuid: 6a950a5b-378f-45c1-aa42-0e3fe0d0ff4b -->
DX Self Inspection Sheet
I recommend that you do this process at least every half year, this will give you a good perspective of which pillar you should be more focused on, and it will be a good retrospective tool, also, since it will enable you to analyze where your product needs attention.

After you complete this spreadsheet you will have a holistic view of your product in terms of Developer Experience, so all you will have to do is design a plan that will try to solve these problems.

Stop suffering from Bad DX
The first step for stopping suffering because of Bad DX after you had identified the pain points using the DX Self Inspection sheet, is to start a discovery process that will enable you to identify possible solutions for them.


![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/f3fbae1f-a23a-408d-0918-0c4fbbbdc900/public) <!-- image-uuid: e5cc4c76-cd3d-4be0-a3ca-13218bbfaba8 -->
Ref: A Continuous Product Discovery Framework for Agile teams by Anthony Rousounelos
Recently I found a great article explaining a continuous product discovery framework, and I believe if you don’t use any other framework this will be helpful.

I enjoy continuous discovery processes because I believe that products are like living beings, they never stop changing, so your product roadmap should follow the same rhythm, of course, having your business objectives well defined and aligned with an experimentation strategy like this one.

Once you have defined the main solutions and their key outcomes, it's time to implement them. For it, you can use the implementation process present in the article that I mentioned previously.

As a final step, release, track and analyze these new modifications, use tools like Mixpanel and Hotjar for it, if you achieve your outcomes, great, it's time to move forward, if not, repeat the process.

In the end, to stop suffering because of Bad DX you need to realize that you have Bad DX, you need to understand what's DX, and apply it to your product.


---

#### Orbit.love: Laying the Groundwork for Your First Developer Relations Hire

One of the most common questions we’re asked by founders and execs is “When should I hire my first developer advocate?” This is no surprise to us. More and more companies are developer-focused, or at least offer an API, and have come to grips with the fact that marketing and sales aren't the right tools for driving product or platform adoption. That’s why we say software is adopted, not sold.

Jobs in developer advocacy, evangelism, and community are more in-demand than ever, attracting and retaining a developer advocate is less about stats like funding or company size, and more about organizational readiness.

Before you ask, “When should we hire a developer advocate,” we recommend asking “Are we ready to hire a developer advocate?” The latter question will help you focus your efforts through understanding what kinds of activities will impact your business the kind of person you should attract.

Before we dive in, let’s clear the air on role terminology. The titles developer advocate and evangelist are often used interchangeably, but developer advocate is the more modern choice and the one that we recommend. Developer Relations is the umbrella term for the team and a set of programs and practices. A “DevRel” can refer to anyone doing developer relations, be it a developer advocate, evangelist, or technical community manager.

So how do you know when your company is ready to hire your first DevRel?

Two ways to get ready
Before you make that hire, you should do two things:

Do some DevRel yourself — by the time you’re ready to hire an advocate, your team has been doing DevRel activities for some time, ideally for at least a year
Clearly define expectations — you know what type of DevRel you’re looking for and you have defined expectations and success criteria
Many assume the first step to hiring an advocate is to post the job description. But unless you’ve done DevRel yourself and have clearly defined the success criteria, you’ll experience at least two types of negative outcomes.

First, hiring will take longer than you expect, since your job description won't resonate with the right candidates and you probably won't have a good way to assess a good fit. As a result, you may never close a hire at all.

Second, if you do make the hire, burnout is infinitely more likely because the new advocate won’t get the support and understanding from the rest of the team that they need.

Want to avoid these bad outcomes? Let’s dig into each point to understand how you can avoid the common pitfalls of building a DevRel team.

Invest in DIY DevRel from the beginning
Today, here are far more DevRel job openings than there are people to fill those roles. One job board we track has more than 250 open roles at any given time. As a result, DevRel folks can be picky and deliberate about the companies they work for and the products they work on.

You will find it hard to hire a developer advocate if you haven’t invested in the role yourself.
DevRels are attracted to teams with a clear track record of valuing DevRel activities, especially when it’s clear that the founders are fully onboard. In fact, your first DevRel should scale what’s already working, not completely start from scratch.

Before you open that job req, consider how you can demonstrate that DevRel is already a priority.

That’s why our first piece of advice for founders on this point is to spend some time doing developer relations yourself. This is particularly true for technical founders. Yes, this can be a lot to ask, but we’ve seen the investment payoff in many ways.

First, you’ll know exactly what it takes to be successful in the role.

Second, you’ll have demonstrated to the DevRel community that you’re serious about investing in developer relations, which can help build confidence in and credibility for your company. DevRels put their reputation on the line for the companies they represent, and companies with no history of participation represent unknowns and risk.

Content and speaking
One way to start doing DIY DevRel is to get the whole company writing developer-centric content, especially the engineers. This includes defining and facilitating the content production pipeline yourself, or partnering closely with marketing to deliver a cadence of useful technical content.

You should also keep an eye on speaking opportunities for relevant audiences. Submitting “Calls for Proposals,” or CFPs, is a common task for many DevRels. Doing CFPs and speaking at events will not only get you in front of potential users, but also help you understand the processes and challenges your future DevRel will experience when they’re on the road.

Partner with companies that have more mature DevRel programs
Look for companies with complementary technologies and co-host events with them. This results in visibility for your brand, key learnings from the field, as well as intros to potential hires. These partnerships are a great way to bootstrap an early-stage program.

Content, speaking, and partnerships are important and visible aspects of a DevRel program. More visibility, for you personally and for the company, leads to more trust in the community—and trust plays a critical role in getting developers to adopt your technology.

In addition to seeding trust in the community, your hands-on role in these areas will create process and infrastructure for your new hire, while differentiating the role among a sea of other competitive openings.

Define and document success criteria
The second way to prepare for your first hire is to ensure you have clear expectations for the DevRel’s role and success criteria.

To do that, first determine the types of activities that will have an impact for your business. Code, Content, and Community represent three buckets of typical DevRel activities, and after doing DevRel yourself, hopefully you have a POV on which of those areas you want your new DevRel to focus on.

What kinds of outcomes in each area will impact your business goals?

What percent of their time and energy should your DevRel invest in each area to achieve those outcomes?

This exercise will help you avoid a common failure case: expecting one person to spend 100% of their time on all three areas.

Second, consider the DevRel archetype that will be most effective for your organization. Just as there are different types of PMs and different styles of marketers, there are multiple DevRel archetypes.

Here are a couple of the more common we’ve seen.

Focused subject matter experts
These folks are deep experts on a specific language, platform, and/or community. They tend to work alone in service of that community, though they’re very active in online discussions and in person. Not all developer advocates are developers, but the ones that fit this archetype usually are.

They tend to travel frequently to deliver talks in their area of expertise and present at meetups. They often generate a lot of content based on their learnings from the field and in the community.

Generalist force multipliers
This type of DevRel bridges the gap between internal teams and external users, and up to 50% of their job could be collaborating internally to help the company understand developers.

They create processes and programs to help engineers publish blog posts, help product teams get developer feedback, organize events, or manage and showcase the accomplishments of the community.

They are knowledgeable about the tech they represent, but are not necessarily a developer or an expert in adjacent technologies.

For any archetype, realistic expectations are key
There’s plenty of nuance to common DevRel archetypes, and this list isn’t exhaustive, but here’s the main idea: no DevRel can be successful if they’re expected to play too many roles. That’s a recipe for burnout.

Common Failure case: hiring for force multiplier, but evaluating success based on subject matter expert expectations, e.g. number of blog posts or lines committed.

Your job description should incorporate your expectations around activities and outcomes, and should highlight aspects of the archetype your company needs. And ultimately, once you make the hire, your reporting and goal setting should be based on the expectations you set.

Putting the groundwork in place
By following these steps, you’ll learn a lot about how DevRel can impact your business, and what’s necessary for program success. Along the way, you’re certain to learn lots about developers in your community, and even build some empathy for them as well as for your DevRel team.

Ultimately, you’ll avoid this common and tragic result: "We didn't really know what we expected, but it's not working out."

---

Dev Rel is all about having empathy with users. You represent the community for the company. How do you do it with developers?

syndicate content creation, be able to reuse content, good documentation and relevant content. Need to be able to go from Slack → Discord for community → or StackOverFlow

"you're not trying to create a community, you're trying to recognize one that exists"

"you have to tell a story about the opportunity and size of the movement"

This falls under the category of "marketing for developers". This is in effect a product-led growth approach but for developer-oriented products. A great series of blog posts on the subject was appended earlier in this file.

Two good points here:

- Everybody should be writing experience and documentation
- The three C's of Dev Rel: Code, Content, Community

---

The 3-C's of Successful Customer Relationships
Three key factors are essential when building successful customer relationships: character, competence, and connection. Let's take a closer look at each of these in turn.

First, hashtag#character is about having hashtag#integrity and being someone that customers can trust. This means being honest, transparent, and consistently delivering on your promises. Customers want to know that they can rely on you to do what you say you will do and that you have their best interests at heart. Without character, it can be difficult to build lasting relationships with customers.

Next, hashtag#competence is about having the skills and expertise to deliver what you promise. This means having a deep understanding of your solutions and the industry in which you operate. Customers want to know that they are working with professionals who are knowledgeable and capable of meeting their needs. With competence, it can be easier to earn the trust and respect of customers. Competence and character build credibility!

Finally, hashtag#connection is about building a strong, personal bond with customers. This means going beyond just fulfilling their needs and looking for ways to create value for them. It's about building trust and rapport and showing that you genuinely care about your customers. Connecting can make it easier to develop loyal, long-term customer relationships.

So how can you ensure that you build customer relationships based on character, competence, and connection? Here are a few tips:

Be honest and transparent. This means being upfront about your products or services and any potential challenges or limitations.
Know your stuff. Stay up-to-date on your industry and your products or services, and be prepared to answer questions and address concerns.
Go the extra mile. Look for opportunities to create value for your customers through personalized service, additional resources, or other added benefits.
Build rapport. Take the time to get to know your customers, and look for ways to create a strong, personal connection with them.
Be consistent. Make sure to consistently deliver on your promises and meet your customers' expectations.

Building customer relationships based on character, competence, and connection can create loyal, long-term relationships that drive hashtag#business hashtag#success. Remember, it's not just about making a hashtag#sale - it's about building trust and creating value for your customers. So, always focus on these three critical factors to build successful customer relationships.
