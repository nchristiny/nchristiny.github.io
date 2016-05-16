---
layout: post
title: Never Read The Comments
date: 2016-05-16
tags: 
- Jekyll
- Firebase
- NoSQL
- BlogOps
---
As a fun little project I started playing around with [Firebase](https://www.firebase.com/) and this Jekyll blog. In a move I hope to not live to regret, I made it possible to submit comments! <!-- more -->

Folks who have pertinent and kind comments can scroll to the bottom of a post and enter a name, message, and an optional email for a Gravatar image. 

Isn't that nice? 

I used part 3 of an article from CSS-Tricks[^fn-1], so if you're curious, go ahead and follow those directions. The only tricky part was configuring the security rules.

If I get hit with lots of spam, I will need to take corrective steps, but for now the only validation that is done is checking for the presence of a name and a message. 

Firebase is really cool, fast and well documented. I am loving the realtime NoSQL cloud database which stores data as familiar JSON objects. For a simple blog it does seem to be a bit overkill, but I just love to over-engineer this lil' blog to bits. 

Got feedback? Leave a comment, bub. Or, you know, just reach out to me on Twitter or email. 

[^fn-1]: [Building a Jekyll Site – Part 3 of 3: Creating a Firebase-Backed Commenting System](https://css-tricks.com/building-a-jekyll-site-part-3-of-3/)
