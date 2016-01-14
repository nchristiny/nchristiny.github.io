---
layout: post
title: What's the deal with closure
date: 2016-01-13
tags:
- Ruby
- JavaScript
---
So, what's the deal with closure? 

Although closure is easy to understand in relatively simple terms, it was not until recently in my early coder education that I discovered a few subtleties about the subject that clarified my understanding of it immensely. 

Since I always love to de-mystify computer science and coding, let's pull aside the curtain to take a look at what really is happening with this phenomenon.

## History
A quick aside to cover some background on closure: 

Closure first saw use in 1964 by Peter J. Landin who coined it as a lambda expression whose open bindings have been closed by (or bound in) the lexical environment, resulting in a closed expression, or closure.[^fn-wiki1] This concept was then used by Sussman and Steele in Scheme, a lexically scoped variant of LISP,[^fn-wiki2] and the rest is history.

In plain English, the definition of closure has two important concepts: 

1. Any given closure consists of one or more environmental variables.
2. Closure also consists of a "snapshot" of these variables' lexical scope. 

Although the definition of closure varies slightly between programming languages, this is the accepted general definition for languages that employ first-class functions, in other words languages that treat functions as first-class citizens. 

A language that supports passing functions as arguments to other functions, returning them from other functions, and assigning them to variables or storing them in data structures is said to employ first-class functions.[^fn-wiki3] Some examples of programming languages that fit this description are Haskell, Ruby, Python and JavaScript. 

## What does this all mean, really? 

Let's get into some examples. 

Let's define a simple method in Ruby:

```ruby
def my_function
	
end
```









[^fn-wiki1]: https://en.wikipedia.org/wiki/Closure_(computer_programming)#cite_note-6
[^fn-wiki2]: https://en.wikipedia.org/wiki/Closure_(computer_programming)#cite_note-8
[^fn-wiki3]: https://en.wikipedia.org/wiki/First-class_function#cite_note-1
