---
layout: page
title: Tags
permalink: /tags/
---
<ul class="tags">
{% for tag in site.tags %}
  <li style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}%">
      <a href="#{{ tag | first | slugize }}">
          {{ tag | first }}
      </a>
  </li>
{% endfor %}
</ul>

<div id="blog-archives">
{% for tag in site.tags %}
  {% capture tag_name %}{{ tag | first }}{% endcapture %}
  <h2 id="#{{ tag_name | slugize }}">{{ tag_name }}</h2>
  <a name="{{ tag_name | slugize }}"></a>
  {% for post in site.tags[tag_name] %}
  <article>
    <h3><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h3>
  </article>
  {% endfor %}
{% endfor %}
</div>
