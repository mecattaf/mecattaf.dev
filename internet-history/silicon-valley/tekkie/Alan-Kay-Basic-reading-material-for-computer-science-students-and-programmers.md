Once again, Alan Kay gave some basic starting material for those who want to understand what computing makes possible. He seemed to take the bootstrapping approach to “build something better than what’s out there” as a basic project that every aspiring computer scientist/programmer should work on, beginning with some good ideas that have already been made.

[Experienced programmers and computer scientists, what are some really old (or even nearly forgotten) books you think every new programmer should read?](https://www.quora.com/Experienced-programmers-and-computer-scientists-what-are-some-really-old-or-even-nearly-forgotten-books-you-think-every-new-programmer-should-read/answer/Alan-Kay-11?__filter__=&__nsrc__=2&__snid3__=4305979915)

I love that “2006” and “2008” (in another answer) must be considered *“really old”* (which is what the question requests) …

I’m still a big fan of the **“Lisp 1.5 Programmers Manual”** (MIT Press — still in print). This version of the language is no longer with us, but the book — first written ca 1962 — by John McCarthy, who invented, and his colleagues, who implemented, is a perfect classic.

It starts with a version of John’s first papers about Lisp, and develops the ideas in a few pages of examples to culminate on page 13 with Lisp *eval* and *apply* defined in itself. There are many other thought provoking ideas and examples throughout the rest of the book.

The way to grow from this book is to deeply learn what they did and how they did it, and then try to rewrite page 13 in a number of ways. How nicely can this be written in “a lisp” using recursion. How nicely can this be written without recursion? (In both cases, look ahead in the book to see that Lisp 1.5 had gotten to the idea of EXPRs and FEXPRs (functions which don’t *eval* their arguments before the call — thus they can be used to replace all the “special forms” — do a Lisp made from FEXPRs and get the rest by definition, etc.).

What is a neat bootstrapping path? How could you combine this with Val Shorre’s “Meta II” programmatic parser to make a really extensible language? What does it take to get to “objects”? What are three or four really interesting (and different ways) to think about objects here? (Hints: how many different ways can you define “closures” in a language that executes? What about using Lisp atoms as a model for objects? Etc.)

The idea is that Lisp is not just a language but a really deep “building material” that is tidy enough to “think with” not just make things (it’s a “building material” for thoughts as well as computer processes).

Dani Richard reminded me to mention: **“Computation: Finite and Infinite Machines”** by Marvin Minsky (Prentice-Hall, 1967), which — since it is one of my favorite books of all time — I’m surprised I didn’t include in the original list. Marvin could really write, and in this book he is at his best. It is actually a “math book” — with lots of ideas, theorems, proofs, etc., — but presented in the friendliest way imaginable by a great mind who treated everyone — including children — as equal to him, and as fellow appreciators of great ideas. There are lots of interesting things to ponder in this book, but perhaps it is the *approach* that beckons to the reader to start thinking “like this” that is the most rewarding.

**“Advances in Programming and Non-Numerical Computation”** (Ed. L. Fox) mid-60s. The papers presented at a 1963 summer workshop in the UK. The most provocative ones were by Christopher Strachey and several by Peter Landin. This was one of the books that Bob Barton had us read in his famous advanced systems design class in 1967.

Try **“The Mythical Man-Month”** by Fred Brooks, for an early look and experience with timeless truths (and gotchas) from systems building with teams …

Try [**“The Sciences of the Artificial”**](https://monoskop.org/images/9/9c/Simon_Herbert_A_The_Sciences_of_the_Artificial_3rd_ed.pdf) by Herb Simon. A much stronger way to think about computing — and what “Computer Science” might mean — by a much stronger thinker than most today.

**“A Programming Language”** by Ken Iverson (ca 1962). This has the same thought expanding properties of Lisp. And, like Lisp, the way to learn from these really old ideas is to concentrate on what is unique and powerful in the approach (we know how to better improve both Lisp and APL today, but the deep essence is perhaps easier to grasp in the original manifestations of the ideas). Another book that Barton had us read.

I like Dave Fisher’s 1970 CMU Thesis — [**“Control Structures for Programming Languages”**](https://pdfs.semanticscholar.org/237f/33308e8e9dc794e56307649155e6aa7a5882.pdf) — most especially the first 100 pages. Still a real gem for helping to think about design and implementations.

More recent: (80s) **“The Meta-Object Protocol”** by Kiczales, et al. The first section and example is a must to read and understand.

**Joe Armstrong’s PhD thesis** — after many years of valuable experience with Erlang — was published as a book ca 2003 …

Lots more out there for curious minds ….

This is one of a series of “bread crumb” articles I’ve written. To see more like this, go to the [Bread Crumbs](https://tekkie.wordpress.com/bread-crumbs/) page.

