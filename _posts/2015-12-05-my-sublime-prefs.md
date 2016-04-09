---
layout: post
title: "My Sublime Prefs"
date: 2015-12-05
tags: 
- Sublime Text
- resources
---
As a segue from the previous post on setting up the developer environment, I wanted to record my current setup for Sublime Text build 3083. This is not a post that debates the relative merits of this or that text editor. Maybe some other time.

I love Sublime Text. As a tool that I use daily in my chosen profession, I am more than happy to pay for the registered version and support the developers who make it. This should not be taken as a jab at any other text editors, open source or otherwise. Software developers and engineers are known to be obsessively defensive of their chosen favorite tools, most notably text editors.

Now that we have that out of the way, here is what works for me.

I use two machines, a desktop and laptop, so I sync Sublime Text settings via Dropbox. Instructions to do this are located [here](https://packagecontrol.io/docs/syncing "docs").

## User Preferences

Here are the contents of the synced preferences file:

User/Preferences.sublime-settings

```
{
  "auto_complete_delay": 25,
  "bold_folder_labels": true,
  "caret_style": "blink",
  "color_scheme": "Packages/Predawn/predawn.tmTheme",
  "ensure_newline_at_eof_on_save": true,
  "file_exclude_patterns":
  [
    ".DS_Store",
    ".tags*",
    "*.pyc",
    "*.pyo",
    "*.exe",
    "*.dll",
    "*.obj",
    "*.o",
    "*.a",
    "*.lib",
    "*.so",
    "*.dylib",
    "*.ncb",
    "*.sdf",
    "*.suo",
    "*.pdb",
    "*.idb",
    "*.class",
    "*.psd",
    "*.db",
    "*.pdf"
  ],
  "folder_exclude_patterns":
  [
    "data",
    ".zeus.sock",
    ".git",
    ".svn",
    ".hg",
    "CVS",
    ".sass-cache",
    ".bundle",
    "bundle",
    ".rbx",
    "script",
    "tmp",
    "log"
  ],
  "font_face": "Inconsolata-dz",
  "font_size": 14.0,
  "highlight_line": true,
  "highlight_modified_tabs": true,
  "ignored_packages":
  [
    "Vintage"
  ],
  "indent_guide_options":
  [
    "draw_normal",
    "draw_active"
  ],
  "line_padding_bottom": 0.5,
  "line_padding_top": 0.5,
  "predawn_tabs_medium": true,
  "rulers":
  [
    80
  ],
  "save_on_focus_lost": true,
  "scroll_past_end": true,
  "shift_tab_unindent": true,
  "tab_size": 2,
  "theme": "predawn-DEV.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": "true"
}
```
The usual suspects are here. I am a big fan of matching popular style-guides so I will use "tab size: 2", and "translate tabs to spaces" enabled. "Save on focus lost" is a life saver as well as a time and sanity saver, especially on large projects.

"Trim trailing white space on save" is pretty self-explanatory, but for more information as to why "newline added on EOF (end of file)" should be used, check out this [enlightening post](https://robots.thoughtbot.com/no-newline-at-end-of-file "blog post") on thoughtbot's blog that explains the history.

### Font

I use `Inconsolata-dz`, a variation of the superb `Inconsolata` font that includes straight quotes. I really love it, and can't recommend it enough. Since I sync my Sublime settings from desktop to laptop and I like to reduce eye fatigue instead of squinting, it is set to a slightly larger font size than normal.

The original `Inconsolata` font created by Raph Levien is located [here](http://levien.com/type/myfonts/inconsolata.html "download page").

The `Inconsolata-dz` variant by David Zhou is available [here](http://nodnod.net/2009/feb/12/adding-straight-single-and-double-quotes-inconsola/ "blog and download page").

Again, the subject of code fonts is highly contentious among the developer community, so in the interest of brevity I won't elaborate further here. Maybe another day. 

### Theme

I use Jamie Wilson's excellent theme, [Predawn](http://github.com/jamiewilson/predawn "GitHub"), and I follow the recommendations on that page for Markdown editing. 

It is naturally available via [Package Control](https://packagecontrol.io/packages/Predawn "Package Control").

### Packages

Speaking of packages, here are my currently installed Sublime Text packages: 

* [AlignTab](https://packagecontrol.io/packages/AlignTab "Package Control")
* [Better CoffeeScript](https://packagecontrol.io/packages/Better%20CoffeeScript "Package Control")
* [Color Highlighter](https://packagecontrol.io/packages/Color%20Highlighter "Package Control")
* [GitGutter](https://packagecontrol.io/packages/GitGutter "Package Control")
* Package Control (of course)
* Predawn (Aforementioned theme)
* [Sass](https://packagecontrol.io/packages/Sass "Package Control")
* [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements "Package Control")
* [SublimeERB](https://packagecontrol.io/packages/SublimeERB "Package Control")

Since I recently reinstalled my OS, I ~~may~~ will definitely find more to download. One that springs to mind is Sublime​Linter and its language-specific packages.

### Key Bindings

Here is the contents of the synced Key bindings file:
User/Default (OSX).sublime-keymap

```
[
// Rails ERB tags
{ "keys": ["ctrl+shift+."], "command": "erb" },
// Paste and Indent
{ "keys": ["super+v"], "command": "paste_and_indent" },
// Vanilla Paste (no indent)
{ "keys": ["super+shift+v"], "command": "paste" },
// Reindent shortcut
{ "keys": ["super+shift+r"],  "command": "reindent" }
]
```
The ERB shortcut is used by SublimeERB to cycle between `<%=  %>`, `<%  %>`, `<%-  -%>`, `<%=  -%>`, `<%#  %>`, and `<%  -%>` and places the cursor helpfully inside of these monstrosities to ease the pain of typing embedded Ruby delimiters. 

Paste and Indent makes this behavior default for `⌘-v`, and allows me the option of reverting to the old paste using shift, in case I ever need it for some wacky reason.

Reindent saves me from hunting for this useful command in the menus. 

## Bric-a-Brac

I turn off the Minimap as it takes up valuable real estate and usually I just don't use it.

What else? Oh yes, the app icon! The default icon that Sublime Text uses is a tad, well... it's not nice to look at on the dock all the time. I prefer replacing it with a different one. This of course is just a cosmetic change, but there you have it. I regret nothing. 

Dribbble user Lucifr offers a few crowd-sourced replacements: ["Icons much less ugly than the default one for Sublime Text 2"](https://dribbble.com/lucifr/buckets/32936-Sublime-Text-2-Replacement-Icons "Dribbble"), (they work for Sublime Text 3 too of course.)

I use this one by Daniel Matarazzo adapted from an icon by Lindsay Mindler:

![Sublime Text alternate icon](/public/images/sublime_text_icon_preview.png "Alternate icon")

To get it, follow the instructions on Daniel's [GitHub repo](https://github.com/dbmzzo/Sublime-Text-2-Icon "repo on GitHub"), although I recommend renaming the Resources folder to Resources-old or something so you can get the originals back if you need them later.

A little extra step that I found was necessary after following the above instructions was to actually replace the icon in Finder:

First download your chosen image file, preferably a PNG for scalability. Select Sublime Text.app and type `⌘-i` or right-click (a useful holdover from my PC days) and select Get Info. Drag and drop your chosen image file onto the ugly icon image in the Info window (top left corner). Enjoy your sleeker Sublime Text icon.

If you have any suggestions for packages, themes or key-bindings, or if there is something horribly wrong with the above information, please feel free to reach out to me via [Twitter](https://twitter.com/chileannick "my Twitter") or shoot me an email. 

Thanks for reading and happy coding.
