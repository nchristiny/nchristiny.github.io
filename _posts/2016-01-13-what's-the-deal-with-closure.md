---
layout: post
title: What's The Deal With Closure?
date: 2016-01-13
tags:
- Ruby
- JavaScript
- Computer Science
---

Although closure is easy to understand in relatively simple terms, it was not until recently in my coding education that I discovered a few subtleties about the subject that clarified my understanding of it immensely. <!-- more -->

Since I always love to demystify computer science and coding, let's pull aside the curtain to take a look at what really is happening with this phenomenon.

## History

A quick aside to cover some background on closure:

Closure first saw use in 1964 by Peter J. Landin who coined it as a lambda expression whose open bindings have been closed by (or bound in) the lexical environment, resulting in a closed expression, or closure.[^fn-wiki1] This concept was then used by Sussman and Steele in Scheme, a lexically scoped variant of LISP,[^fn-wiki2] and the rest is history.

In plain English, the definition of closure consists of two important concepts:

1. A closure consists of a function or reference to a function.
2. A closure also consists of the referencing environment, also known as the function's lexical scope.

Although the definition of closure varies slightly between programming languages, this is the accepted general definition for languages that employ first-class functions, in other words languages that treat functions as first-class citizens.

A language that supports passing functions as arguments to other functions, returning them from other functions, and assigning them to variables or storing them in data structures is said to employ first-class functions.[^fn-wiki3] Some examples of programming languages that fit this description are Haskell, Ruby, Python and JavaScript.

## What does this all mean, really?

All Ruby code blocks are really closures. What?? I know, it sounded strange to me too. Let's get into examples.

Consider the following Ruby code snippet:

{% highlight ruby %}
str = "Hello"
5.times do
	str2 = "world!"
	puts "#{str} #{str2}"
end
{% endhighlight %}


Output:

{% highlight lineos %}
Hello world!
Hello world!
Hello world!
Hello world!
Hello world!
{% endhighlight %}

Nothing too groundbreaking here since we are just exploring Ruby code blocks and how they act as closures.

We see that the code within the block between the `do` and `end` was somehow aware of the value of the local variable outside the scope of the block, `str`. The opposite is not true; if we try to show `str2` outside the block, it is an undefined local variable.

Why does this happen? It is because Ruby, (at least the most common version of Ruby known interchangeably as Matz's Ruby Interpreter, Ruby MRI or CRuby), uses a copy of the current stack frame for each iteration of the block. This copy contains the environmental pointers that indicate what the variables were at the time of the creation of the block - kind of a snapshot, if you will.

Let's see what happens if we change `str` inside the block.

{% highlight ruby %}
str = "Hello"
5.times do
  str2 = "world!"
  puts "#{str} #{str2}"
  str = "Just kidding, goodbye"
end
{% endhighlight %}


Output:

{% highlight linenos %}
Hello world!
Just kidding, goodbye world!
Just kidding, goodbye world!
Just kidding, goodbye world!
Just kidding, goodbye world!
{% endhighlight %}


We see that the block acknowledges the original environmental pointer of local variable `str` in the first iteration, but on subsequent iterations the pointer has changed, and it continues to honor this new definition until the end. The so-called snapshot of the current stack frame was changed after the first iteration because we changed the value of `str` inside the block.

## Stack and heap memory

It sounds a bit complicated, but we can better visualize this if we learn about the concept of heap and stack memory, both of which are stored in the computer's RAM (Random Access Memory). Programming languages will use RAM to assign variables to values. A variable is nothing more than a pointer to a specific address in memory that contains the corresponding value.

Stack memory is used for running your program, and from what I understand, each stack frame is like a single step in any given line of code. In the case of Ruby MRI, it is the underlying C code that determines the current stack frame. Stack memory is fast, but liable to overflow i.e. if the program goes into an infinite loop or otherwise runs out of memory due to a runaway process. Stack memory is nice in that as soon as a particular function or process is done, the variables deallocate or disappear, freeing up the space automatically.

Heap memory on the other hand is used to allocate a more permanent block of data apart from the current stack frame. This helps enable _multithreading_ in applications, or applications that need to access the same memory address at the same time: each thread has its own stack but also a shared heap. Excessive fragmentation is a common danger for heap memory which makes it hard to allocate a large enough block to new processes. Luckily in garbage collection (GC) enabled languages such as Ruby, heap memory will persist only until the data's environmental pointers disappear (in other words when a block ends), or (if GC is not available) until the programmer expressly deletes the data.

It is these details, as well as many other great reasons, that make C and C++ an asset to learn since many high level modern programming languages tend to abstract away these vital computer science concepts.

## Bringing it home

As we saw in the above code examples, Ruby blocks refer to a specific environment (the lexical scope) as well as the functions and variables contained therein. This fulfills the requirements of closure as defined above.

Since both Procs and Lambdas are types of blocks in Ruby, these also act as closures. Closures, as it turns out, are everywhere and underpin some of the most important concepts in programming.

In JavaScript, we use callback functions to pass a function as an argument to another function to be returned or called later. Callback functions are really, you guessed it, closures. They contain a function and the lexical scope of said function at the time of its creation, including any object's chain of inheritance.

Something to watch out for in JavaScript is this fact that excessive use of callback functions or closures will negatively impact processing speed and memory consumption.[^fn-mdn1] For this reason it is advisable to use an object's prototype for methods so that they are not reassigned every time an object gets created via closure.

I love learning new (to me) underlying concepts and this fascinating concept of closure has many facets. If you spot any glaring errors or wish to give some feedback, please feel free to reach out to me on Twitter or shoot me an email.

[^fn-wiki1]: [Definition of closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)#cite_note-6)
[^fn-wiki2]: [Closure and Lisp](https://en.wikipedia.org/wiki/Closure_(computer_programming)#cite_note-8)
[^fn-wiki3]: [First Class Functions](https://en.wikipedia.org/wiki/First-class_function#cite_note-1)
[^fn-mdn1]: [Performance Considerations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Performance_considerations)
