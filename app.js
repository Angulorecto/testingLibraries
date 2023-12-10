// app.js
import page from 'page';

const contentDiv = document.getElementById('content');

page('/', () => {
  contentDiv.innerHTML = '<h2>Home</h2>';
});

page('/about', () => {
  contentDiv.innerHTML = '<h2>About</h2>';
});

page('/contact', () => {
  contentDiv.innerHTML = '<h2>Contact</h2>';
});

// Add a 404 route
page('*', () => {
  contentDiv.innerHTML = '<h2>404 Not Found</h2>';
});

// Start the router
page();
