import styled from 'styled-components';
import { Film } from '../../api/types';

export const Box = styled.div `
  display: flex;
  height: 150px;
  width: 100%;
  margin: 8px;
  padding: 8px;
  flex-wrap: wrap;
`;

// Because starwars
export const StarWarsBox = styled(Box)`
  background-color: black;
  color: yellow;
  max-width: 300px;
`

const Title = styled.div `
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const ReleaseDate = styled.div `
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 1140px) {
    justify-content: flex-end;
  }
`

interface Props {
  film: Film;
  onClick: (film: Film) => void;
}

function FilmBox({film, onClick}: Props) {
  const handleClick = () => {
    onClick(film);
  }
  return (
    <StarWarsBox onClick={handleClick}>
      <Title>{film.title}</Title>
      <ReleaseDate>{film.release_date}</ReleaseDate>
    </StarWarsBox>
  )
}

export default FilmBox;