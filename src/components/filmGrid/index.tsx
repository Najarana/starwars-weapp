import { useState } from 'react';
import styled from 'styled-components';
import { Film } from '../../api/types';
import { Grid, GridItem } from '../grid';
import FilmBox from './filmBox';
import FilmInformationModal from './filmInfoModal';

interface Props {
  films: Film[];
}

function FilmGrid({films}: Props) {

  const [selectedFilm, setSelectedFilm] = useState<Film | undefined>();

  const closeModal = () => {
    setSelectedFilm(undefined);
  }

  const selectFilm = (film: Film) => {
    setSelectedFilm(film)
  }

  const renderMovieItems = () => {
    return films.map(film => (
      <GridItem>
        <FilmBox film={film} onClick={setSelectedFilm}/>
      </GridItem>
    ))
  }

  return (
    <Grid>
      {renderMovieItems()}
      <FilmInformationModal closeModal={closeModal} film={selectedFilm}/>
    </Grid>
  )
}


export default FilmGrid;