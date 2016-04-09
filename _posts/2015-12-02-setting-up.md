---
layout: post
title: "Setting Up"
date: 2015-12-02
tags:
- OS X
- bash
- homebrew
- resources
---
I recently reinstalled Mac OS X from scratch and had to reconfigure all the little tweaks that had made my development workflow easier. These were settings that I had not noticed previously since they were so ubiquitous. Now that they were gone I felt naked and powerless on my clean install. 

Setting out to reconfigure my settings, it was immediately noticeable that there were quite a few special details I had forgotten about, therefore I am posting this mostly as a 'note to self'. If anyone stumbles upon this information, then I hope they gain some inspiration to customize their development environment as they see fit. Please keep in mind these are my own preferences and your mileage may vary.

Credit goes out to [Mike Busch](https://twitter.com/mikelikesbikes "Mike's Twitter") for giving us the instructions upon which most of the steps below are based. Thanks Mike! 

Mike made [Environment Linter](https://github.com/mikelikesbikes/environment_linter "GitHub"), which "helps identify issues with OS X machine setup for basic web development with Ruby." After running through the steps, go ahead and check the results with it, (for example my laptop for some strange reason had both rbenv and rvm.)

## Basics

* Mac with OS X Mavericks or later, (I am on OS X Yosemite 10.10.)
* Sublime Text 3
* Dropbox (to sync text editor settings between multiple machines.)
* Terminal - Later on we can get fancier with our Terminal program, but for now the default OS X Terminal will work just fine.
* Google Chrome with [Web Developer](http://chrispederick.com/work/web-developer/ "extension developer page") extension. I could make an entire post just about browser extensions, but this one is most relevant to my developer toolbox.

Again, these are the just the tools I like to use, so be sure and use your own preferred browser or text editor.

## Setup

### Install Command Line Tools

From Terminal: 

{% highlight bash %}
$ xcode-select --install
{% endhighlight %}


### Configure Sublime Text from the command line, `subl`. 

According to the [docs](http://www.sublimetext.com/docs/3/osx_command_line.html "Sublime Text CLI doc"), this command is configured to run from `~/bin`, which is less than optimal. Ideally we want the load `$PATH` to be `/usr/local/bin` since this is the default load path for OS X. From that location we can place a symlink (symbolic link) to use the `subl` shortcut from our Terminal. 

(If this is all too confusing, just skip to the next section where Topher's dotfiles will be able to automatically set this, but isn't it nice to learn what's actually happening?)

From Terminal type: `echo $PATH` to check this environment variable. Ensure `~/bin` directory appears. With a fresh install of OS X it will not. In that case,type `mkdir -p ~/bin` from your user root directory, (`cd ~` to be sure,) and `echo $PATH` again to check that `~/bin` is now in `$PATH`.

Next find the `subl` command location, symlink and check the link with these three commands, (note these are for Sublime Text 3):

{% highlight bash %}
$ find /Applications/Sublime\ Text.app -name subl
{% endhighlight %}

The preceding give the path to subl. Use it in the next command.

{% highlight bash %}
$ ln -fs "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl

$ which subl
{% endhighlight %}

Should give `/usr/local/bin/subl`.

Once the link is established, test it in the Terminal by entering `subl -h`. It should pop up some basic helpful commands.

### Bash profile and UNIX environment

Coming from a Linux background, configuring one's environment should be a familiar task. Luckily there is an huge source of information online if we are not sure where to begin. 

Topher Lubaway has a neat group of UNIX/bash environment setup files, (also known as dotfiles,) [located here](https://github.com/supertopher/dotfiles "GitHub"). It includes some nice prompt coloring for git branch changes along with other nifty details, and I am partial to them since using them extensively. Thanks Topher!

Dotfiles are a source of pride for many developers and they are shared extensively. Check out [dotfiles.github.io](https://dotfiles.github.io/ "dotfiles on GitHub") for more examples and tutorials. It is a tremendously helpful resource.

Follow all the instructions from Topher's dotfiles repo including setting GitHub username and password, or just edit `~/.bash_profile` and `~/.bashrc` as you see fit. When choosing to use Topher's dotfiles be aware Ruby gem awesome_print will be required when you open IRB sessions, but we can deal with that later. 

Something that I like to change from Topher's dotfiles are the Sublime Text key-bindings and preferences, but this could be a whole other future post so we won't go into it at this time.

While we're are at it, might as well add any alias commands we want and fancy ASCII art greetings when firing up a Terminal session. Get silly.

Run `source ~/.bash_profile` or exit and relaunch Terminal to confirm changes. 

### Homebrew

Since we have a clean install, we will need to install Homebrew. Run this command in the newly configured Terminal:

{% highlight bash %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Staying true to the craft means we need to keep our tools in tip-top shape. Update Homebrew:

{% highlight bash %}
$ brew update
{% endhighlight %}

And make sure it is happy:

{% highlight bash %}
$ brew doctor
{% endhighlight %}

Fix any error messages until "Your system is ready to brew." appears.

Make sure that our system is using Homebrew's installed packages.

Run this command to output our `$PATH` variable in a more legible format: 

{% highlight bash %}
$ echo $PATH | tr : '\n'
{% endhighlight %}

And check that `/usr/local/bin` comes before both `/usr/bin` and `/bin`.

If we used the above dotfiles, it should. If not, open `~/.bash_profile` and add: `export PATH="/usr/local/bin:$PATH"`


### Install `sqlite3` with Homebrew
{% highlight bash %}
$ brew install sqlite3
{% endhighlight %}

Force OS X to use this version of `sqlite3` and not the one that comes pre-installed: 
{% highlight bash %}
$ brew link sqlite3 --force
{% endhighlight %}
### Install `postgres` with Homebrew
{% highlight bash %}
$ brew install postgres
{% endhighlight %}

Since `postgres` requires a server with which to interface, we use OS X's `launchd` utility to keep this server running. Execute these two commands:

{% highlight bash %}
$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents

$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
{% endhighlight %}

If all goes well, run `which postgres` to confirm the location is `/usr/local/bin/postgres`.

We can also check that `postgres` server is running by entering this `ps` or process status command:

{% highlight bash %}
$ ps aux | grep postgres
{% endhighlight %}
Finally, create a default database and test our `postgres` client, `psql`.

{% highlight bash %}
$ createdb $USER

$ psql $USER
{% endhighlight %}

This last command opens the sql console for the default database.

### Install a Ruby Manager with Homebrew

I prefer to use `rbenv`. There are other options, notably `rvm`. Choose one and stick to it.

{% highlight bash %}
brew install ruby-build rbenv
{% endhighlight %}

If we used `rbenv` and Topher's dotfiles from earlier, go ahead and comment or delete out the lines of code that use `rvm` in `~/.bash_profile`, `~/.bashrc` and `~/.profile` if they appear.

### Install Ruby using a Ruby Manager

{% highlight bash %}
$ rbenv install --list
{% endhighlight %}

This will list all of the Rubies ruby-build can install. Choose one, likely the latest non-development build. For example: 

{% highlight bash %}
$ rbenv install 2.2.3
{% endhighlight %}

And finally set the global/shell/local ruby:

{% highlight bash %}
$ rbenv global 2.2.3
{% endhighlight %}
Run:  

{% highlight bash %}
$ which ruby

{% endhighlight %}
To make sure we are not using the system's pre-installed Ruby. It should say something like this: `/Users/Nyc/.rbenv/shims/ruby`

{% highlight bash %}
$ rbenv which ruby
{% endhighlight %}
Restart the Terminal.

### Install `git` with Homebrew

{% highlight bash %}
$ brew install git

{% endhighlight %}
Make sure we're using `git` from Homebrew:

{% highlight bash %}
$ which git

{% endhighlight %}
Should give: `/usr/local/bin/git`

If we didn't earlier, then set username, email for `git`. 

{% highlight bash %}
$ git config --global user.name "John Doe"

$ git config --global user.email johndoe@example.com
{% endhighlight %}

Finally, set up Sublime Text as default editor for `git`: 

{% highlight bash %}
$ git config --global core.editor "subl -w"

{% endhighlight %}
### Install `node` with Homebrew

{% highlight bash %}
$ brew install node
{% endhighlight %}
### Install Ruby gems

Make sure the load path is right.

{% highlight bash %}
$ which gem

{% endhighlight %}
Should yield, `/Users/Nyc/.rbenv/shims/gem` or similar.

{% highlight bash %}
$ rbenv which gem

{% endhighlight %}
Gives me: `/Users/Nyc/.rbenv/versions/2.2.3/bin/gem`

For good measure, update the existing gems: 

{% highlight bash %}
$ gem update --system

{% endhighlight %}
Then install bundler:

{% highlight bash %}
$ gem install bundler

$ rbenv rehash
{% endhighlight %}
And:

{% highlight bash %}
$ gem install sqlite3 pg nokogiri
{% endhighlight %}
If all goes well, run both:

{% highlight bash %}
$ gem install awesome_print  

$ gem install rspec
{% endhighlight %}
Restart the Terminal application.

### Install `bash` using Homebrew

Last but not least, let's update our most likely woefully out of date default installation of `bash`. See the current version running with:

{% highlight bash %}
$ bash --version

{% endhighlight %}
To install: 

{% highlight bash %}
$ brew install bash

{% endhighlight %}
We need to add this version to `/etc/shells`.

{% highlight bash %}
$ sudo -s "echo /usr/local/bin/bash >> /etc/shells"

{% endhighlight %}
And change the shell command: 

{% highlight bash %}
$ chsh -s /usr/local/bin/bash

{% endhighlight %}
Quit Terminal completely, and restart a new Terminal session. Confirm the version has been updated.

## Conclusion

After this initial setup, I like to customize the text editor and use an alternate Terminal program like iTerm, OS X settings and whatnot, but I think I might save that for another post.

Something that I learned while posting this is that creating your own personal dotfiles absolutely simplifies the process of getting a development environment up and running quickly - especially if you have many workstations! 

Feel free to reach out to me on Twitter or email if I missed anything. Feedback is always welcome.
