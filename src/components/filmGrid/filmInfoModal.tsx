import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import axios, { Axios, AxiosPromise } from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPeople } from '../../api/api';
import { Character, Film } from '../../api/types';

interface Props {
  film?: Film;
  closeModal: () => void;
}

const getCharacter = (url: string): AxiosPromise<Character> => {
  return axios.get(url);
}

function FilmInformationModal({film, closeModal}:Props) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    if (film) {
      setLoading(true);
      // This API is silly
      const promises: AxiosPromise<Character>[] = film.characters.map(getCharacter);

      Promise.all(promises).then((responses) => {
        const characters = responses.map(response => response.data);
        setCharacters(characters)
        setLoading(false)
      });
    }
  }, [film?.title])

  return (
    <Dialog open={!!film} onClose={closeModal}>
      <DialogTitle>{film?.title}</DialogTitle>
      <DialogContent>
        <Grid direction='column'>
          {characters.map(character => character.name)}
        </Grid>

      </DialogContent>
    </Dialog>

  )

}

export default FilmInformationModal;