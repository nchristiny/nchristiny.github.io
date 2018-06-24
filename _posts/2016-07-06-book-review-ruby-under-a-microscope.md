---
layout: post
title: Book Review - Ruby Under a Microscope
date: 2016-07-06
tags:
- Ruby
- C
- computer science
- book review
---

[Ruby Under a Microscope](http://patshaughnessy.net/ruby-under-a-microscope) is a great primer into understanding the underlying mechanics of the Ruby language. It demystifies the "magic" surrounding seemingly simple things, for example parsing a string, and I'm a big fan of demystification. <!-- more -->

<figure>
<img class="center-img" src="/public/images/RUM_coverfront.png" title="Ruby Under a Microscope book cover">
<figcaption>Ruby Under a Microscope, An Illustrated Guide to Ruby Internals by Pat Shaughnessy</figcaption>
</figure>

This book for me hits the sweet spot between technical aptitude and plain language for both advanced and intermediate levels of study.

## What lies beneath (spoiler: it's C)
Starting out as a novice programmer it is usual to hear that Ruby is an interpreted language. As an interpreted language[^fn-1], it does not require a compilation step before or at runtime to turn the high-level expressions you've written in the text editor into machine-readable bytecode.

However, lurking below this simple explanation is the Matz's Ruby Interpreter[^fn-2] (MRI, also called CRuby for reasons that will be quickly apparent,) a series of interpreters which do the heavy lifting when it comes to reducing and interpreting code. It accomplishes this using C and YARV (Yet Another Ruby Virtual Machine[^fn-3]). This applies to Ruby 1.9 and onwards when YARV was merged into Ruby core; before this Ruby was much slower due to the fact that implementation, still in C, was designed as a single-pass interpreted language. 

In this capacity, C is acting as an intermediate language[^fn-4], as it takes the source code of a Ruby program and translates it into a form more suitable for generating object or machine code. 

In the book, author Pat Shaughnessy takes us through the life cycle of a simple Ruby "Hello World" program. In excruciating detail we are shown how MRI takes apart each character in a Ruby program and determines the syntax rules to apply. We are also shown the control flow of MRI as the pointer moves through the stack. I found this really fascinating and useful to know.

## Hash optimization in Ruby 2.0
Apart from displaying the process broken down into atomic chunks, the book does a great job of showing us how to benchmark and test pretty much anything related to the Ruby language. My favorite example of this is the experiment (Experiment 7-2) on how fast Ruby is able to insert key-value pairs into a hash and comparing this speed in Ruby 1.8 as opposed to 2.0 (with the aforementioned YARV in place.) 

The results are surprising. To my understanding, in Ruby 1.8 there is a measurable time lag every 67th key/value pair insertion that is due to bin allocation being performed behind the scenes. Ruby has to "re-size" the amount of memory or bins needed to fit the key/value pairs. In Ruby 2.0, YARV optimizes this allocation. For hashes under 7 elements, hash data is simply saved in an array, known as packed hashes. Once you try to insert the 7th key/value pair, this packed hash is discarded and the actual hash function is called and bins allocated. In this way, hash tables are sized automatically by Ruby, which evenly distributes values across bins and minimizes collisions, (collisions here refers to having to dig into a bin to get a value, i.e. bins are kept shallow.)

## Last words
All in all, the book is a very valuable and eye-opening account on the innards of Ruby. There are chapters on JRuby, and metaprogramming. In future editions it will be interesting to see if new developments will be covered. I hope so.

I liked this book because it forces one to reckon with reality and think beyond interpreters, beyond the simple I/O of programs. We know we are getting "hardcore" when we start delving into computer science topics such as abstract syntax trees, memory allocation, pointers, etc. All these concepts have been abstracted away in our modern interpreted languages. This is an amazing feat in of itself, nonetheless I would recommend this book to anyone with more than a passing interest in coding and programming or computer science, even if Ruby is not the language of choice. Here's why: 

In any programming language one will find the same fundamental building blocks of computer science. This book inspired me to dig deeper and was one of the main reasons I decided to learn more fundamental computer science topics and even learn C itself! 

I recommend starting with any of the freely available online university introductory computer science courses, particularly Stanford's[^fn-5] or Harvard's[^fn-6]. 

[^fn-1]: [Wikipedia: Interpreted Language](https://en.wikipedia.org/wiki/Interpreted_language)
[^fn-2]: [Ruby MRI](https://en.wikipedia.org/wiki/Ruby_MRI)
[^fn-3]: [YARV](https://en.wikipedia.org/wiki/YARV)
[^fn-4]: [Intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation)
[^fn-5]: [Harvard University, CS50x Introduction to Computer Science](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)
[^fn-6]: [Stanford University, Computer Science 101](https://lagunita.stanford.edu/courses/Engineering/CS101/Summer2014/about)
