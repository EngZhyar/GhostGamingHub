let hasSearched = false;

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the search box
    document.getElementById('searchBox').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchGames();
            hasSearched = true;
        }
    });

    // Event listener for the back button
    document.getElementById('backButton').addEventListener('click', function() {
        goBack();
    });
});

function searchGames() {
    let input = document.getElementById('searchBox').value.trim().toLowerCase();
    let gallery = document.getElementById('gallery');
    let images = gallery.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        let altText = images[i].alt.trim().toLowerCase();
        if (altText.includes(input)) {
            images[i].style.display = 'inline';
        } else {
            images[i].style.display = 'none';
        }
    }
}

function goBack() {
    if (hasSearched) {
        window.location.href = 'psp.html'; // Navigate to psp.html if search was performed
    } else {
        window.location.href = 'index.html'; // Otherwise, navigate to index.html
    }
}


document.addEventListener('DOMContentLoaded', function() {
    sortGames();
});

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


