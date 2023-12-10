function loadContent(page) {
    // Use AJAX to load content dynamically
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update content div with the loaded HTML
            document.getElementById("content").innerHTML = this.responseText;

            // Change the URL in the address bar
            history.pushState(null, null, '/' + page);
        }
    };
    xhttp.open("GET", page + '.html', true);
    xhttp.send();
}

// Handle browser back/forward buttons
window.onpopstate = function(event) {
    if (event.state) {
        loadContent(event.state.page);
    }
};
