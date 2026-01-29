const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = 'apikey=c24b384d';

const searchBtnNode = document.querySelector('.js-search-btn');
const inputNode = document.querySelector('.js-input');

searchBtnNode.addEventListener('click', () => {
    const userRequest = inputNode.value;

    if (!userRequest) {
        document.querySelector('.js-films-list').innerHTML = `<p class='not-found'>Фильмы не найдены</p>`;
        return;
    }

    fetch(`${BASE_URL}?s=${userRequest}&${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            const films = json.Search;

            let film = '';
            
            films.forEach(element => {
                film += `
                    <div class='film' onclick="location.href='movie.html?id=${element.imdbID}';">
                        <img class='film-poster' src='${element.Poster}'>
                        <div class='film-info'>
                            <h2 class='film-info-title'>${element.Title}</h2>
                            <p class='film-info-year'>${element.Year}</p>
                            <p class='film-info-type'>${element.Type}</p>
                        </div>
                    </div>
                `;
            });

            document.querySelector('.js-films-list').innerHTML = film;
        })

    searchBtnNode.classList.toggle('active-btn');
});
