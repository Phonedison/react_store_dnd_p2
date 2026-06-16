import axios from "axios";

const apiDnD = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/2014",
});

/**
 * Busca de recursos na API dnd5eAPI, permitindo listagem geral ou dados por ID, com suporte ao Idioma.
 * * @description
 * O método monta a URL da requisição se baseando nos parâmetros fornecidos.
 * Se o `id` for omitido (ou `null`), busca a lista completa do recurso. Caso contrário, busca o item específico.
 * O idioma padrão é o inglês ('en') caso nenhum seja especificado.
 *
 * @param {'string'|'number'|'null'} [id=null,lang=null] - ID opcional do elemento (ex: 'fireball', 25).
 * @param {string} element - O endpoint/recurso desejado (ex: '/spells', '/monsters', 'etc').
 * @param {string|null} [lang='en'] - O código do idioma (ex: 'fr-FR','pt-Br'). Obs: O padrão é 'en'.
 * @returns {Promise<AxiosResponse>} Promise com a resposta da API.
 */
export const getElements = (element, id = null, lang = null) => {
  const idioma = lang !== null ? lang : "en";
  const url =
    id === null
      ? `${element}?lang=${idioma}`
      : `${element}/${id}?lang=${idioma}`;
  return apiDnD.get(url);
};
