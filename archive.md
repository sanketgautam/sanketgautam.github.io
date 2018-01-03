---
permalink: /archive
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  * {{ post.date | date_to_long_string }} &#10148; [ {{ post.title }} ]({{ post.url }})
{% endfor %}