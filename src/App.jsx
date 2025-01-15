import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/ResultsList";
import axios from "axios";
import "./index.css";

function App() {
	const [results, setResults] = useState([]);

  const fetchResults= async (query) => {
    const apiKey = "8678901825c6e44a8b399fb40eb95791"; 

	const movieUrl = `https://api.themoviedb.org/3/search/movie`;
	const tvUrl = `https://api.themoviedb.org/3/search/tv`;
  
	try {
		const [movieResponse, tvResponse] = await Promise.all([
		  axios.get(movieUrl, {
			params: {
			  api_key: apiKey,
			  query: query,
			  language: "it-IT",
			},
		  }),
		  axios.get(tvUrl, {
			params: {
			  api_key: apiKey,
			  query: query,
			  language: "it-IT",
			},
		  }),
		]);
  
		// Combina i risultati di film e serie TV
		const combinedResults = [
		  ...movieResponse.data.results.map((item) => ({
			...item,
			type: "movie",
		  })),
		  ...tvResponse.data.results.map((item) => ({
			...item,
			type: "tv",
		  })),
		];
  
		setResults(combinedResults);
	  } catch (error) {
		console.error("Errore durante la chiamata API:", error);
	  }
	};

  return (
    <div className="app">
      <header>
        <h1>BoolFlix</h1>
      </header>
      <SearchBar onSearch={fetchResults} />
      <MovieList results={results} />
    </div>
  );
}

export default App;
