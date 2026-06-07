import { useEffect, useState } from "react";
import { getElements } from "../dndAPI";

/**
 * Hook personalizado para facilitar a busca de elementos na API dnd5eAPI.
 * * @description
 * O hook encapsula a requisição assíncrona, controlando os estados de
 * carregamento (`loading`), sucesso (`dados`) e falha (`erro`).
 *
 * @param {string} element - O endpoint/recurso desejado (ex: '/spells', '/monsters', etc).
 * @param {string|number|null} id - ID opcional para buscar um item específico.
 * @param {string|null} lang - Idioma da requisição (ex: 'fr-FR','pt-Br'). Obs: O padrão é 'en'.
 * * @returns {{
 * dados: Array|Object,
 * erro: string|null,
 * loading: boolean
 * }} Retorna  objeto contendo o estado atual da requisição.
 */
export const useElementList = (element, id, lang) => {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let request = true;

    getElements(element, id, lang)
      .then((result) => {
        if (request) {
          const tipoDados = result.data.results
            ? result.data.results
            : result.data;
          setDados(tipoDados);
        }
      })
      .catch((error) => {
        if (request) {
          setErro(error.message || `Erro ao carregar : ${element}`);
        }
      })
      .finally(() => {
        if (request) {
          setLoading(false);
        }
      });

    // Realiza a limpeza dos dados puxados anteriormente.
    return () => {
      request = false;
      setLoading(true);
      setErro(null);
    };
  }, [id, element, lang]);

  return { dados, erro, loading };
};
