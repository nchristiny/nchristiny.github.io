---
layout: page
title: code or die
---
<img class="center-img" src="/assets/img/guess-ill-die.jpg" title="Old man shrugging with meme caption 'Guess I'll Die'">

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
       {{ post.excerpt | strip_html | truncatewords: 22 }}
    </li>
  {% endfor %}
</ul>