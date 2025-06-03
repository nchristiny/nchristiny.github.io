---
layout: post
title: "How I Learned To Stop Worrying And Love The Default Terminal App"
date:   2025-05-23
tags: 
    - macOS
    - personal
    - mentoring
---  

As a recovering champion yak shaver I used to obsessively customize the heck out of every single environment, operating system, or program I touched. In my wiser years I have to shake my head at such time-intensive exercises. 

In my experience the less customization the better. **As a dev you should be able to blow away any program, environment, or operating system at the drop of a hat and be functional in minimal time.**

In my opinion it is no use being precious about extensive customizations if it takes one a long time to re-create. 

Oh, you have a 15-pane tmux with customized run commands? Cool. Your IDE `settings.json` stretches from here to Timbuktu? Nice! 

I really hope you don't have to reinstall that program/env/OS or, heaven-forbid, have it suddenly become _unavailable_ on your machine due to org security or compliance reasons.

I now prefer to use default programs and commands to get up and running as soon as possible on a clean reinstall of software.

If you must customize, then save a copy of modified settings if possible on separate media or a remote repo to be able to quickly re-customize. However even this I've found to be a pain point. 

Don't get me started on devs that hesitate to drop dev databases and re-create from scratch, when this is exactly the purpose of dev databases. They are ephemeral and built to be blown away with regularity. 

If you are not able to drop a dev DB for fear of losing info, consider a rake task or seed file to easily re-create this info. 

This brings up a corrolary to this principle which is **don't alias destructive commands**. Destructive in this case meaning irreversible. 

I am big fan of `trash` the brew cask that gives the user a command to send files to system trash. However I made a huge mistake when I aliased the system's `rm` to `trash`. 

It is way too easy to slip into muscle memory in the wrong circumstances. You could one day be SSH'ed into a remote machine and forget this alias isn't available and `rm -rf <something important>`. Oops, I just destroyed `<something important>` instead of sending it to system purgatory. 

My point is yak shaving is fun until we have to reset your environment or OS. Always keep a backup, but better yet get to know and love default programs/commands. Usually the functionality you are seeking is already there, e.g. using default `zsh` functionality instead of the overkill that is `oh-my-zsh` framework. 

Your future self will thank you.