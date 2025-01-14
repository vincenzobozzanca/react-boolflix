import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import axios from "axios";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const apiKey = "8678901825c6e44a8b399fb40eb95791"; // Sostituisci con la tua API key
    const url = `https://api.themoviedb.org/3/search/movie`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
          query: query,
          language: "it-IT",
        },
      });
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Errore durante la chiamata API:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>BoolFlix</h1>
      </header>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
