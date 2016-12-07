---
layout: post 
title: Another Word on Google Analytics
date: 2016-12-06
tags:
- SEO
- Google Analytics
---
Almost a year ago I wrote a [post](blog/a-word-on-google-analytics) about keeping your Google Analytics (GA) data stream clear of perturbations such as spam and other tomfoolery. It is now time to revisit that post, since widespread reports recently surfaced of just this sort of activity happening. <!-- more -->

I checked my GA dashboard and am happy to report that my filters from that post a year ago seem to have served to deter the very activity that is being reported from widespread sources[^fn-1]. 

## So what is happening?
There is absolutely no mention of the dreaded new language 'Secret.ɢoogle.com' nor reports of unauthorized redirects to my pages from any other place. To fully understand why these "attacks," if you could call them that, are occurring, please check out the excellent posts[^fn-2] by Carlos Escalera, which explain in detail the *modus operandi* of our bad actor in this instance. 

To recap, nefariousness abounds, but as always being proactive with safety now can save you loads of trouble in the future. By enabling filters on GA to make sure only actual traffic and legitimate referral hits get reported, you help shield your site's data from misinformation or worse. 

The latest information points to Google working quickly to prevent this action from being carried out on their service[^fn-3], although new reports are stating that the spam is being carried out now in a different manner[^fn-4]. As so often happens the best solution is for devs to protect themselves. 

In closing I'd like to mention that the DDoS that disrupted much of U.S. web services October 2016 was a stark reminder of a basic tenant of computer science: a sufficiently large system is in constant state of partial failure. The design principle of robustness directs us to make our software so that even if a large portion of the system fails, enough can continue to chug along until eventual recovery. We still have very far to go in making the Internet a more robust system as evidenced by recent events. 

Thanks for reading. As always, stay safe. 

[^fn-1]: [Google Analytics Spam from TheNextWeb.com? by Mike Sullivan](http://www.analyticsedge.com/2016/11/google-analytics-spam-from-thenextweb-com/ "Google Edge blog post (not related to GA)")
[^fn-2]: [Who is Behind the Secret.ɢoogle.com-Trump Spam in Google Analytics by Carlos Escalera](https://www.ohow.co/secret-%C9%A2oogle-com-trump-spam-google-analytics/ "link to ohow.co article")
[^fn-3]: [Google Working on a Solution for the Spam in Analytics by Carlos Escalera](https://www.ohow.co/google-working-on-analytics-spam/ "link to second ohow.co article")
[^fn-4]: [Google Analytics Leaves the Door Ajar on Language Spam by Mike Sullivan](http://www.analyticsedge.com/2016/12/google-analytics-closes-the-door-on-language-spam/ "link to second Google Edge blog post")
