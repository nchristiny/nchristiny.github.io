---
layout: post
title: Did You Miss Me?
date: 2016-04-19
tags: 
- personal
- Jekyll
---
Hello there, bloggy blog, 

It's been a while, so I thought I'd pop in and drop a quick post. <!-- more -->

As I mentioned in a recent [/now](/now) post, I've been super busy with my dev apprenticeship which is now entering the last phase. It's been an amazing experience and I will be glad to share more about it in the coming weeks. 

Although it may look like I have been neglecting you, my beloved reliable and nimble static [Jekyll](http://jekyllrb.com) blog, astute readers (all three of you) will have noticed a few subtle improvements behind the scenes in the past few weeks:

## Drafts
To my chagrin, I found that I posted a (naive) interpretation of ES6 JavaScript Promises before it was complete. This was not very Genuine Hacker™ of me, so that day I learned the hard way about creating a `_drafts/` folder for my cobbled but not-quite-ready-for-peer-review blog posts. Adding that folder to my `.gitignore` file prevents pushing up any more half-baked ideas to the main repository.

## Excerpts
Additionally, I wished to shorten the amount of scrolling that one had to do on the main index page just to get the bottom pagination links. This meant condensing posts into blurbs or snippets, and wouldn't you just know it? Jekyll already has such a functionality in the Liquid template system, and it is called [excerpts](https://jekyllrb.com/docs/posts/#post-excerpts). Yet another great example to always [RTFDocs](https://en.wikipedia.org/wiki/RTFM), folks.

## CNAME
I migrated from my GitHub-generated .io URL to this shiny new .com one. [Namecheap](https://www.namecheap.com/) had it on sale for 88¢ for the first-year, so I went for it. I kinda like it.

## Google Analytics
Shoved this code snippet into my `_includes/` folder.

## Redcarpet to kramdown
Finally I updated Jekyll to 3.0 and saw that GitHub was leaving some ominous warning messages on the command line about the coming use of [kramdown](http://kramdown.gettalong.org/), one of a many types of Markdown parsers that have sprung up over the years. The message indicated kramdown would soon be used as a default for GitHub hosted webpages like this one. 

> Note: Starting May 1st, 2016, GitHub Pages will only support kramdown.

At the time I was on [Redcarpet](https://github.com/vmg/redcarpet), which I had settled upon after a short survey revealed it provided what I needed: fenced code block syntax highlighting (via Pygments), strikethrough, superscript, and footnotes. Even tables were supported! The autolink extension was very nice also (wherein URLs in the Markdown document were automagically converted to anchor tags in markup.) 

After the requisite panicking stage, I soon found out one of the main reasons why kramdown was chosen: [it is blazingly fast](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0). GitHub even provided a [handy dandy page](https://help.github.com/articles/updating-your-markdown-processor-to-kramdown/) to help people update. Soon I was able to semi-smoothly make the transition.

Here are all the steps I took in excruciating detail. First, modify the `_config.yml` file to use kramdown for Markdown instead of Redcarpet, and Rouge instead of Pygments (which is also being deprecated,) for syntax highlighting. kramdown is "GitHub Flavored Markdown" so naturally the three-backtick (`) code blocks work just fine. More on this code syntax-highlighting later.

I still had footnotes, and ~~strikeouts~~, but support for <sup>super</sup> or <sub>sub</sub> -scripts [will have to wait](https://github.com/gettalong/kramdown/issues/41). The workaround method of HTML in Markdown exists via `<sup>` and `<sub>` tags, but that still won't work within code blocks. For me, this is not a tremendous issue, but I could see it being a problem for science equation publishers. Nevertheless [LaTeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) fully works in kramdown, in case I want to break out some Laws of Thermodynamics or Drake Equation posts.

All the previously autolinked URLs that were in my posts went back to being just plain strings, so I had to go back and fix them. *C'est la vie*.

Going back to the code syntax highlighting issue, one last thing that I wanted to implement was line numbers in my code blocks, since it would be much easier to reference specific points within the posts. I was able to accomplish syntax highlighting with Rouge which was replacing Pygments by applying the knowledge of this blog post: [Syntax Highlighting in Jekyll With Rouge](https://sacha.me/articles/jekyll-rouge/) Thank you, Sacha!

However that post ends with the statement that line numbers are not yet supported, and that for code block line numbers "you'll have to wait for a little while." Luckily for us, a little while has passed, and I found a post a few months later on a different blog describing a very nice workaround for implementing line numbers in your Rouge code blocks on Jekyll. All credit is due to Minh Nguyen for this solution: [JEKYLL LINE NUMBERS](http://www.minh.io/blog/2015/06/28/jekyll-line-numbers/) Thank you, Minh!

## Good to be back
Yes, indeed. After stressing out about learning new and difficult/different stuff on work projects, it feels really good to just be able to poke around and have fun with a pet project like this blog. I hope this information helps the next person that may happen upon it. Cheers! 

## Addendum 
I forgot to mention a final enhancement which was to modify the internal/external link behavior globally. kramdown helpfully provides anchor tags with the `target="_blank"` to open the link in another tab/window. In kramdown you can do this, on a per link basis:

{% highlight plaintext %}
[Link Text](Link URL){:target="_blank"}
{% endhighlight %}

However, being a good lazy programmer, I wanted to not worry about adding this to every past and future link, so I found a quick n' dirty fix using jQuery.

After including jQuery, add this JavaScript snippet to `application.js`: 

```javascript
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

Now every external link will open its own tab while internal links (say to [/projects](/projects)) will proceed in the same window as normal. 

I like the way this blog is coming along as my own [Incremental build model](https://en.wikipedia.org/wiki/Incremental_build_model). Onwards and upwards!
