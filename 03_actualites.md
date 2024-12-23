---
layout: page
title: Actualités
permalink: /03_actualites/
---

Cette page regroupe les dernières activités du consortium IMPROVED ainsi que les réunions trimestrielles.
<hr class="my-4">

{% for post in site.posts %}
<div class="post-preview">
  <h2><a href="#post-{{ post.id | slugify }}" class="read-more">{{ post.title }}</a></h2>
  <div class="content">{{ post.content }}</div>
</div> 
<hr>
{% endfor %}
