const apikey = "9d1c1f083fcc4b5b345c477285200577";
const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=pt-BR&page=1`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const sectionMovies = document.querySelector(".sectionMovies");

async function fetchData() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data.results);
    printMovies(data.results);
  } catch (error) {
    console.error("Erro ao buscar filmes", error);
  }
}

function printMovies(movies) {
  sectionMovies.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");

    movieCard.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    `;

    sectionMovies.appendChild(movieCard);
  });
}

fetchData();
