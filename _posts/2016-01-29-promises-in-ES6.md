---
layout: post
title: Promises in ES6
date: 2016-01-29
tags:
- JavaScript
---
## JavaScript/ECMAScript/LiveScript
JavaScript has a funny and somewhat convoluted naming history. 
At its inception with Netscape in 1995 it was named LiveScript, and then changed to JavaScript (no relation to Java.) Flashforward and today we use the version of the language known officially as ECMAScript 6th edition (ES6) A.K.A. ECMAScript 2015 (ES2015)[^fn-1]. 

Confusing? You betcha. 

Surely there are some good reasons to have such a seemingly complicated versioning and naming system. For one, JavaScript is the most popular (and misunderstood[^fn-2]) languages used for the Internet. Taking this fact into account gives a little perspective on the versioning/naming issues. It could be worse! 

## Promises, promises
 
I wanted to look at a nice little new-to-me feature of this newest version of JavaScript/ECAMScript/what-have-you called **Promises**. In the previous post I mentioned how callback functions in JavaScript consitute a closure: they consist of both a function and that function's lexical scope or referencing environment. I wondered if promises, which are not new to JavaScript but have only recently been included in the official spec, act as closures too.

After some research, it turns out the answer is 'sometimes'. Let's take a look at the official definition: 

>Promises are a library for asynchronous programming. Promises are a first class representation of a value that may be made available in the future. Promises are used in many existing JavaScript libraries.[^fn-3]

What does this mean?  

Here's a quick code example of the structure of a promise: 

```javascript
var myPromise = new Promise(function (resolve, reject) {
    // Something happens here.
});
```


[^fn-1]: http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/
[^fn-2]: http://www.crockford.com/javascript/javascript.html
[^fn-3]: http://babeljs.io/docs/learn-es2015/#promises
