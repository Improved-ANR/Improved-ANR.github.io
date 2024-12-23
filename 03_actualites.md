---
layout: page
title: Actualités
permalink: /03_actualites/
---

Voici les dernières actualités de notre équipe :
<hr class="my-4">

{% for post in site.posts %}
<div class="post-preview">
  <h2><a href="#post-{{ post.id | slugify }}" class="read-more">{{ post.title }}</a></h2>
 <!-- <p class="text-muted">{{ post.date | date: "%d %B %Y" }}</p>
  <p>{{ post.excerpt }}</p>
</div>
 <div class="post-content" id="post-{{ post.id | slugify }}"-->
  <div class="content">{{ post.content }}</div>
</div> 
<hr>
{% endfor %}
