import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function ResultsList({ results }) {
  // Funzione per generare l'URL completo dell'immagine
  const getImageUrl = (path) => {
    return path
      ? `https://image.tmdb.org/t/p/w342${path}`
      : "https://via.placeholder.com/200x300?text=N/A"; // Immagine di fallback se `poster_path` è nullo
  };

  // Funzione per convertire il voto in stelle
  const renderStars = (vote) => {
    const stars = Math.ceil(vote / 2); // Converte da 1-10 a 1-5
    return (
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          index < stars ? <FaStar key={index} color="gold" /> : <FaRegStar key={index} />
        ))}
      </>
    );
  };

  return (
    <div className="results-list">
      {results.length === 0 ? (
        <p>Nessun risultato trovato. Prova a cercare qualcosa!</p>
      ) : (
        <ul className="results-grid">
          {results.map((item) => (
            <li key={item.id} className="result-card">
              {/* Copertina del film/serie */}
              <img
                src={getImageUrl(item.poster_path)}
                alt={item.title || item.name}
                className="poster"
              />
              {/* Titolo e dettagli */}
              <div className="details">
                <h2>{item.title || item.name}</h2>
                <p>Titolo originale: {item.original_title || item.original_name}</p>
                <p>Lingua: {item.original_language.toUpperCase()}</p>
                <p>Voto: {renderStars(item.vote_average)}</p>
                <p>Tipo: {item.type === "movie" ? "Film" : "Serie TV"}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsList;
