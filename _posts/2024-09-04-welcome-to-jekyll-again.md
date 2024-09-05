---
layout: post
title:  "Welcome to Jekyll, again!"
date:   2024-09-04 14:13:37 -0500
tags: Jekyll BlogOps personal
---
Updated my blog's Ruby version and bundle. Just a couple of snags along the way.

# Prep

Did have to restart postgres after `brew upgrade`, `brew services restart postgresql@15`

Also can't seem to launch VSCodium even after updating it. 

> "Apple can’t check app for malicious software"

> Using an app that can’t be checked for malicious software might harm your Mac or compromise your privacy. If you’re certain that the app you want to use is from a trustworthy source, you can override your Mac security settings to open it.

> In the Finder  on your Mac, locate the app you want to open.

> Don’t use Launchpad to locate the app.

> Control-click the app icon, then choose Open from the shortcut menu.

> Click Open.

> The app is saved as an exception to your security settings, and you can open it at any time by double-clicking it, just as you do with any registered app.

Note: You can also grant an exception for a blocked app by clicking the Open Anyway button in Privacy & Security settings. This button is available for about an hour after you try to open the app.

To change these settings on your Mac, choose Apple menu  > System Settings, then click Privacy & Security  in the sidebar. (You may need to scroll down.)



## Now ready to actually upgrade Ruby

`rbenv install 3.3.5`

- [x] Need to prepend `be` (alias for `bundle exec`) to `jekyll serve` once getting thru `bundle update`.

- [x] Re-add `_drafts` directory.
- [x] Update `_config.yml`, `permalink: /blog/:title.html`
- [x] Check the links n assets n stuff

Now I'm seeing a new-to-me Netlify feature: Branch deploys!🎉

This will let me see build errors on branch rather than having to push to prod (main).

Now seeing something new is wrong with the new branch's build:

{% highlight text %}
An error occurred while installing bigdecimal (3.1.8), and Bundler cannot
continue.

In Gemfile:
  jemoji was resolved to 0.13.0, which depends on
    html-pipeline was resolved to 2.14.3, which depends on
      activesupport was resolved to 7.2.1, which depends on
        bigdecimal
Error during gem install
5:32:07 PM: Failing build: Failed to install dependencies
5:32:07 PM: Failed during stage 'Install dependencies': dependency_installation script returned non-zero exit code: 1
{% endhighlight %}

Things I've tried from Netlify config side to troubleshoot:
- Update node Netlify uses from 8.x(!) to 20.x
- Activate the aforementioned branch deploys.
- Naturally check the Build image Linux version. Rats, this was already on latest selection possible Ubuntu Focal 20.04 (default). Only other option was Ubuntu Xenial 16.04 (deprecated).
- I found where to make the deploy logs private, not sure why that isn't the default. While it's not a huge deal to my personal threat model, pretty sure I wouldn't want my biz out there like that..
- To be continued...

TODOS:
- [x] Promote synergy
- [ ] Post excerpts on index page
- [ ] Update `/history`?
- [ ] Finally get around to whatever Googs replaced Universal Analytics with.
- [ ] WHY ARE THESE CHECKBOXES SHOWING THE LIST BULLETS
- [ ] ???
- [ ] Profit
