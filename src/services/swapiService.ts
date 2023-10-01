import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchCharactersPage = (page: number) => {
  return axios.get(`${SWAPI_BASE_URL}/people/?page=${page}`)
    .then(response => response.data)
    .catch(error => { throw error; });
}

export const fetchCharacter = (id: number) => {
  return axios.get(`${SWAPI_BASE_URL}/people/${id}/`)
    .then(response => response.data)
    .catch(error => { throw error; });
}

export const fetchHomeworld = (homeworldUrl: string) => {
  return axios.get(homeworldUrl)
    .then(response => response.data)
    .catch(error => { throw error; });
}
