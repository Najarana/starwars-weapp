import axios, { AxiosPromise } from 'axios';
import { Character, Film, SwapiResponse } from './types';

const apiPath = 'https://swapi.dev/api/';



function getFilms(): AxiosPromise<SwapiResponse<Film>> {
  return axios.get(`${apiPath}/films`);
}

function getPeople(search?: string): AxiosPromise<SwapiResponse<Character>> {
  return axios.get(`${apiPath}/people` + (search ? `?search=${search}`: '' ))
}

const getCharacter = (peopleResourceUrl: string): AxiosPromise<Character> => {
  return axios.get(peopleResourceUrl);
}


export {getFilms, getPeople, getCharacter};