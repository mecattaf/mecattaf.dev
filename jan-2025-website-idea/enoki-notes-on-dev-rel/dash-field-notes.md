---
index:
- Introducing Dash
- Dash Enterprise Fieldnotes #1 - Why Dash Enterprise?
- Dash Enterprise Fieldnotes #2 - App Manager
- Dash Enterprise Fieldnotes #3 - Design Kit
- Dash Enterprise Fieldnotes #4 - Job Queues
---


## 🌟 Introducing Dash 🌟

Create Reactive Web Apps in pure Python
Dash is a Open Source Python library for creating reactive, Web-based applications. Dash started as a public proof-of-concept on GitHub 2 years ago. We kept this prototype online, but subsequent work on Dash occurred behind closed doors. We used feedback from private trials at banks, labs, and data science teams to guide the product forward. Today, we’re excited to announce the first public release of Dash that is both enterprise-ready and a first-class member of Plotly’s open-source tools. Dash can be downloaded today from Python’s package manager with pip install dash — it’s entirely open-source and MIT licensed. You’ll find a getting started guide here and the Dash code on GitHub here.

Dash is a user interface library for creating analytical web applications. Those who use Python for data analysis, data exploration, visualization, modelling, instrument control, and reporting will find immediate use for Dash.

Dash makes it dead-simple to build a GUI around your data analysis code. Here’s a 43-line example of a Dash App that ties a Dropdown to a D3.js Plotly Graph. As the user selects a value in the Dropdown, the application code dynamically exports data from Google Finance into a Pandas DataFrame. This app was written in just 43 lines of code (view the source). Simple.


Hello World Dash app. For more examples, check out the user guide.
Dash app code is declarative and reactive, which makes it easy to build complex apps that contain many interactive elements. Here’s an example with 5 inputs, 3 outputs, and cross filtering. This app was composed in just 160 lines of code, all of which were Python.


Dash app with cross filtering, multiple inputs, and multiple outputs. Built in around 163 lines of Python. View the source
Every aesthetic element of the app is customizable: The sizing, the positioning, the colors, the fonts. Dash apps are built and published in the Web, so the full power of CSS is available. Here’s an example of a highly customized, interactive Dash report app, in the brand and style of a Goldman Sachs report.


A highly customized Dash app, styled just like a Goldman Sachs report. View the source.
While Dash apps are viewed in the web browser, you don’t have to write any Javascript or HTML. Dash provides a Python interface to a rich set of interactive web-based components.

import dash_core_components as dcc
dcc.Slider(value=4, min=-10, max=20, step=0.5,
           labels={-5: '-5 Degrees', 0: '0', 10: '10 Degrees'})

An example of a simple Dash Slider component
Dash provides a simple reactive decorator for binding your custom data analysis code to your Dash user interface.

@dash_app.callback(Output('graph-id', 'figure'),
                   [Input('slider-id', 'value')])
def your_data_analysis_function(new_slider_value):
    new_figure = your_compute_figure_function(new_slider_value)
    return new_figure
When an input element changes (e.g. when you select an item in the dropdown or drag a slider), Dash’s decorator provides your Python code with the new value of the input.

Your Python function can do anything that it wants with this input new value: It could filter a Pandas DataFrame, make a SQL query, run a simulation, perform a calculation, or start an experiment. Dash expects that your function will return a new property of some element in the UI, whether that’s a new graph,a new table, or a new text element.

For example, here’s a simple Dash application that updates a text box as you interact with the Graph element. The application code filters data in a Pandas DataFrame based off of the currently selected point.


Dash app that displays custom meta information as you hover over points by filtering a Pandas DataFrame. 60 lines of code. View the source.
This Dash application displays meta information about drugs as you hover over points in the Graph component. The application code also appends rows to the Table component when elements are added to the multi Dropdown component.


A Dash App for drug discovery. Hovering over points displays a description of the drug. Selecting drugs in the dropdown highlights their position in the chart and appends their symbol in the table below. Built in a few hundred lines of Python code.
Through these two abstractions — Python components and reactive functional decorators — Dash abstracts away all of the technologies and protocols that are required to build an interactive web-based application. Dash is simple enough that you can bind a user interface around your Python code in an afternoon.

Architecture
Flask and React

Dash applications are web servers running Flask and communicating JSON packets over HTTP requests. Dash’s frontend renders components using React.js, the Javascript user-interface library written and maintained by Facebook.

Flask is great. It’s widely adopted by the Python community and deployed in production environments everywhere. The underlying instance of Flask and all of its configurable properties is accessible to Dash app developers. For advanced developers, Dash apps can be extended through the rich set of Flask Plugins as well.

React is fantastic too. At Plotly, we’ve rewritten our entire web-platform and our online chart editor with React. One of the incredible things about React is how prolific and talented the community is. The open source React community has published thousands of high quality interactive components, from Dropdowns to Sliders to Calendar Pickers to Interactive Tables.

Dash leverages the power of Flask and React, putting them to work for Python data scientists who may not be expert Web programmers.

From React.js to Python Dash Components

Dash components are Python classes that encode the properties and values of a specific React component and that serialize as JSON. Dash provides a toolset to easily package React components (written in Javascript) as components that can be used in Dash. This toolset uses dynamic programming to automatically generate standard Python classes from annotated React propTypes. The resulting Python classes that represent Dash components are user friendly: They come with automatic argument validation, docstrings, and more.

Here’s an example of the dynamically generated argument validation:

>>> import dash_core_components as dcc
>>> dcc.Dropdown(valu=3)
Exception: Unexpected keyword argument `valu`
Allowed arguments: id, className, disabled, multi, options, placeholder, value
and an example of the dynamically generated component docstrings:

>>> help(dcc.Dropdown)
class Dropdown(dash.development.base_component.Component)
 |  A Dropdown component.
 |  Dropdown is an interactive dropdown element for selecting one or more
 |  items.
 |  The values and labels of the dropdown items are specified in the `options`
 |  property and the selected item(s) are specified with the `value` property.
 |
 |  Use a dropdown when you have many options (more than 5) or when you are
 |  constrained for space. Otherwise, you can use RadioItems or a Checklist,
 |  which have the benefit of showing the users all of the items at once.
 |
 |  Keyword arguments:
 |  - id (string; optional)
 |  - className (string; optional)
 |  - disabled (boolean; optional): If true, the option is disabled
 |  - multi (boolean; optional): If true, the user can select multiple values
 |  - options (list; optional)
 |  - placeholder (string; optional): The grey, default text shown when no option is selected
 |  - value (string | list; optional): The value of the input. If `multi` is false (the default)
 |  then value is just a string that corresponds to the values
 |  provided in the `options` property. If `multi` is true, then
 |  multiple values can be selected at once, and `value` is an
 |  array of items with values corresponding to those in the
 |  `options` prop.
 |
 |  Available events: 'change
The full set of HTML tags, like <div/>, <img/>, <table/> are also rendered dynamically with React and their Python classes are available through the dash_html_component library. A core set of interactive components like Dropdown, Graph, Slider will be maintained by the Dash core team through the dash_core_components library. Both of these libraries use the standard open-source React-to-Dash toolchain that you could use if you were to write your own component library.

You’re not tied to using the standard Dash component library. The Dash component libraries are imported separately from the core Dash library. With the React-to-Dash toolchain, you can easily write or port a React.js component into a Python class that can be used in your Dash application. Here’s the tutorial on building your own components. Or, the Dash core team can build one for you.

Concurrency — Multi-User Applications

The state of a Dash application is stored in the front-end (i.e. the web browser). This allows Dash apps to be used in a multitenant setting: Multiple users can have independent sessions while interacting with a Dash app at the same time. Dash application code is functional: Your application code can read values from the global Python state but it can’t modify them. This functional approach is easy to reason about and easy to test: It’s just inputs and outputs with no side-effects or state.

CSS and Default Styles

CSS and default styles are kept out of the core library for modularity, independent versioning, and to encourage Dash App developers to customize the look-and-feel of their apps. The Dash core team maintains a core style guide here.

Data Visualization

Dash ships with a Graph component that renders charts with plotly.js. Plotly.js is a great fit for Dash: it’s declarative, open source, fast, and supports a complete range of scientific, financial, and business charts. Plotly.js is built on top of D3.js (for publication-quality, vectorized image export) and WebGL (for high performance visualization).

Dash’s Graph element shares the same syntax as the open-source plotly.py library, so you can easily to switch between the two. Dash’s Graph component hooks into the plotly.js event system, allowing Dash app authors to write applications that respond to hovering, clicking, or selecting points on a Plotly graph.


Some of the available chart types in Dash’s Plotly.js Graph component. See more in the plotly.py documentation.

A Dash app with Plotly.js charts from the Dash app gallery.
Open Source Repositories

You can check out the code yourself across a few repositories:

Dash backend: https://github.com/plotly/dash
Dash frontend: https://github.com/plotly/dash-renderer
Dash core component library: https://github.com/plotly/dash-core-components
Dash HTML component library: https://github.com/plotly/dash-html-components
Dash component archetype (React-to-Dash toolchain): https://github.com/plotly/dash-components-archetype
Dash docs and user guide: https://github.com/plotly/dash-docs, hosted at https://plot.ly/dash
Plotly.js — the graphing library used by Dash: https://github.com/plotly/plotly.js
Prior Art
Dash is new in the Python ecosystem but the concepts and motivation behind Dash have existed for decades in a variety of different languages and applications.

If you’re coming from Excel, then your head is in the right place. Both Dash and Excel use a “reactive” programming model. In Excel, output cells update automatically when input cells change. Any cell can be an output, an input, or both. Input cells aren’t aware of which output cells depend on them, making it easy to add new output cells or chain together a series of cells. Here’s an example Excel “application”:


There’s an Excel analogy for Dash. Instead of cells, we have rich web based components like sliders, inputs, dropdowns, and graphs. Instead of writing Excel or VBA script, we’re writing Python code. Here is that same spreadsheet application, rewritten in Dash:

app.layout = html.Div([
    html.Label('Hours per Day'),
    dcc.Slider(id='hours', value=5, min=0, max=24, step=1),
html.Label('Rate'),
    dcc.Input(id='rate', value=2, type='number'),
html.Label('Amount per Day'),
    html.Div(id='amount'),
html.Label('Amount per Week'),
    html.Div(id='amount-per-week')
])
@app.callback(Output('amount', 'children'),
              [Input('hours', 'value'), Input('rate', 'value')])
def compute_amount(hours, rate):
    return float(hours) * float(rate)
@app.callback(Output('amount-per-week', 'children'),
              [Input('amount', 'children')])
def compute_amount(amount):
    return float(amount) * 7

I like this example a lot because Excel still reigns supreme, even in technical computing and quantitative finance. I don’t think that Excel’s dominance is just a matter of technical ability. After all, there are legions of spreadsheet programmers who have learned the nuances of Excel, VBA, and even SQL.

It’s more that Excel spreadsheets are frequently easier to share than Python programs, and Excel cells are easier to edit than command line arguments.

Yet modelling in Excel has well-known limits: These spreadsheets often outgrow themselves. They become too large or fragile to migrate into a production environment, peer review, test, and maintain. Remember the 2013 pro-austerity Excel typo?

I hope that Dash makes it easier for developers to use Python for their data projects. By sharing the same functional and reactive principles, it’s almost as easy to write a Dash app as it is to write an analytical spreadsheet. It’s certainly more powerful and presentable.

If you develop in the R programming language, you’re in luck. Shiny is a reactive programming framework for generating web applications in pure R. It’s great! You can even create interactive graphics with Shiny and Plotly’s R library. Dash and Shiny are similar but Dash does not aim to be a replica of Shiny. The idioms and philosophies between Python and R are different enough to warrant a different syntax.


Interactive Web App made with Shiny in R
If you program in MATLAB then you may be familiar with MATLAB’s user interface library “GUIDE”. Mathworks was one of the true original innovators in technical computing — GUIDE was written in 2004, 13 years ago!


GUIDE App built in MATLAB
If your data is structured in a database, then you may be using Tableau or one of the other BI tools. Tableau is incredible. They’ve set a new expectation in the industry that end-users should have the autonomy and the tools to be able to explore their organization’s data. They’ve also helped popularize the concepts of “drilling down” and cross-filtering.


Tableau Cross-filtering
Dash is complementary to BI tools like these. These tools work great for structured data. But when it comes to data transformation and analytics, it’s hard to beat the breadth and flexibility of programming languages and communities like Python. Dash abstracts away a lot of the complexities in building user interfaces, enabling you to build a beautiful front-end for your your custom data analytics backend.

Finally, I’d like to give a shout out to Jupyter widgets. Jupyter provide a really nice widget framework inside their notebook interface. You can add sliders to your graphs in the Jupyter notebooks that you run locally.


The widgets in Dash are similar to the widgets in Jupyter. In Jupyter Notebooks, you can add widgets directly alongside your code. In Dash, your controls and application are kept separately from your code. Dash is aimed more towards sharable apps than it is to sharable code and notebooks. You can always mix-and-match the tools, and write your Dash apps in the Jupyter Notebook environment.

We’re also big fans of the nteract project, which is really lowering the barrier to entry of Python and Jupyter Notebooks by wrapping up Jupyter Notebook as a desktop application.

Licensing and the Open Source Business Model
Plotly is a VC-backed startup. We founded in 2013 and we open sourced our core technology, plotly.js, in 2015 (MIT license). We maintain open source libraries in Python, R, and MATLAB that interface with plotly.js and a web app for creating these charts and connecting them to databases (the connectors are also open source).

We provide subscriptions to our chart hosting and sharing platform, and to our chart editing and database querying app. This platform is available on the web (plot.ly) and on-premise.

We’re applying a similar model to Dash. Dash is MIT licensed. It’s free to use and to modify. For companies, we’re offering Dash Enterprise, a deployment server for easily publishing and provisioning Dash Apps behind your firewall.

Our goal with Dash Enterprise is to make sharing a Dash app internally as easy and secure as possible. No dev-ops required. Dash Enterprise handles the URL routing, the monitoring, the failure handling, the deployment, the versioning, and the package management. Dash Apps deployed with Dash Enterprise can be provisioned through your company’s Active Directory or LDAP user accounts.

If you’re using the open source version locally, there are no restrictions. You can manage deployment of Dash apps yourself through platforms like Heroku or Digital Ocean. If you have the resources, consider purchasing a support plan to get one-on-one help from a Plotly engineer. If you need more specialized help or would like to fund specific feature development, reach out to our advanced development program.

Open source is still a new idea for product companies, yet at the end of the day, we’re able to dedicate more than half of our staff towards open source products. Huge thanks to everyone who has supported us so far ❤️

Thanks for checking out Dash. I’ll be giving a talk about Dash at SciPy this summer in Austin and in next fall at Plotcon NYC. If you’ll be at either of those events, please say hi! Otherwise, I’ll see you on GitHub ✌️🏼

Further Resources and Footnotes
Our Dash documentation is hosted at https://plot.ly/dash
All of our open source work is in our GitHub organization at https://github.com/plotly
If you’d like to fund specialized features, reach out to our Advanced Development team: plot.ly/products/consulting-and-oem/
You can find us on Twitter at @plotlygraphs.
If you’re looking for inspiration in user interfaces for technical computing, I highly recommend Bret Victor’s essay on What Can A Technologist Do About Climate Change? In particular, the sections on Technical computing and Media for understanding situations
Related, if you find the intersect between technical computing and interface interesting, you might like Explorable Explanations
You can reach out to me directly at chris@plot.ly or on twitter at @chriddyp

---

## Dash Enterprise Fieldnotes #1 - Why Dash Enterprise?

Welcome to the first in a series of essays on the history and people behind Dash Enterprise.
The next essay in the series is on the motivation and people behind Dash Enterprise App Manager.

Why did we build the features we did with Dash Enterprise? How are these features different from traditional BI software like Tableau? What are the stories and who are the people that motivated this new breed of analytics platform?

We’ve found that many Dash open-source developers aren’t aware of Dash Enterprise. You all know me from open-source and this forum, but what you may not know is that I spend 80% of my time helping customers achieve business mandates through Dash Enterprise capabilities.

Dash Enterprise for Python analytics at scale
10 years ago, we knew that Python was the future of analytics. It had the power of MATLAB, but was free and advancing more quickly in capabilities and community. Today, that foresight could not have proven to be more true. Python is the backbone of almost all advancements in AI, ML, data science, and scientific computing. Dash Enterprise is the platform on which these advanced analytics techniques are delivered to business users.

Analytics used to mean reports or dashboards of summary statistics. But today, techniques such as deep learning, computer vision, predictive analytics, and natural language processing have become essential to the business operations of corporate America. You need Python for these advanced analytics techniques.

Dash Enterprise brings these techniques to a dashboard format, so that business users can run these Python models through a Dash UI, with the same simplicity and security of a Tableau dashboard.

With Python, there is plenty of room at the bottom. Every day we see Tableau, PowerBI, and Excel users pick up Dash as their first Python project. They are delighted by how easy it is get something working. Dash puts a visual face on Python models to make them exploratory. Dash Enterprise makes it simple to publish these Dash apps for seamless operation in business environments.

Open-source is not enough
Open-source projects, including Dash, are terrible at addressing enterprise needs. One reason is security: It’s difficult to communicate the exact specifications of your company’s authentication protocol in a public GitHub issue. These issues are better worked out over private channels. Another reason is the Few versus Many problem: Open-source projects thrive with a broad user coalition of academics, researchers, small companies, hobbyists, and large companies. Only the large companies care about enterprise-grade features: Corporate authentication, auditability, zero-downtime infrastructure, etc. For everyone else in the open-source community, these features are boring and irrelevant.

At the same time, open-source projects stall if they do not successful stratify as layers of digital infrastructure among large companies. Without large company adoption, open-source projects fail to attract the funding needed for long-term, multi-decade support.

Dash Enterprise is the closed-source subset of Dash features that are needed for seamless deployment and operation of Dash apps in high-security, high-stakes business environments. Almost 10% of the Fortune 500 uses Dash Enterprise, doubling every year. We’ll only work with your business on the Dash Enterprise platform - it’s the only platform that has been battle-tested behind corporate firewalls for large scale deployment of Python analytic applications.

Business model
Plotly serves Enterprises who are operationalizing advanced Python analytics through Python and Dash. With Dash Enterprise, we’ve built our dream platform for developing & deploying Python Dash applications in high security, high stakes corporate environments. We believe that Python analytics will continue to unlock the innovations that we desperately need for climate change, drug development, autonomous vehicles, quantum computing, and AI ubiquity.

In this series of essays, I’ll provide the stories behind Dash Enterprise’s cornerstone features, and how we arrived at their essentiality for enterprise deployments. Since Dash is an analytic app building framework, we call these features the Analytic App Stack:

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/9ab5f5f0-c1b3-474b-18c7-e5b3b5a87e00/public) <!-- image-uuid: 61d27579-882f-4b7a-9277-875e3cbdf46e -->

With this Analytic App Stack, you can build highly scalable, HPC AI applications with very little Python experience. When in production Dash Enterprise, these HPC Dash AI apps look like this:

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/283c72e0-9892-498c-5fb4-dec6c77a1e00/public) <!-- image-uuid: 5715b2cf-1378-41b4-9aa0-d708dc0ccbf0 -->

This Fieldnotes series will walk through the people and stories behind the features of Dash Enterprise - the first low-code, HPC development and deployment platform for AI Dash applications.

---

## Dash Enterprise Fieldnotes #2 - App Manager

We kicked off the Dash Enterprise Fieldnotes series with Why Dash Enterprise? and this is the second part.
The next essay in the series is on the motivation and people behind Dash Enterprise Design Kit.

Dash Enterprise is the heart and soul of our work at Plotly and my recommended way forward with Dash & Python at any mid to large-sized company. Check if your company has already licensed Dash Enterprise or reach out to me to get started.

Build in days. Deploy in minutes. Hyperscale in seconds.
This is the cycle that the first feature of Dash Enterprise, App Manager, was designed to unlock. Since 2018, App Manager has has enabled rapid Dash app deployment for 10% of the Fortune 500.

App Manager gets a Dash app from your laptop into the hands of end users with a single command. After you’ve deployed your Dash app, updates can be deployed instantly with zero downtime. This deployment bedrock unlocks rapid prototyping: Deploy your Dash apps early and often for tight feedback loops with the business end users. Because App Manager makes deployments self-serve, you never need anyone to help you get your Dash app from your laptop to the Dash Enterprise server. App Manager unlocks All You Can Eat Deployment for data scientists.

It’s so rewarding to create something new, ship it, and see a teammate or customer delight in using it. I do this all the time internally at our company (Plotly). I never touch the AWS console or ask dev ops for help with deployment. I can deploy simple Dash apps like a graph that aggregates customer support tickets. I can also deploy complex Dash apps for customers when they engage our professional services team, such as Python-generated financial reports, or legacy Excel VBA models migrated to Python.

The Dash Enterprise App Manager sits in between deployment and the HPC services that are essential to a production-grade Dash app:

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/06c3406e-1274-4338-259d-e5eea39d1500/public) <!-- image-uuid: b4469ff8-0602-44d5-b326-e1b9bc6919d9 -->


“IT Stuff”
When I worked as a data scientist, I was never great at the IT stuff. it really should have been as simple as a single command. Instead, I did a lot of copy/paste, scp, blog post googling, and banging around in the AWS console. All to present something like a deployed Jupyter notebook.

With App Manager, all of the “IT stuff” is boiled down to a single git push command. One git push command is all it takes to send your Dash app from your laptop to the Dash Enterprise server. Many data scientists aren’t familiar with git or find it scary, but App Manager makes it simple. All you need to memorize is 3 commands to upload your Dash app to Dash Enterprise: git add ., git commit -m 'summary of changes', and git push. Simply navigate to your Dash app project folder in your terminal and run these 3 git commands - then your Dash app is on its way to Dash Enterprise in your corporate cloud.

App Portal
Once your Dash app is deployed to Dash Enterprise, it’s discoverable by end users through the App Portal. You can demo the Dash Enterprise App Portal on our open-source Dash app gallery. This gallery runs the latest Dash Enterprise version on Azure Kubernetes Service:

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/cff8758d-d477-4203-d463-0e1ddf963000/public) <!-- image-uuid: 0133536b-d11c-48e1-bd20-0b7046bcc6e1 -->


Secret Manager
Your Dash applications likely connect to several data pipelines, which require their own authentication passwords and keys to connect. You don’t want to hardcode this sensitive information in your Dash app code files, so you use App Manager’s Secret Manager to centrally store these secrets and obfuscate them in your Dash app code. Secret Manager is an essential App Manager capability for productionizing Python analytics code as a Dash application.

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/75785f18-a1de-43f5-6cfc-a27118fbbd00/public) <!-- image-uuid: 6bfabcb8-7784-4c32-a8b3-9545d071b789 -->


Security
Once you’ve deployed your Dash app, you may only want a subset of end users at your business to have access. For example, you may be developing Dash apps for C-level executives that are exploring Python models run on sensitive data.

Just like deployment, App Manager makes authentication easy. Once your Dash app is deployed, there is a simple point-&-click interface for granting access to select users. This interface ties in with LDAP, SAML, AD, and other common authentication standards. Here’s a partial look at App Manager’s authentication UI:

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/5fa817c7-9df1-4394-0be1-aa2324531800/public) <!-- image-uuid: 1816814a-dd1b-446e-baa7-eb62af0bb42b -->


Rapid Prototyping
Agency and autonomy are key to the creative process - you should be able to create, deploy, and share a production app or prototype without getting IT or dev ops involved. Your brain should be focused on the Dash app concept realization, not the surrounding cruft of deployment and security.

Rapid prototyping (or “agile development”) is not just about speed and harnessing creativity - it’s about derisking project success. An analytic app that is deployed early and updated iteratively in response to end user feedback is more likely to succeed than a grand reveal at the end of the project term with no feedback along the way. If you can’t deploy Dash app updates instantly, you won’t be able to keep pace with end user feedback. Without infrastructure like App Manager, you won’t be able to roll out advanced analytic initiatives in an agile fashion and they will be more likely to fail.

Deployment Boilerplate
There’s a huge boilerplate cost to productionizing a new Dash app: SSL certificate, domain name, Docker configuration, VM procurement, LDAP tie-in, etc. It can take IT departments weeks, if not months, to procure these details for your Dash app deployments. With Dash Enterprise, it was really important to us that the IT department do this once and only once - not every time that you need to deploy or modify a Dash app. Dash Enterprise uses path-based routing, so that you only need to configure these parameters a single time, then all deployed Dash apps will have sub URLs.

Over 7 years, we’ve seen all the ways that customers struggle with analytic app deployments within large orgs. It’s freaking complex. Here are a few issues we’ve encountered with home-grown deployments:

LDAP errors with 100s to 1000s of LDAP groups
Exposing ports when running analytic apps in Docker containers
Downtime while deploying app updates
Deploying in airgapped environments (zero outside Internet connection)
DNS issues
Procuring SSL certs
Horizontal scaling
Running asynchronous HPC Python jobs
Ouch.

It was so important to us that everything with Dash Enterprise be vertically integrated: Auth, logs, monitoring, horizontal scaling, data pipelines, etc. It should all just work. App Manager is Dash Enterprise’s first and oldest feature, designed to tie together all of these details and make them “just work.” By removing all of the cruft around deployment and security for data scientists, App Manager made Dash Enterprise the first platform for self-service analytic app deployment and scaling.

Dash Enterprise installs on every major cloud. We’ve written guides for preparing your cloud environment for Dash Enterprise:

Dash Enterprise on Azure
Dash Enterprise on AWS
Dash Enterprise on-premises
In the next essay in this series, I’ll dive into the history behind Design Kit, the 2nd feature that we developed for Dash Enterprise. Design Kit was the first low-code UX feature that we developed for the Analytic App Stack (see below).

---

## Dash Enterprise Fieldnotes #3 - Design Kit

This is the 3rd post in my series on Dash Enterprise. We kicked off the Dash Enterprise Fieldnotes series with Why Dash Enterprise?, followed by an essay on the App Manager.
The next essay in the series is on the motivation and people behind asynchronous Job Queues.

Dash Enterprise is the heart and soul of our work at Plotly and my recommended way forward with Dash & Python at any mid to large-sized company. Check if your company has already licensed Dash Enterprise or reach out to me to get started.

Midas Touch
UI is near and dear to my heart. At Plotly, our lead designer (Sidi) has the Midas Touch. Everything that Sidi touches - slide decks, mocks, concept art, Dash apps, stickers - is transformed after leaving her desk. Everyone who relies on our designer is so much more proud of their work after she’s applied her aesthetic prowess.

I wanted the same thing for Dash Enterprise customers. I had this belief that if our customer’s apps looked :100: then they would be perceived as A players at their company. This is what’s so fun about Dash - elevating people’s work. Bringing advanced Python analytics from R&D departments to executive office mantlepieces.

CSS & Bootstrap
CSS is hard. I’ve spent 7 years learning it and I’m still learning. This popular GIF sums it up:



I don’t love Bootstrap. I like things with more character. We built our first Chart Studio product with Bootstrap and it looked like every other Bootstrap thing out there. So we started overriding it with CSS overrides, then finally pulled Bootstrap out altogether. It was a massive waste of time.

Style guides
Over the years, I’ve talked to many orgs that have shared their style guides with me. We’ve built countless Dash apps in accordance with these style guides:

image
image
1776×1330 149 KB
image
image
1782×1270 158 KB
image
image
2418×1596 344 KB
image
image
2112×1566 305 KB
You can create these Dash apps without CSS
Dash apps should be able to match to any corporate style guide without mucking about in CSS.

This was the inspiration for Design Kit, the 2nd feature that we built for Dash Enterprise and perhaps the most popular.

Design Kit create magazine-quality layouts for your Dash app, in perfect harmony with your company’s brand, all without requiring CSS. Design Kit has a point-&-click theme editor for Dash app styling that separates the aesthetic work from the Dash app code. You can preview the Design Kit theme editor in this video.

It’s all about the details
With Design Kit, we sweat the small stuff for you. Typography, colorblind friendly palettes, intuitive UI controls, mobile responsiveness, print-ready formats, cross-browser support, and consistent whitespace padding are a just few of the countless details we’ve considered.

Below are a few of my favorite details.

Smart color picker: When you choose the primary accent colors of you Dash app, the theme editor automatically suggests colorblind friendly colorscales for your charts, so that the chart colors match the overall app theme.

image
image
1214×1498 74.7 KB
Customized colorways: Create and save custom colorways for your charts that match your company brand:

image
image
494×1052 40.6 KB
Presentation mode: When presenting, any chart or Dash UI container can be expanded to full screen:

image
image
986×692 10.8 KB
Mobile responsiveness that just works: All Dash apps built with Design Kit will work automagically and look fantastic on mobile screens:

image
image
5184×3456 906 KB
React & SVG component styling: Design Kit isn’t just modifying CSS - the Design Kit theme editor goes deep into modifying Dash component props, Plotly chart styles, and Dash DataTable:
image
image
1338×922 327 KB
Design Kit is all about elevating your work. Platforms like Dash Enteprise and Design Kit are helping advance Python analytics from company R&D departments to executive offices.

This is the 3rd post in my series on Dash Enterprise. The first post was Why Dash Enterprise?.

Stay tuned for next post on asynchronous Job Queues, key to scaling compute-intensive Dash apps and Dash Enterprise’s Analytic App Stack:


---


## Dash Enterprise Fieldnotes #4 - Job Queues
chriddyp
Co-founder of Plotly, Author of Dash

This is the 4th post in my series on Dash Enterprise. We kicked off the Dash Enterprise Fieldnotes series with Why Dash Enterprise?, followed by an essay on the App Manager and then one on Dash Design Kit.
The next essay in the series will be on the motivation and people behind Dash Enterprise’s HPC capabilities.

One of the companies on the Dash Enterprise product advisory board is an investment bank (over $2B in AUM). When I was writing Dash in 2016, we worked with this organization to retool their portfolio analysis stack for their institutional investor customer base.

The complete portfolio analysis routine took an hour to run. It fetched data from a dozen financial APIs and ran a set of proprietary financial optimization routines written in Python. Eventually, hundreds of institutional investment advisors would use this tool on a daily basis to analyze their portfolios.

The infrastructure and libraries we built for this client in 2016 became the foundation of the same Job Queue infrastructure that almost all of our Dash Enterprise customers use today. As our customers bring Dash applications into production, we find that 80% of Dash Enterprise customers transition to this Job Queue architecture.

That is, our customer’s Dash app deployments often start like this:

Then, to scale in performance and reliability, they evolve to this:


![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/423da73b-d6b8-4af5-e351-9e043029d300/public) <!-- image-uuid: cfb52de2-4543-455a-aaae-d8b70812b645 -->

![](https://imagedelivery.net/qNOPexKG0LNTBq80SlqDOw/5388f5d0-ec96-47f3-f561-af4db1085100/public) <!-- image-uuid: 1d95d7ed-c0b6-474a-bb5f-a79debaf372a -->

Long-Running Tasks

For Dash applications with long-running tasks and hundreds (or thousands) of end users, you’re going to need the Dash Enterprise Job Queue. Anytime a computation takes longer than 15 seconds, it should be sent to the Job Queue to run the task asynchronously.

If you don’t use the Job Queue, then these these long running tasks will consume the web processes that run the callbacks and the Dash application will become unresponsive. No fun for your Dash app end users.

Refreshing Data in the Background

In addition to Dash application performance, the second use case for a Job Queue is running periodic jobs in the background. If periodically fetching juicy, fresh data for your Dash application takes longer than 3-5 seconds (it likely will!), then you’ll want to fetch that data in a background job that runs periodically. The schedule is configurable: it might run every minute, every 15 minutes, every hour, every morning, every Sunday at sunset, etc.

Historically, periodic scheduling of Python jobs has been done with cron or Apache Airflow, but the Dash Enterprise Job Queue aims for a new level of no-configuration simplicity: one or two lines of Python code inside your Dash application and boom - your job is scheduled.

When the periodic task runs in the background, it will save the result to Dash Enterprise’s onboard Postgres or Redis data cache. Then, when the job is finished, the Dash app reads directly from that storage instead of the original data source.

Reliability

In addition to periodic job scheduling and pedal-to-the-metal app performance, the Dash Enterprise Job Queue is also a win for Dash application uptime. We designed Dash Enterprise to have zero downtime deploys that don’t lose any in-flight computations. On Dash Enterprise, your Dash application callbacks are like babies to us - they will never be dropped.

With the Dash Enterprise Job Queue, the information about the job (which function it should call, the input arguments of the function, etc) is stored in a Redis cache with persistent backup storage. When a job is submitted, this information is stored in Redis, where it is only cleared once the job has successfully finished. With the job meta information saved, the job can be retried if there’s a hiccup (API service failure, memory crash, etc).

During a deployment, we hot-swap the containers that run the Job Queue code. Since the meta data about the jobs are stored in a persistent database, no data or memory is lost when killing the previous job queue container.

In addition to the Job Queue input parameters, the outputs of the Job Queue are also stored in persistent storage. This way, the Dash app web processes can read from this database without depending on the uptime of the Job Queue containers. The Dash app web processes and worker processes don’t communicate directly to each other: they communicate through reliable, persistent database caches. This allows us to hot-swap containers during deploys, restarts, or when server configuration settings change.

Scalability & High Availability

The stateless design of Dash makes scaling an infrastructure problem; not a software problem. When you need to process more tasks, simply scale up the number of Job Queue containers. Remember that each Job Queue reads from a database and each Dash app submits jobs to the same database, so there are no communication problems when scaling up Dash Enterprise VMs. Since every aspect of this architecture is isolated, we can run these containers on different VMs (even in different regions). The Job Queue was designed with out stateless, Kubernetes-based architecture in mind.

You’re going to need a Job Queue

Analytic Apps like Dash apps are different from most Web apps that you use on a daily basis. Most Web apps, when they make a request to the server, are requesting something simple by design: login a new user, do a database lookup, load a new page, load the next song, sign out, etc. Common Web app requests like these takes less than a few seconds and are processed synchronously.

The same goes for dashboards (like Tableau or PowerBI) that display simple charts and summary statistics. When the dashboard loads, summary statistics can be computed on the fly because they’re simple, subseecond calculations on commodity CPU hardware.

With Analytic Apps, the story is different. Analytic Apps are the face of an ML, AI, or data science model. The HTTP requests to the server that kicks off one of these process may last several seconds, minutes, or hours, even on HPC hardware. For this, my friends, you will need a Job Queue to run the process in the background, save the process result to a cache, and scale these processes horizontally.

Hard Tech

If you’d enjoy making gnarly engineering solutions like Job Queue available to the world’s blue chip companies, you may enjoy work-life at Plotly.

In the next Dash Enterprise Field Notes essay, I’ll cover the story behind Dash Enterprise’s HPC capabilities and the types of advanced Python analytics that they’re enabling.

The Dash Enterprise Fieldnotes Series:

Why Dash Enterprise?
App Manager
Dash Design Kit
Job Queues (you are here)
