import styled from 'styled-components';
import { Film } from '../../api/types';




const Box = styled.div `
  display: flex;
  height: 200px;
  width: 200px;
  margin: 8px;
  padding: 8px;
  background-color: lightblue;
  flex-wrap: wrap;
`;

const Title = styled.div `
  width: 100%;
  align-self: center;

`;

const ReleaseDate = styled.div `
width: 100%;
  justify-self: flex-end;
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
    <Box onClick={handleClick}>
      <Title>{film.title}</Title>
      <ReleaseDate>{film.release_date}</ReleaseDate>
    </Box>
  )
}

export default FilmBox;