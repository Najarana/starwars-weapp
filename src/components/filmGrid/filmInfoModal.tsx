

import { Cancel } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, Typography, Skeleton, IconButton } from '@mui/material';

import axios, { Axios, AxiosPromise } from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCharacter, getPeople } from '../../api/api';
import { Character, Film } from '../../api/types';
import { Grid } from '../grid';

interface Props {
  film?: Film;
  characters: Character[];
  loadingCharacters: boolean;
  closeModal: () => void;
}

const ContentContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin: 8px;
`;

const DialogTop = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CloseButton = styled.button `
  border: none;
  padding: 16px 24px;
  text-align: center;
  background-color: inherit;
  font-size: 16px;
  &:hover {
    font-weight: bolder;
  }
`;

const CharcterListContainer = styled.div `
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: wrap;
  height: 500px;
`;


function FilmInformationModal({film, characters, loadingCharacters, closeModal}:Props) {

  if (!film) {
    return null;
  }

  return (
    <Dialog open={!!film} onClose={closeModal} fullWidth>
      <ContentContainer>
      <DialogTop>
        <Typography variant="h5">{film?.title}</Typography>
        <CloseButton onClick={closeModal}>
          Close
        </CloseButton>
      </DialogTop>
        <CharcterListContainer>
          <CharacterList characters={characters} listLength={film?.characters.length} loading={loadingCharacters}/>
        </CharcterListContainer>

      </ContentContainer>
    </Dialog>

  )

}

interface CharacterListProps {
  characters: Character[];
  listLength: number;
  loading: boolean;
}

const CharacterList:FC<CharacterListProps> = ({characters, listLength, loading}: CharacterListProps) => {
  console.log(characters)
  if (loading) {
    const skeletonLoaders = []
    for (let i = 0; i < listLength; i++) {
      skeletonLoaders.push(<Typography><Skeleton width={'200px'} /></Typography>)
    }
    return <>{skeletonLoaders}</>
  }

  return (
    <>
      {characters.map(character => (
        <Typography>{character.name}</Typography>
      ))
      }
    </>
  )
}

export default FilmInformationModal;