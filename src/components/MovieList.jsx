import React from "react";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>Nessun film trovato. Prova a cercare qualcosa!</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className="movie-card">
              <h2>{movie.title}</h2>
              <p>Titolo originale: {movie.original_title}</p>
              <p>Lingua: {movie.original_language}</p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
