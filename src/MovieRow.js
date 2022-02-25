import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./MovieRow.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieRow({ title, getUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  // when MovieRow is called, get information from database
  useEffect(() => {
    async function getData() {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [getUrl]);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row-poster ${isLarge && "row-poster-large"}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
