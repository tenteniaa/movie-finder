class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3e75aca2097e5bf2e7b89cc8858bfce&query=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} tidak ditemukan`);
          }
        });
  }
}

export default DataSource;