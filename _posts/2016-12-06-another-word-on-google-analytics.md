---
layout: post 
title: Another Word on Google Analytics
date: 2016-12-06
tags:
- SEO
- Google Analytics
---
Almost a year ago I wrote a [post](./a-word-on-google-analytics) about keeping Google Analytics (GA) data clear of perturbations such as spam and other tomfoolery. It is now time to revisit the topic, since reports have surfaced in the past weeks of just this sort of activity happening. <!-- more -->

I checked my GA dashboard and am happy to report my filters from a year ago seem to have served to deter the very actions being reported[^fn-1]. 

## What's really going on?
In my reports there is no sign of the dreaded new language 'Secret.ɢoogle.com' nor unauthorized redirects to my page. To fully understand why these "attacks," are occurring, check out the excellent posts[^fn-2] by Carlos Escalera, which explain in detail the *modus operandi* of our bad actor in this instance. 

It appears to be some sort of bizarre guerrilla marketing tactic, which although may be causing a few headaches and require some extensive re-tooling by GA engineers, is thankfully not quite the caliber of the massive denial-of-service (DoS) attack experienced October 2016 on a major U.S. DNS provider.  

To recap, nefariousness abounds, but as always being proactive with safety now can save loads of trouble in the future. Enabling filters on GA to make sure only actual traffic and legitimate referral hits get reported can help shield data from unwanted noise or worse. 

The latest information points to Google working to prevent this action from being carried out on their service[^fn-3], although new reports are stating the spam is being carried out now in a slightly different manner[^fn-4]. As so often happens the best solution is for devs to protect themselves. 

In closing I'd like to point out the October 2016 attack[^fn-5] which disrupted much of U.S. web service was a stark reminder of a fundamental tenant of computer science: a sufficiently large system is in constant state of partial failure. The design principle of robustness directs us to write software capable of functioning even if a large portion of the system fails. Although these two incidents are very different, they both serve to illustrate the fact we still have far to go in making the Internet a more robust system. 

[^fn-1]: [Google Analytics Spam from TheNextWeb.com? by Mike Sullivan](http://www.analyticsedge.com/2016/11/google-analytics-spam-from-thenextweb-com/ "Google Edge blog post (not related to GA)")
[^fn-2]: [Who is Behind the Secret.ɢoogle.com-Trump Spam in Google Analytics by Carlos Escalera](https://www.ohow.co/secret-%C9%A2oogle-com-trump-spam-google-analytics/ "link to ohow.co article")
[^fn-3]: [Google Working on a Solution for the Spam in Analytics by Carlos Escalera](https://www.ohow.co/google-working-on-analytics-spam/ "link to second ohow.co article")
[^fn-4]: [Google Analytics Leaves the Door Ajar on Language Spam by Mike Sullivan](http://www.analyticsedge.com/2016/12/google-analytics-closes-the-door-on-language-spam/ "link to second Google Edge blog post")
[^fn-5]: [2016 Dyn cyberattack](https://en.wikipedia.org/wiki/2016_Dyn_cyberattack "wikipedia post")
