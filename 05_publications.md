---
layout: page
title: Publications scientifiques
permalink: /publications/
---

<div class="section-header" style="text-align: center; margin-bottom: 3rem;">
  <p class="section-subtitle" style="font-size: 1.2rem;">
    Cette page répertorie les publications scientifiques de nos équipes liées au projet IMPROVED.
  </p>
</div>

<div class="card" style="margin-bottom: 2rem;">
  <div class="card-content">
    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
      <i class="fas fa-book"></i> Publications HAL
    </h3>
    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem;">
      Les publications sont automatiquement récupérées depuis l'archive ouverte HAL (Hyper Articles en Ligne).
    </p>
  </div>
</div>

<div style="background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); overflow: hidden;">
  <iframe 
    id="publicationshal" 
    title="Publications" 
    width="100%" 
    height="2500" 
    src="https://api.archives-ouvertes.fr/search/anr/?omitHeader=true&wt=html&q=%2A&sort=publicationDate_tdate+desc&fq=collCode_s%3AANR&fq=NOT+status_i%3A111&fq=%7B%21tag%3Dtag0__anrProjectReference_s%7DanrProjectReference_s%3A%28%22ANR%5C-22%5C-CE39%5C-0006%22%29&defType=edismax&rows=1000"
    style="border: 0; display: block;">
  </iframe>
</div>

<style>
  #publicationshal {
    min-height: 2500px;
  }
  
  @media (max-width: 768px) {
    #publicationshal {
      min-height: 2000px;
    }
  }
</style>
