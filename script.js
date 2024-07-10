let hasSearched = false;

document.addEventListener('DOMContentLoaded', function() {
    sortGames();
});

document.getElementById('searchBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGames();
        hasSearched = true;
    }
});

function searchGames() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let gallery = document.getElementById('gallery');
    let images = gallery.getElementsByTagName('img');
    
    for (let i = 0; i < images.length; i++) {
        let altText = images[i].alt.toLowerCase();
        if (altText.includes(input)) {
            images[i].classList.remove('hidden');
        } else {
            images[i].classList.add('hidden');
        }
    }
}

function sortGames() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.getElementsByTagName('img'));

    images.sort((a, b) => {
        const nameA = a.alt.toLowerCase();
        const nameB = b.alt.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    images.forEach(img => {
        gallery.appendChild(img);
    });
}

function goBack() {
    if (hasSearched) {
        window.location.href = 'psp.html';
    } else {
        window.location.href = 'index.html';
    }
}
