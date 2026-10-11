const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const encodedQuery = encodeURIComponent(query);
        window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
}

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});