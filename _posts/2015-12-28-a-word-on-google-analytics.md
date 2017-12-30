---
layout: post
title: "A Word on Google Analytics"
date: 2015-12-28
tags:
- SEO
- Google Analytics
---

Spent a nice couple of weeks on holiday in Texas visiting Austin, San Antonio, and Del Rio. In between catching up, eating, and general merrymaking, I learned a neat little trick to better interpret and protect Google Analytics (GA) data and traffic. <!-- more -->

Most of the time you want your site to only record outside hits, in other words traffic that is not from your own (possibly numerous) visits. Naturally this applies to businesses as well as blogs. Secondly you also want to make sure your site is the only one actually generating the hits to your tracking code.

The solution to both of these issues is to set up custom filters[^fn-ga_filter] in GA.

## Exclude internal traffic[^fn-ga_exclude]

1. Find your IP address. (Google "My IP" for your public IP address).
2. Log into your GA dashboard.
3. Select Admin tab and select the account you wish to manage.
4. Under Account column, select "All Filters".
5. Press the "+ Add Filter" button.
6. Name your new filter, `Own IP` or something similar.
7. Filter type should be left "Predefined".
8. Select filter type "Exclude" from dropdown.
9. From the "Select source or destination" dropdown menu, select "traffic from the IP addresses".
10. From "Select expression" dropdown, select "that are equal too".
11. Finally, enter your IP address and save.

If you have a larger company or website, naturally you would wish to set up a domain-type of filter[^fn-ga_domain_filter].

## Include only real traffic
A second type of filter that may be advisable in order to prevent possible tomfoolery is one that makes sure only actual traffic from your site is being recorded.

It is well known that you can easily find and read the GA tracking code using the developer console of any modern browser, unless, you know, it is hidden as an environmental variable. Although there is little real danger from having this code publicly available, it is possible that some Internet ne'er-do-wells may utilize it to spike traffic at you. It sounds outlandish, but this fake traffic could ostensibly screw up your reporting and possibly induce the webmaster (i.e. you) to investigate the sites that are generating the hits, (a very poor advertising tactic indeed)[^fn-ga_protection].

I actually saw this type of activity on a previous blog I held, mostly from Russian and Chinese sites, so there you have it.

To make sure your traffic data is clean and accurate, simply create a new custom filter that only accepts hits from your desired domain.

1. Again, (from Admin on GA dashboard,) select your site.
2. Click "+ New Filter".
3. Name it `Defence against the Dark Arts` or something similar.
4. Select "Custom filter".
5. Select "Include".
6. Under "Filter Field" dropdown select "Hostname".
7. Enter your desired domain name. Use backslash to escape special characters, like so: `nchristiny\.github\.io`
8. Save your awesome new filter.

Enjoy your clean GA data.

As always, any feedback or questions are most welcome. Feel free to contact me via [Twitter](https://twitter.com/ChileanNick) or [email](mailto:nchristiny@gmail.com). Thanks for reading.

[^fn-ga_filter]: [Create and manage view filters](https://support.google.com/analytics/answer/1034823)

[^fn-ga_exclude]: [Exclude internal traffic](https://support.google.com/analytics/answer/1034840)

[^fn-ga_domain_filter]: [LunaMetrics blog post](http://www.lunametrics.com/blog/2015/04/27/internal-traffic-google-analytics/)

[^fn-ga_protection]: [Kissmetrics blog post](https://blog.kissmetrics.com/protect-analytics-from-hacking/)
