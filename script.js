
// Get all the navigation buttons
const navButtons = document.querySelectorAll('.nav-button');

// Add a click event listener to each button
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');
  });
});
