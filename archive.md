---
permalink: /archive
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  * {{ post.date | date: "%B %d, %Y" }} &#10148; [ {{ post.title }} ]({{ post.url }})
{% endfor %}