import React from "react";

function ResultsList({ results }) {
  const getFlagEmoji = (languageCode) => {
    const code = languageCode === "en" ? "gb" : languageCode;
    return String.fromCodePoint(
      ...[...code.toUpperCase()].map((char) => char.charCodeAt(0) + 127397)
    );
  };

  return (
    <div className="results-list">
      {results.length === 0 ? (
        <p>Nessun risultato trovato. Prova a cercare qualcosa!</p>
      ) : (
        <ul>
          {results.map((item) => (
            <li key={item.id} className="result-card">
              <h2>{item.title || item.name}</h2>
              <p>
                Titolo originale: {item.original_title || item.original_name}
              </p>
              <p>
                Lingua: {getFlagEmoji(item.original_language)}{" "}
                {item.original_language.toUpperCase()}
              </p>
              <p>Voto: {item.vote_average}</p>
              <p>Tipo: {item.type === "movie" ? "Film" : "Serie TV"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsList;
