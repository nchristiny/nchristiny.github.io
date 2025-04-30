---
layout: post
title: "Let's Use Brew Zsh"
date:   2025-04-21
tags: 
    - macOS 
    - note to self
--- 
I've had switch default zsh to brew zsh more than once so into a blog post it goes. Luckily macOS seems to now keep system packages more up-to-date than in yesteryear. 

```
$ which zsh
/bin/zsh
```

`brew install zsh`

```
$ which zsh  
/opt/homebrew/bin/zsh
```
Update iTerm2 or favorite term program to use `/opt/homebrew/bin/zsh`.

Add the brew zsh to the list of acceptable shells in `/etc/shells` if you plan on using ftpd.
```
# Add to list then run command
chsh -s /opt/homebrew/bin/zsh
```
Also a cargo cult relic of mine is a `.zprofile` file, I believe brew used to tell you to do this:
```
# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"
```
I'm not sure this is even needed anymore but I am too afraid to remove it😭. Maybe a future post... 
