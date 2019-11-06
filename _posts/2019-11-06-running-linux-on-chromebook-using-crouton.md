---
layout: post
title: Running Linux on Chromebook using Crouton 
date: 2019-11-06
tags:
- BlogOps
- Linux
---

Long before it became an actually built in option as it is now, it was only possible to retrofit a full scale Ubuntu installation on Chromebooks. These are my notes on installation gotchas for a complete developer environment on Ubuntu, including Zsh, Oh My Zsh, and Dropbox - all running via `chroot` Chromium OS. There are now better ways of accomplishing the same thing, but back then (just a few months ago) it was the only reliable way.<!-- more -->

Crouton is a sorta acronym for open source project, Chromium OS Universal Chroot Environment. 

>crouton is a set of scripts that bundle up into an easy-to-use, Chromium OS-centric chroot generator.

Crouton has a major shortcoming for security minded users, and as such, (in my view and the view of crouton devs themselves,) folks would do well to take advantage of new improved security features in Chromium OS. 

The devs recommend Crostini:
 
> [Crostini](https://chromium.googlesource.com/chromiumos/docs/+/master/containers_and_vms.md) is an official project within Chromium OS to bring the Linux shell and apps to the platform in verified mode with clean integration, multi-layered security, and all the polish you expect from Chromium OS proper.

That said, pressing on: 
### Install Crouton 
via `crosh` after turning on Chromebook's Developer Mode. 

- Update a chroot:
`sudo sh ~/Downloads/crouton -u -n xenial`

- Mount a chroot and enter the 'shell':
`sudo enter-chroot`

- Start Xfce via the `startxfce4` host command:
`sudo startxfce4`

### Linuxbook Mods
1. Install Sublime Text 3 - `sudo apt-get install sublime`

2. Install git - `sudo apt-get install git-all`

3. Install rbenv - `wget -q https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer -O- | bash`
 add `rbenv` to `PATH` $ `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc`
`rbenv init` 
add to .bashrc: `eval "$(rbenv init -)"``
finally `rbenv rehash`

4. locale issues launching Sublime Text "On Linux, please reference your distribution's docs for information on properly setting the `LANG` and `LC_CTYPE` environmental variables. As a temporary work-around, you can launch Sublime Text from the Terminal with q:LANG=en_US.UTF-8 LC_CTYPE=en_US.UTF-8 sublime_text" locale issue - [Set up a clean UTF8 environment](https://perlgeek.de/en/article/set-up-a-clean-utf8-environmentq) Solution: This generally means you haven't properly set up locales on your Linux box.
`sudo locale-gen en_US en_US.UTF-8`
`sudo locale-gen` by itself did not work- would result in fail in next command
`sudo dpkg-reconfigure locales`
(See also `man locale-gen`.)

5. `ruby` - using `rbenv` - installing 2.5.1
set as global `rbenv global 2.5.1`
`rbenv rehash` - Rehash rbenv shims (run this after installing executables)
ERROR: Ruby install aborted due to missing extensions - Try running `apt-get install -y libssl-dev libreadline-dev zlib1g-dev` to fetch missing dependencies. Colors in terminal DID NOT DO - in favor of just cloning repos

6. Installing Dropbox getting [Permissions Error](https://www.dropbox.com/c/help/permissions_error)
node - npm, [Install Node Js Linux](https://www.ostechnix.com/install-node-js-linux/)
sass
`bundle install` on jekyll blog directory

7. An error occurred while installing eventmachine (1.2.7), and Bundler
cannot continue.
Make sure that `gem install eventmachine -v '1.2.7' --source
'https://rubygems.org/'` succeeds before bundling. SOLUTION: Prepending `bundle exec` to your command may solve this.

8. Installed GCC, restarted, and was able to both `bundle install` and `bundle exec jekyll serve`

9. Installing ZSH via `apt-get`, making default shell [Zsh](https://bash.cyberciti.biz/guide/Zsh)

10. [Install Zsh Shell Ubuntu 1804](https://linuxhint.com/install_zsh_shell_ubuntu_1804/)

11. then install `oh-my-zsh`

12. Set Locale
`export LC_ALL=en_US.UTF-8`
`export LANG=en_US.UTF-8`
`export LANGUAGE=en_US.UTF-8`

### Dropbox
Ended up simply installing 64 bit deb package from site.

[How To Install Dropbox](https://askubuntu.com/questions/126198/how-to-install-dropbox#126208)

Add Dropbox’s repository key
`sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 5044912E`

Add Dropbox’s repository
`sudo add-apt-repository "deb http://linux.dropbox.com/ubuntu $(lsb_release -sc) main"``

Update and install Dropbox
`sudo apt-get update && sudo apt-get install nautilus-dropbox`

For Ubuntu 12.10:

Add repository key `sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 5044912E`

Add repository `sudo add-apt-repository "deb http://linux.dropbox.com/ubuntu precise main"`

Update your system and install Dropbox

`sudo apt-get update && sudo apt-get install dropbox`
When prompted click Next, then click Start Dropbox to continue.

### Zsh + Oh My Zsh

[Installing Zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH)

`chsh -s $(which zsh)`

`echo $0` to test which shell currently running

[Can't Make Zsh The Default Shell](https://askubuntu.com/questions/131823/cant-make-zsh-the-default-shell#131838)

Solve empty `nvmrc` file [nvm issues 1113](https://github.com/creationix/nvm/issues/1113)

### RIGHT ALT keys (AltGr) on EXTD keyboard 
For _Deutsch_ keyboard. 

Commonly used:
```
ALT + q = ä (+ SHIFT Ä)
ALT + p = ö (+ SHIFT Ö)
ALT + y = ü (+ SHIFT Ü)
ALT + s = ß 
ALT + SHIFT + U + 1E9E = ẞ (capital ß)
ALT + z = æ (+ SHIFT Æ)
ALT + 5 = € 
ALT + SHIFT + c = ¢
ALT + SHIFT + 5 = £
Misc:
ALT + r = ë (+ SHIFT Ë)  
ALT + j = ï (+ SHIFT Ï)
ALT + n = ñ (+ SHIFT Ñ)
ALT + w = å (+ SHIFT Å) 
```
