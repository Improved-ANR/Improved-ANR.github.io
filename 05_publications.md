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
    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
      Les publications sont automatiquement récupérées depuis l'archive ouverte HAL (Hyper Articles en Ligne).
    </p>
  </div>
</div>

<div id="hal-publications" style="margin-bottom: 3rem;">
  <p style="text-align: center; color: var(--text-secondary);">Chargement des publications…</p>
</div>

<style>
  .hal-year {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin: 2.5rem 0 1rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
  }
  .hal-item {
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    padding: 1.5rem 1.75rem;
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }
  .hal-item .hal-meta {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
  }
  .hal-badge {
    background: var(--primary-color);
    color: white;
    border-radius: 999px;
    padding: 0.15rem 0.7rem;
    font-size: 0.8rem;
  }
  .hal-item .hal-citation {
    color: var(--text-primary, #222);
  }
  .hal-item a.hal-link {
    display: inline-block;
    margin-top: 0.75rem;
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
  }
  .hal-item a.hal-link:hover { text-decoration: underline; }
  .hal-error {
    text-align: center;
    color: var(--text-secondary);
  }
</style>

<script>
(function () {
  var container = document.getElementById('hal-publications');

  var DOC_TYPES = {
    ART: 'Article',
    COMM: 'Communication',
    POSTER: 'Poster',
    OUV: 'Ouvrage',
    COUV: 'Chapitre',
    THESE: 'Thèse',
    HDR: 'HDR',
    REPORT: 'Rapport',
    PRESCONF: 'Preprint'
  };

  var api = 'https://api.archives-ouvertes.fr/search/anr/' +
    '?q=*&wt=json&rows=1000' +
    '&sort=publicationDate_tdate+desc' +
    '&fl=halId_s,label_s,uri_s,docType_s,publicationDate_s' +
    '&fq=anrProjectReference_s:%22ANR-22-CE39-0006%22' +
    '&fq=NOT+status_i:111';

  fetch(api)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      var docs = data.response.docs;

      if (!docs.length) {
        container.innerHTML = '<p class="hal-error">Aucune publication trouvée pour le moment.</p>';
        return;
      }

      var html = '';
      var currentYear = null;

            docs.forEach(function (doc) {
        var year = doc.publicationDate_s ? doc.publicationDate_s.slice(0, 4) : 'Non daté';

        if (year !== currentYear) {
          html += '<h2 class="hal-year">' + year + '</h2>';
          currentYear = year;
        }

        var type = DOC_TYPES[doc.docType_s] || '';
        var label = Array.isArray(doc.label_s) ? doc.label_s[0] : (doc.label_s || '');
        var link = doc.uri_s || ('https://hal.science/' + doc.halId_s);

        html += '<div class="hal-item">' +
                  '<div class="hal-meta">' +
                    (type ? '<span class="hal-badge">' + type + '</span>' : '') +
                  '</div>' +
                  '<div class="hal-citation">' + label + '</div>' +
                  '<a class="hal-link" href="' + link + '" target="_blank" rel="noopener">Voir sur HAL →</a>' +
                '</div>';
      });

      container.innerHTML = html;
    })
    .catch(function () {
      container.innerHTML =
        '<p class="hal-error">Impossible de charger les publications. ' +
        '<a href="https://hal.science/search/index/?q=ANR-22-CE39-0006" target="_blank" rel="noopener">' +
        'Consulter la liste sur HAL</a>.</p>';
    });
})();
</script>
