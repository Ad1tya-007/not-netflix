import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieRow({ title, getUrl }) {
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
              className="row-poster"
              src={base_url + movie.poster_path}
              alt={movie.name}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
