// app.js
const contentDiv = document.getElementById('content');

// Function to update content based on the route
function updateContent(route) {
  switch (route) {
    case '/':
      contentDiv.innerHTML = '<h2>Home</h2>';
      break;
    case '/about':
      contentDiv.innerHTML = '<h2>About</h2>';
      break;
    case '/contact':
      contentDiv.innerHTML = '<h2>Contact</h2>';
      break;
    default:
      contentDiv.innerHTML = '<h2>404 Not Found</h2>';
  }
}

// Handle navigation events
function handleNavigation() {
  const path = window.location.pathname;
  updateContent(path);
}

// Initial content update
handleNavigation();

// Listen for navigation events
window.addEventListener('popstate', handleNavigation);
