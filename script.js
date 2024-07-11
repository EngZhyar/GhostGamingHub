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

document.addEventListener('DOMContentLoaded', function() {
    const images = Array.from(document.querySelectorAll('#gallery img'));
    const itemsPerPage = 10;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    let currentPage = 1;

    function showPage(page) {
        currentPage = page;
        images.forEach((img, index) => {
            img.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'inline' : 'none';
        });

        updatePagination();
    }

    function updatePagination() {
        const currentPageSpan = document.getElementById('current-page');
        const nextPageSpan = document.getElementById('next-page');
        const prevPageButton = document.getElementById('prev-page');
        const nextPageButton = document.getElementById('next-page');
        const lastPageButton = document.getElementById('last-page');

        currentPageSpan.innerText = currentPage;
        nextPageSpan.innerText = currentPage < totalPages ? currentPage + 1 : totalPages;

        prevPageButton.classList.toggle('disabled', currentPage === 1);
        nextPageButton.classList.toggle('disabled', currentPage === totalPages);
    }

    function createPagination() {
        document.getElementById('prev-page').addEventListener('click', () => {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });

        document.getElementById('next-page').addEventListener('click', () => {
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });

        document.getElementById('last-page').addEventListener('click', () => {
            showPage(totalPages);
        });
    }

    createPagination();
    showPage(1);
});
