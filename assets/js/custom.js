// Fichier : js/custom.js
// Auteur : A. SENDJASNI

document.querySelectorAll('.toggle-post').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action (e.g., following link)

    // Find the parent post (the element with class "post")
    var post = link.closest('.post');

    // Toggle the 'open' class on the post and content
    post.classList.toggle('open');
    var content = post.querySelector('.post-content');
    content.classList.toggle('open');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var postPreviews = document.querySelectorAll('.post-preview h2 a');

  postPreviews.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          console.log("Titre cliqué !");
          var postId = link.getAttribute('href').substring(1); // Supprime le caractère #
          console.log("ID de la publication :", postId);
          var postContent = document.getElementById(postId);
          console.log("Contenu de la publication :", postContent);

          if (postContent) {
              // Vérifie si le contenu du post est affiché ou non, puis bascule son état
              postContent.classList.toggle('open');
          }
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
      var target = e.target;

      if (!checkbox.checked || sidebar.contains(target) || (target === checkbox || target === toggle)) return;

      checkbox.checked = true;
  }, false);
});
