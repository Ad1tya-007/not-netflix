import "./App.css";
import MovieRow from "./MovieRow";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>NOT NETFLIX!</h1>
      <MovieRow
        title="NOT NETFLIX ORIGINALS"
        getUrl={requests.getNetflixOriginals}
        isLarge
      />
      <MovieRow title="TRENDING NOW" getUrl={requests.getTrending} />
      <MovieRow title="TOP RATED" getUrl={requests.getTopRated} />
      <MovieRow title="ACTION MOVIES" getUrl={requests.getActionMovies} />
      <MovieRow title="COMEDY MOVIES" getUrl={requests.getComedyMovies} />
      <MovieRow title="HORROR MOVIES" getUrl={requests.getHorrorMovies} />
      <MovieRow title="ROMANCE MOVIES" getUrl={requests.getRomanceMovies} />
      <MovieRow title="DOCUMENTRY" getUrl={requests.getDocumentaries} />
    </div>
  );
}

export default App;
