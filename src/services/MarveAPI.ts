import axios from "axios";

//gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=3d52b88a492f87e8d0977fce6516412d&hash=701091451d86bcf24ace7fe4dc40baa4

export interface ICharacterInfo {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ICharacterInfos {
  id: number;
  name: string;
  description: string;
  modified: string;
  comics: {
    available: number;
    items: [resourceURI: string, name: string];
  };
  series: {
    available: number;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IComicsInfos {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const baseURL = "https://gateway.marvel.com/v1/public/";
const apiKey = "3d52b88a492f87e8d0977fce6516412d";
const hash = "701091451d86bcf24ace7fe4dc40baa4";

const api = axios.create({
  baseURL: `${baseURL}`,
});

const urlCharacters =
  baseURL + "characters?limit=20&ts=1&apikey=" + apiKey + "&hash=" + hash;

export const getAllCharacters = (): Promise<ICharacterInfo[]> =>
  api.get(urlCharacters).then((response) => {
    const { results } = response.data.data;
    return results;
  });

export const getCharacterById = (id: string): Promise<ICharacterInfos[]> =>
  api
    .get(`${baseURL}/characters?id=${id}&ts=1&apikey=${apiKey}&hash=${hash}`)
    .then((response) => {
      const { results } = response.data.data;
      return results;
    });

export const getComicsByCharacterId = (id: string, limit: number): Promise<IComicsInfos[]> =>
  api
    .get(
      `${baseURL}/characters/${id}/comics?limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`
    )
    .then((response) => {
      const { results } = response.data.data;
      return results
    });
