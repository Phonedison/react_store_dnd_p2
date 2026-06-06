import axios from "axios";

const apiDnD = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/2014",
});

export const getElements = (id = null, element) => {
  const url =
    id === null ? `${element}?lang=pt-BR` : `${element}/${id}?lang=pt-BR`;
  return apiDnD.get(url);
};
