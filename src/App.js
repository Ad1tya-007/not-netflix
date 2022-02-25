import "./App.css";
import MovieRow from "./MovieRow";
import Banner from "./Banner";
import requests from "./request";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MovieRow
        title="NOT NETFLIX ORIGINALS"
        isLarge
        getUrl={requests.getNetflixOriginals}
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
