---
layout: post
title: "Adventures in HTML Validation"
date: 2015-12-14
tags: 
- HTML
- accessibility
---
It is pretty straightforward to plunk in a source file, URL or text input into [Nu Html Checker](https://validator.w3.org/nu/ "HMTL validator") and validate your markup to see that it cuts mustard. I recently reviewed the HTML for this site, and I have been generally obsessing about it and HTML outlines.
## HTML Validation
### Why validate? 
Like any code HTML gets sticky quickly if you are not adhering to guidelines as you craft it. Guidelines matter and they exist for a good reason. If you ignore validation as you throw up your pages, errors are likely to accumulate until a catastrophic error will force an investigation with its attendant costs. This is not a case of technical debt, rather of laziness or worse, indifference. The case for validation is that if you have been making your pages validate as they go up, then during inevitable catastrophic failures you can use the validator as another useful tool to narrow down and fix a bug rather than as a source of noise.  
#### Accessibility
HTML validation and outlines create structure to your website and this makes it organized logically and legibly for screen readers. This is the prevailing wisdom as I understand it, so validating and making sure your HTML outline makes the most sense for accessibility concerns. From https://validator.w3.org/nu/about.html: 
> * There are some markup cases defined as errors because they are potential problems for accessibility, usability, interoperability, security, or maintainability because they can result in poor performance, or that might cause your scripts to fail in ways that are hard to troubleshoot.
* Along with those, some markup cases are defined as errors because they can cause you to run into potential problems in HTML parsing and error-handling behavior—so that, say, you’d end up with some unintuitive, unexpected result in the DOM.

>Validating your documents alerts you to those potential problems.  

Apart from HTML validation, there is an [online accessibility validator](http://achecker.ca/checker/index.php) which can help determine what else may be missing in terms of accessibility. 
#### Plain old correctness (in spec)
It just *feels* right. Experimentation and breaking the rules are admirable qualities of your friendly neighborhood hacker, however there certainly is a time and place for experimentation. Folks, it is **cool** to rely on the established spec for serious projects. Pinkie-swear.  

#### Knowing when to look the other way
Building on the previous statement, sometimes it is OK to just overlook certain things. For example, for my page the only things that currently show "error" or "warning" are for the Creative Commons License, which are relatively minor gripes. 

To illustrate a great point [this (old but relevant) blog post](http://blog.codinghorror.com/html-validation-does-it-matter/ "Blog Codding Horror") nails the ambiguity: <q>Learning the rules of the validator, even if you don't agree with them, teaches you what the official definition of "valid" is.</q>

## HTML Outline
An [document outline](http://html5doctor.com/outlines/ "HTML5 Doctor") provides a graphic representation of the sections of your markup as they relate to each other, which is fundamental to present the page correctly to the user. According to [spec](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document "MDN spec"), <q>the relationships of these elements leads to the structure of the document and its outline.</q> There are arguments against the effectiveness of the new HTML5 outline guidelines, but I am using them in conjunction with the traditional h1 - h6 scheme as this is backwards compatible. 

Here are a couple of tools available for working with HTML outlines: 

* Chrome Extension [HTML5 Outliner](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo "Chrome extenstion")
* Online [HTML5 Outliner](https://gsnedders.html5.org/outliner/ "online HTML outliner")

## Summary
For my page there were a couple of interesting 'quirks'. I had linked to Google Fonts with this line: 

```
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Merriweather|Open+Sans|Inconsolata' type='text/css'>

```
The validator complained that there was a **Bad Value**, and that "Illegal character in query." This was the suggested code snippet auto generated by Google Fonts. After a little search it turns out the pipes '|' were responsible. I just switched those to %7C to resolve.

```
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Merriweather%7COpen+Sans%7CInconsolata' type='text/css'>

```
I had the aforementioned errors and warnings about the Creative Commons tag which also happens to be auto-generated. I decided to sacrifice that in the interests of sanity. 

Finally for my outline, there were some rather embarrassing header mix ups that I promptly fixed, making my HTML outline tree a lot smoother. There were also  "Untitled Section" labels on my sidebar and footer sections. This made me a bit leery so I researched how to put invisible headers on them for screen readers. This solution, found on [this Stack Overflow answer](http://stackoverflow.com/a/31861526/4808755), is as follows: 

Add `class="visuallyhidden"` to the header element.

```css
.visuallyhidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
```
The headers are now invisible, but allow screen readers to see them. Overflow hidden is to hide scrollbars.

My HTML outline: 

![Outline](/public/images/HTML_outline.png "my HTML outline")

Perhaps it seems a little nit-picky but I learned quite a few new things for such a cursory glance into the spec. Learning to validate you HTML is important and the less these practices seem like esoteric nuisances, the more I can learn to do things correctly. If at some juncture I aim to transgress, then I know what exactly I am breaking and why.   