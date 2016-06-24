---
layout: post
title: Command Line Image Optimization
date: 2016-06-24
tags:
- git
- bash
---
Handy little command line tool (OS X only) by [Jamie Mason / @fold_left](https://twitter.com/fold_left) that incorporates ImageAlpha, ImageOptim and JPGmini. Can be automated as a git pre-commit hook for fire and forget front end development, something I've found useful. <!-- more -->

Add pre-commit hook to: `your_project/.git/hooks/pre-commit ` 
{% highlight linenos %}
images=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.png' '*.jpg')
$(exit $?) || (echo "$images" | imageoptim && git add $images)
{% endhighlight %}

JPGmini does carry a price tag at the Mac App Store, so one would need to evaluate if regular use of JPEG calls for it. On the other hand, open source projects ImageAlpha and ImageOptim are pretty much the best tools in class when you are dealing with PNG. 

Finally, ImageMagick is the gold standard of a great open source command line image manipulation tool which allows amazingly fine grain control and excellent documentation well beyond the scope of this humble post.

Docs: 
[ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)
[ImageMagick](http://www.imagemagick.org/script/command-line-tools.php)
