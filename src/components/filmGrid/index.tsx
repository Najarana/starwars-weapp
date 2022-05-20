import { Skeleton } from '@mui/material';
import { AxiosPromise } from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCharacter } from '../../api/api';
import { Character, Film } from '../../api/types';
import { Grid, GridItem } from '../grid';
import FilmBox, { Box } from './filmBox';
import FilmInformationModal from './filmInfoModal';

interface Props {
  films: Film[];
  loadingFilms: boolean;
}

function FilmGrid({films, loadingFilms}: Props) {

  const [selectedFilm, setSelectedFilm] = useState<Film | undefined>();
  const [characterMap, setCharacterMap] = useState<Record<string, Character>>({});
  const [loadingCharacters, setLoadingCharcters] = useState(false);

  const closeModal = () => {
    setSelectedFilm(undefined);
  }

  useEffect(() => {
    if(selectedFilm) {
      loadCharacters(selectedFilm);
    }
  }, [selectedFilm?.title])

  const loadCharacters = (film: Film) => {
    const charactersToFetch = film.characters.filter(character => characterMap[character] === undefined);
    if (charactersToFetch.length) {
      setLoadingCharcters(true);
    }
    const promises: AxiosPromise<Character>[] = charactersToFetch.map(getCharacter);

    Promise.all(promises).then((responses) => {

      const fetchedCharacters: Record<string, Character> = responses
        .map(response => response.data)
        .reduce((current, character) => ({...current, [character.url]: character}), {});
      console.log(fetchedCharacters)
      setCharacterMap((prevCharacterMap) => {
        return  {...prevCharacterMap, ...fetchedCharacters}
      })
    }).finally(() => setLoadingCharcters(false));
  }

  const getCharactersForSelectedMovie = (keys: string[] | undefined): Character[] => {
    return keys ? keys.map(key => characterMap[key]) : [];
  }

  const renderMovieItems = () => {
    if(loadingFilms) {
      return  [1,2,3,4,5,6].map(number => (
        <GridItem key={number}>
          <Box><Skeleton height={200} width={'100%'}  /></Box>
        </GridItem>))
    }

    return films.map(film => (
      <GridItem>
        <FilmBox film={film} onClick={setSelectedFilm}/>
      </GridItem>
    ))
  }

  return (
    <Grid>
      {renderMovieItems()}
      <FilmInformationModal
        closeModal={closeModal}
        film={selectedFilm}
        characters={getCharactersForSelectedMovie(selectedFilm?.characters)}
        loadingCharacters={loadingCharacters}/>
    </Grid>
  )
}


export default FilmGrid;