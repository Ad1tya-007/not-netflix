import React, { useState, useEffect } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./MovieRow.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieRow({ title, getUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // when MovieRow is called, get information from database
  useEffect(() => {
    async function getData() {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [getUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
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
      <div style={{ padding: "30px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
