import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/page';
import { getFilms, getPeople } from './api/api';
import { Character, Film } from './api/types';
import FilmGrid from './components/filmGrid';

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loadingFilms, setLoadingFilms] = useState(false);

  useEffect(() => {
    setLoadingFilms(true);
    setTimeout(() => {
      getFilms().then(response => {
        const films = response.data.results.sort(function(a, b) {
          return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
        })
        setFilms(films);
      }).finally(() => setLoadingFilms(false))
    }, 1000)


  }, [])
  return (
    <div className="App">
      <Page>
        <h1>Star wars - All 6 movies on one page!</h1>
        <FilmGrid films={films} loadingFilms={loadingFilms} />
      </Page>
    </div>
  );
}

export default App;
