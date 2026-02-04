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

