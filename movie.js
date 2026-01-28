const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');

fetch(`http://www.omdbapi.com/?i=${id}&apikey=c24b384d`)
    .then(response => response.json())
    .then(json => {
        const filmInfo = `
            <img class="film-page-poster" src="${json.Poster}" alt='Постер фильма не найден' >
            <div class="film-page-text-wrapper">
                <h1 class="film-page-title">${json.Title}</h1>
                <p class="film-info">Год: <span class="film-info-response">${json.Year}</span></p>
                <p class="film-info">Рейтинг: <span class="film-info-response">${json.Rated}</span></p>
                <p class="film-info">Дата выхода: <span class="film-info-response">${json.Released}</span></p>
                <p class="film-info">Продолжительность: <span class="film-info-response">${json.Runtime}</span></p>
                <p class="film-info">Жанр: <span class="film-info-response">${json.Genre}</span></p>
                <p class="film-info">Режисёр: <span class="film-info-response">${json.Director}</span></p>
                <p class="film-info">Сценарий: <span class="film-info-response">${json.Writer}</span></p>
                <p class="film-info">Актёры: <span class="film-info-response">${json.Actors}</span></p>
            </div>
        `;

        document.querySelector('.js-film-page').innerHTML = filmInfo;
    })
