// JavaScript code for dynamically loading content based on navigation links
const contentSection = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

function loadContent(event) {
  event.preventDefault();
  const link = this.getAttribute('href');
  fetchContent(link);
}

function fetchContent(link) {
  // Make AJAX request or fetch API call to get content based on the link
  // Example:
  fetch(link + '.html')
    .then(response => response.text())
    .then(data => {
      contentSection.innerHTML = data;
    })
    .catch(error => {
      contentSection.innerHTML = 'Error loading content.';
    });
}

// Attach event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', loadContent);
});

// Load default content on page load
fetchContent(navLinks[0].getAttribute('href'));
