const API_SERVER = "https://rickandmortyapi.com/api/character";

export const getInfo = () => fetch(API_SERVER).then((res) => res.json());

export const getInfoById = (id) => fetch(`${API_SERVER}/${id}`).then((res) => res.json());