---
layout: page
title: code or die
---

![Guess I'll Die](/assets/img/guess-ill-die.jpg "Guess I'll Die")

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
       {{ post.excerpt | strip_html | truncatewords: 22 }}
    </li>
  {% endfor %}
</ul>