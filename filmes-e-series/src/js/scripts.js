document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "d99307ff";
  const sectionMovies = document.querySelector(".sectionMovies");

  getMovie();

  async function getMovie() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=2020`
    );
    const movie = await response.json();
    console.log(movie.Search);
    showMovies(movie.Search);
  }

  function showMovies(movie) {
  sectionMovies.innerHTML = ""; // limpa antes de renderizar

  movie.forEach((movies) => {
    if (movies.Poster && movies.Poster !== "N/A") {
      sectionMovies.innerHTML += `
        <div>
          <img src="${movies.Poster}" onerror="this.style.display='none'" />
          <h3>${movies.Title}</h3>
          <p>${movies.Year}</p>
        </div>
      `;
    }
  });
}
});
