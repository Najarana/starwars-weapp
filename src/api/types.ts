
export interface SwapiResponse<T> {
  count: number;
  next: null | number;
  previous: null | number;
  results: T[]
}

export interface Film {
  title: string;
  episode_id: number;
  release_date: string; // ISO 8601 date-string
  characters: string[]; // resource url
  url: string;
}

export interface Character {
  name: string;
  films: string; // resource url
  url: string;
}