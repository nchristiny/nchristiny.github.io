---
layout: post
title: How Google PageSpeed Insights Helped Optimize This Blog
date: 2016-07-19
tags:
- resources
- BlogOps
- JavaScript
- Firebase
- UX
---

[Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) is a simple and fast diagnostic tool that provides some very interesting and often revelatory suggestions for the front end developer. <!-- more -->

Since we are in the business of optimizing all the things, I thought it would be fun to run this website through the tool. 

## The good news
My site is performant on mobile and desktop as expected for a static site. Browser caching and minifying of assets were both suggested actions that are quickly and easily implemented. 

## The not so good news
Unfortunately the mobile user experience score suffered slightly due to some tap targets or links that were too small for comfort and my footer was named as an offending element that falls "outside the viewport." The report stated: "The page content is 421 CSS pixels wide, but the viewport is only 411 CSS pixels wide." These were easy "Consider fixing"-designated issues and the tool even gave helpful suggestions on how to achieve it. 

## The devastating news
Significantly decreasing my score on both the desktop and mobile versions was the fact that there was blocking JavaScript on the page above-the-fold, (a term borrowed from print newspaper publishing. Shout out to my time at <i>The Daily Texan</i> for teaching me that one.) 

This issue was given an ominous "Should fix" designation in red. I was supremely humbled and after quickly stepping through the five stages of grief, I took a look at the improvement suggestions. 

As I suspected, it turned out the blocking JavaScript is my [totally cool and awesome comment system](/blog/never-read-the-comments), which, as is JavaScript's wont, loads up asynchronously. This has a noticeable effect only when there are a large number of comments to load from Firebase, which completely makes sense. 

While I ponder how to reconcile this issue and perhaps make a change in the future, I am satisfied that it is not a tremendous deal-breaker. My pages load on mobile and desktop just fine and dandy. However, I found it really great to know that this marvelous tool exists. Thanks Google!
