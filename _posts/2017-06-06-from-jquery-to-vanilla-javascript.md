---
layout: post
title: From jQuery to Vanilla JavaScript
date: 2017-06-06
tags:
- blogOps
- JavaScript
- jQuery
---
No disrespect to jQuery, a phenomenal and lasting tool, but I saw fit to extirpating it from my blog code. <!-- more -->I set about untying it from the underpins until coming to the last remaining use case, simply opening external links in their own window/tab. The problem was recreating the `ready()` function to know when page content has finished loading, without requiring all the machinery of jQuery.

Existing jQuery snippet:

```js
jQuery(function ($) {
  //Change target attribute of external links
  var domain_root = document.location.protocol + '//' + document.location.host;
  var all_links = $('a').each(function (index, element) {
    if (element.href.substr(0, domain_root.length) !== domain_root) {
      element.target = '_blank';
    }
  });
});
```

Replaced by Vanilla JavaScript snippet:

```js
var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {

  var links = document.links;

  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = '_blank';
    }
  }
});
```

Now using `domReady()` as vanilla JS analogue to jQuery's `ready()` function.

Shout out to [beeker.io](http://beeker.io/jquery-document-ready-equivalent-vanilla-javascript) for providing a complete solution!
