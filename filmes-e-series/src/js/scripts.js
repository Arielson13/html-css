document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "d99307ff";
  const sectionMovies = document.querySelector('.sectionMovies');

  getMovie();

  async function getMovie() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&`
    );
    const movie = await response.json();
    console.log(movie);
    showMovies(movie);
  };

  function showMovies(movie){
    sectionMovies.innerHTML = `
        <div>
            <h3>${movie.Title}</h3>
        </div>
    `;
  }
});
