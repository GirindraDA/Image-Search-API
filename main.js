// use your api key from unsplash
const accesKey = 'EeFILkU1wAEH2ad6hROjMkwQFhLlz73pQWeK5KwpBt4';

const searchForm = document.getElementById('search-engine');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = '';
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imagesLink = document.createElement('a');
        imagesLink.href = result.links.html;
        imagesLink.target = '_blank';

        imagesLink.appendChild(image);
        searchResult.appendChild(imagesLink);
    });
    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages();
});




