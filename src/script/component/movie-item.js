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
            .movie-item {
                display: flex;
                flex-direction: row;
                width: 100%;
                margin-bottom: 20px;
                background: #fff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 15px;
            }
            .movie-img img {
                width: 200px;
                border-radius: 15px;
            }
            @media (max-width: 578px) {
                .movie-item {
                    display: flex;
                    flex-direction: column;
                }
                .movie-img img {
                    width: 100%;
                }
            }
            .movie-info {
                padding: 20px;
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
                margin-top: 10px;
                overflow: hidden;
                font-size: 15px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }

            .container {
                max-width: 100%;
                margin-right: auto;
                margin-left: auto;
                padding-right: 30px;
                padding-left: 30px;
            }
        </style>
        
        <div class="container">
            <div class="movie-item">
                <div class="movie-img">
                    <img src="${IMAGE_PATH}${this._movie.poster_path}" alt="Fan Art">
                </div>
                <div class="movie-info">
                    <h2>${this._movie.title}</h2>
                    <h3>${this._movie.vote_average}</h3>
                    <p>${this._movie.overview}</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);