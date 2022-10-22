class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }
 
    render() {
        const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: flex;
                margin-bottom: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .fan-art-movie {
                width: 200px;
                object-fit: cover;
                object-position: center;
            }
            .movie-info {
                padding: 24px;
            }
            .movie-info > h2 {
                font-weight: bold;
                font-size: 20px;
            }
            .movie-info > h3 {
                margin-top: 10px;
                font-size: 15px;
                color: #EB1D36;
            }
            
            .movie-info > p {
                margin-top: 50px;
                overflow: hidden;
                font-size: 15px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        
        <img class="fan-art-movie" src="${IMAGE_PATH}${this._movie.poster_path}" alt="Fan Art">
        <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <h3>${this._movie.vote_average}</h3>
            <p>${this._movie.overview}</p>
        </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);