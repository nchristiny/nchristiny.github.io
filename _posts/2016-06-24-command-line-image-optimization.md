---
layout: post
title: Command Line Image Optimization
date: 2016-06-24
tags:
- git
- bash
images:
  - image_path: /public/images/PNG_JPEG/png_wolf_by_itsdura-d3cle9k.png
    title: PNG Wolf
    link: http://itsdura.deviantart.com/art/PNG-Wolf-202552184
  - image_path: /public/images/PNG_JPEG/Cat.jpg
    title: Domestic Cat
    link: https://commons.wikimedia.org/wiki/File:Cat_March_2010-1.jpg
  - image_path: /public/images/PNG_JPEG/apple.png
    title: Apple
    link: http://pngimg.com/img/fruits/apple
  - image_path: /public/images/PNG_JPEG/coffee_beans.png
    title: Coffee Beans
    link: http://pngimg.com/img/food/coffee_beans
  - image_path: /public/images/PNG_JPEG/GDEM-10km-colorized.png
    title: ASTER image of world
    link: https://asterweb.jpl.nasa.gov/gdem.asp
  - image_path: /public/images/PNG_JPEG/Pillars_of_Creation.jpeg
    title: Pillars of Creation
    link: https://commons.wikimedia.org/wiki/File:Pillars_of_Creation.jpeg
  - image_path: /public/images/PNG_JPEG/Star-forming_region_S106_%28captured_by_the_Hubble_Space_Telescope%29.jpg
    title: Hubble star-forming region S106
    link: http://spacetelescope.org/images/heic1118a/
  - image_path: /public/images/PNG_JPEG/Japan.jpg
    title: Japan
    link: https://flutrackers.com/forum/forum/earth-weather-astronomy-environment/volcanos-earthquakes-glaciers-fires-hurricanes/107481-nasa-fires-and-smoke-in-north-korea-acquired-april-13-2011
---
ImageOptim-CLI is a handy little command line tool (OS X only) by [Jamie Mason / @fold_left](https://twitter.com/fold_left) that incorporates ImageAlpha, ImageOptim and JPGmini. It can be automated as a git pre-commit hook for fire and forget front end development, something I've found useful. <!-- more -->

## Pre-Commit Hook
Add hook to: `your_project/.git/hooks/pre-commit ` 
{% highlight linenos %}
images=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.png' '*.jpg')
$(exit $?) || (echo "$images" | imageoptim && git add $images)
{% endhighlight %}

JPGmini does carry a price tag at the Mac App Store, so one would need to evaluate if regular use of JPEG calls for it. On the other hand, open source projects ImageAlpha and ImageOptim are pretty much the best tools in class when dealing with PNG. 

I took the tool for a spin on this blog. Even though it is not image heavy, over the course of incarnations I have had a few images accumulate in my `public/images` folder, currently at a modest 1.5 MB after subtracting sundry animated GIFs. (There are many volumes worth of material to be written about animated GIF optimization and compression, so I will stick to JPEG and PNG for now.) I obtained some large PNG and JPEG images to give a good sample size of 37.8 MB on our test run.

After hitting it with ImageOptim-CLI, the folder's size became 16.2 MB, a savings of 21 MB or 42.9%. Not too shabby. Now you get to figure out the presentation of your images. Since this is Jekyll, perhaps something simple like using Front Matter to create a photo gallery as in this tutorial: [Jekyll Tips](http://jekyll.tips/jekyll-casts/photo-gallery/). Since we are not using the image gallery anywhere else, it makes sense to do this instead of creating a Jekyll Collection. 

Add the image list to the Front Matter on this post: 

{% highlight markdown %}
---
  images:
    - image_path: /public/images/PNG_JPEG/png_wolf_by_itsdura-d3cle9k.png
      title: PNG Wolf
      link: http://itsdura.deviantart.com/art/PNG-Wolf-202552184
    - image_path: /public/images/PNG_JPEG/apple.png
      title: Apple
    - image_path: /public/images/PNG_JPEG/coffee_beans.png
      title: Coffee Beans
    - image_path: /public/images/PNG_JPEG/GDEM-10km-colorized.png
      title: ASTER image of world
    - image_path: /public/images/PNG_JPEG/Pillars_of_Creation.jpeg
      title: Pillars of Creation
    - image_path: /public/images/PNG_JPEG/Star-forming_region_S106_%28captured_by_the_Hubble_Space_Telescope%29.jpg
      title: Hubble star-forming region S106
    - image_path: /public/images/PNG_JPEG/Japan.jpg
      title: Japan
    - image_path: /public/images/PNG_JPEG/Cat.jpg
      title: Domestic Cat
---
{% endhighlight %}

Then we add code on the post to loop through the array of images. We can even add links to each image to make them clicky, (a highly technical SEO term.) 

{% highlight linenos %}
  <ul class="photo-gallery">
    {% raw %}{% for image in page.images %}{% endraw %}
      <li>
        <a href="{% raw %}{{ image.link }}{% endraw %}">
          <img src="{% raw %}{{ image.image_path }}{% endraw %}" alt="{% raw %}{{ image.title}}{% endraw %}"/>
        </a>
      </li>
    {% raw %}{% endfor %}{% endraw %}
  </ul>
{% endhighlight %}

(Incidentally I learned about using the `raw` tag for Liquid templates inside code blocks.) Finally, the CSS to present the images:

{% highlight css linenos %}
.photo-gallery, .photo-gallery li {
  list-style: none;
  padding: 0;
}

.photo-gallery li {
  display: inline-block;
  width: 33%;
}

.photo-gallery li img {
  width: 100%;
}
{% endhighlight %}

The finished result is a quickly-loading, easily-configurable gallery of optimized photos: 

<ul class="photo-gallery">
  {% for image in page.images %}
    <li>
      <a href="{{ image.link }}">
        <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
      </a>
    </li>
  {% endfor %}
</ul>

I really liked using ImageOptim-CLI and would recommend it to automate the process. Even when not using this command line tool at all, image optimization should be a part of every front end developer work flow.

In closing, ImageMagick must be mentioned as the gold standard of open source command line image manipulation. It allows amazingly fine grain control and has excellent documentation well beyond the scope of this humble post.

Docs: 
- [ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)
- [ImageMagick](http://www.imagemagick.org/script/command-line-tools.php)
- [ImageAlpha](https://pngmini.com/)
- [ImageOptim](https://imageoptim.com/howto.html)
- [JPEGmini](http://www.jpegmini.com/)
