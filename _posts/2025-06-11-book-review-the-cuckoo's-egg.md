---
layout: post
title: Book Review - The Cuckoo's Egg
date: 2025-06-11
tags: 
    - security
    - computer science
    - book review
---  

A book that greatly influenced my career path, The Cuckoo's Egg by Clifford Stoll[^fn-1] still holds up after all these years. 

<figure>
    <img class="center-img" src="/assets/img/The_Cuckoo's_Egg.jpg" title="The Cuckoo's Egg book cover">
    <figcaption>Cover art for The Cuckoo's Egg: Tracking a Spy Through the Maze of Computer Espionage by Clifford Stoll</figcaption>
</figure>

I first read this book when I was in college majoring in astronomy, (coincidentally same major as the author). Being as-yet blissfully unaware of the field of computer security was not a hinderance to getting locked-in to this true computer caper story.

The author tells the tale of hunting down the cause of a computer network usage billing discrepancy of 75 cents, ($0.75 USD), at Lawrence Berkeley National Laboratory in 1986. Rather than ignore it he starts digging and soon finds this seemingly innocuous discrepancy was due to an unauthorized user exploiting software vulnerabilities to gain higher priviliges, and then leapfrogging into other connected sensitive government systems. 

The fascinating thing about this story in my opinion is while the underlying tech has evolved the basic tactics of exploitation remain the same. For example some of the more glaring security lapses uncovered in the story are cases where sensitive computers and networks are being secured with manufacturer default passwords or an easily guessable credential.

This highlights the well-known security adage that no matter how advanced our systems remain as vulnerable as the weakest link - the weakest link more often than not being the human-factor. 

I'd like to believe hardening and performing basic security measures has become the norm for sysadmins since 1986, but computer security news has a way of disproving this almost daily. Remember to change the factory password, folks. 

One deliciously nerdy detail I had forgotten until re-reading was Stoll's description of the Morris Number Sequence (look-and-say sequence), which gives a shout-out to the book from its own wiki article[^fn-2].

[^fn-1]: [The Cuckoo's Egg Wiki article](https://en.wikipedia.org/wiki/The_Cuckoo's_Egg_(book))
[^fn-2]: [Look-and-say sequence Wiki article](https://en.wikipedia.org/wiki/Look-and-say_sequence#Popularization)