---
layout: page
title: CODE OR DIE?
---

![Guess I'll Die](/assets/img/guess-ill-die.jpg "Guess I'll Die")

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>