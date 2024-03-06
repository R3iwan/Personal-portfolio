function loadContent() {
    const hash = window.location.hash.substring(1);
    const content = document.getElementById('content');

    fetch(`${hash}.html`)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            content.innerHTML = '<p>Error loading content.</p>';
        });
}

window.addEventListener('load', loadContent);
window.addEventListener('hashchange', loadContent);