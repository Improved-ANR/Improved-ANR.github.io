---
layout: page
title: Actualités
permalink: /03_actualites/
---

<div class="section-header" style="text-align: center; margin-bottom: 3rem;">
  <p class="section-subtitle" style="font-size: 1.2rem;">
    Cette page regroupe les dernières activités du consortium IMPROVED ainsi que les réunions trimestrielles.
  </p>
</div>

<div class="posts-grid" style="padding: 0;">
  {% for post in site.posts %}
  <article class="post-card fade-in-up">
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-image">
    {% else %}
    <div class="post-image" style="background: var(--gradient-primary); display: flex; align-items: center; justify-content: center;">
      <i class="fas fa-newspaper" style="font-size: 3rem; color: white;"></i>
    </div>
    {% endif %}
    <div class="post-card-content">
      <p class="post-card-date">
        <i class="far fa-calendar-alt"></i> {{ post.date | date: "%d %B %Y" }}
      </p>
      <h3 class="post-card-title">{{ post.title }}</h3>
      <div class="post-card-excerpt">
        {{ post.content }}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

<style>
  .post-card-excerpt img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    margin: 1rem 0;
  }
  
  .post-card-excerpt .image-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .post-card-excerpt .image-column {
    flex: 1;
    min-width: 200px;
  }
  
  .post-card-excerpt .image-column img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-lg);
  }
</style>
