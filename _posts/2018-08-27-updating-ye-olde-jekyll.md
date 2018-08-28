---
layout: post
title: Updating Ye Olde Jekyll
date: 2018-08-27
tags:
- BlogOps
- JavaScript
- Ruby
- Jekyll
- Go
- React
- Rails
---
I have not experienced the dreaded slow build times reported by other Jekyll users perhaps because I have not yet surpassed "critical mass" on posts. 

However with so many shiny new static site generators (SSGs) out in the wild, it never hurts to take a another look. <!-- more -->

# Alternatives to Jekyll

## [Gatsby.js](https://www.gatsbyjs.com/)
* Written in React and uses shiny new GraphQL API.
* Able to migrate existing posts from Jekyll, WordPress and more.
* Comes with the usual learning curve caveats.
* Resolves slow build time issue for large sites. 
* Great documentation. 
* Loads of plugins.

## [Hugo](https://gohugo.io/)
* Written in Go, aka [Golang](https://golang.org/).
* Billed as "the fastest tool of its kind." 
* Publish in Markdown, using Go templates.
* Ships with Disqus, but can be modified to use other commenting systems.

## [Pelican](https://blog.getpelican.com/)
* Written in Python.
* Publish in Markdown or [reStructuredText](http://docutils.sourceforge.net/rst.html).
* Templates (themes) via [Jinja2](http://jinja.pocoo.org/).
* Import content from WordPress, RSS.
* Also ships with Disqus and able to be customized.

## [Hexo](https://hexo.io/)
* Written in nodeJS.
* Publish in Markdown. 
* Fast build time. 
* Powerful CLI. 

## [Middleman](https://middlemanapp.com/)
* SSG "using all the shortcuts and tools in modern web development."
* Ruby gem uses Rails middleware as a standalone framework.
* Highly customizable.
* Publish in ERb & Haml for dynamic content.
* More for Web marketing and documentation than blogging.

Finally I must mention for historical fact: 
## [Octopress](http://octopress.org/)
* A collection of plugins and features built into Jekyll.
* Excellent for inspiration in tinkering with your own Jekyll sites. 
* No longer maintained. 💀

If and when my day of build time reckoning comes, I will take the opportunity to plunge into Hugo just to learn a bit of Go!

There are tons of blog posts out there regarding this topic, including:

- [Blog post on Gatsby to Jekyll migration](https://blog.singuerinc.com/jekyll/gatsby/graphql/2017/11/01/migrate-from-jekyll-to-gatsby/)
- [Another blogger migrating from Jekyll to Gatsby](https://www.gatsbyjs.org/blog/2018-2-27-why-i-upgraded-my-website-to-gatsbyjs-from-jekyll/)
- [Old but relevant article](https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/) about how Smashing Magazine migrated from WordPress to shiny new [JAMstack](https://jamstack.org/)
