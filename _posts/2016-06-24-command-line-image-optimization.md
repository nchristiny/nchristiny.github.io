---
layout: post
title: Command Line Image Optimization
date: 2016-06-24
tags:
- git
- bash
---
Handy little command line tool (OS X only) by [Jamie Mason / @fold_left](https://twitter.com/fold_left) that incorporates ImageAlpha, ImageOptim and JPGmini. Can be automated as a git pre-commit hook for fire and forget front end development, something I've found useful. <!-- more -->

## Pre-Commit Hook
Add hook to: `your_project/.git/hooks/pre-commit ` 
{% highlight linenos %}
images=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.png' '*.jpg')
$(exit $?) || (echo "$images" | imageoptim && git add $images)
{% endhighlight %}

JPGmini does carry a price tag at the Mac App Store, so one would need to evaluate if regular use of JPEG calls for it. On the other hand, open source projects ImageAlpha and ImageOptim are pretty much the best tools in class when dealing with PNG. 

I took the git pre-commit hook for a spin on this blog. Even though it is not a image heavy, over the course of incarnations I have had a few images accumulate in my `public/images` folder, currently at a modest 1.5 MB after subtracting sundry animated GIFs. There are many volumes worth of material to be written about animated GIF optimization and compression, so I will stick to JPEG and PNG for now. I obtained some large PNG and JPEG images to give a good sample size of 31.1 MB for our test run.

Image sources: 
[PNG Wolf](http://itsdura.deviantart.com/art/PNG-Wolf-202552184)
[pngimg.com](http://pngimg.com/img/fruits)
[NASA ASTER](https://asterweb.jpl.nasa.gov/gdem.asp)
[Hubble Pillars of Creation](https://commons.wikimedia.org/wiki/File:Pillars_of_Creation.jpeg)
[Hubble view of star-forming region S106](http://spacetelescope.org/images/heic1118a/)

Finally, ImageMagick must be mentioned as the gold standard of open source command line image manipulation. It allows amazingly fine grain control and has excellent documentation well beyond the scope of this humble post.

Docs: 
[ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)
[ImageMagick](http://www.imagemagick.org/script/command-line-tools.php)
[ImageAlpha](https://pngmini.com/)
[ImageOptim](https://imageoptim.com/howto.html)
[JPEGmini](http://www.jpegmini.com/)
