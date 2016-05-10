---
layout: post
title: Momentum Scrolling FTW!
date: 2016-05-10
tags: 
- Jekyll
- CSS
- UX
---
The mobile experience for this page is responsive via relative sizing, images (such as they are) and media queries, but from Safari on iOS there was a distinct lack of snappiness in scrolling leading to a stagnant feeling. We must bring back the bounce! <!-- more -->

'Inertial' or momentum scrolling is easily enabled with the CSS property `-webkit-overflow-scrolling`.[^fn-1]

Thanks to an article from CSS Tricks[^fn-2], this was a simple matter of adding two lines to the body selector. 

{% highlight css linenos %}
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
{% endhighlight %}

Now the page scrolling has that familiar bounciness again in mobile, that is to say, on iOS Safari WebKit. Cross-browser testing, at least from 

[^fn-1]: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling)
[^fn-2]: [CSS Tricks](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
