import { useEffect, useState } from "react";
import { getElements } from "../dndAPI";

/**
 * Hook personalizado para facilitar a busca de elementos na API dnd5eAPI.
 * * @description
 * O hook encapsula a requisição assíncrona, controlando os estados de
 * carregamento (`loading`), sucesso (`dados`) e falha (`erro`).
 *
 * @param {Object} params - Objeto contendo os parâmetros de configuração.
 * @param {string} params.element - O endpoint/recurso desejado (ex: '/spells', '/monsters').
 * @param {string|number|null} [params.id=null] - ID opcional para buscar um item específico.
 * @param {string|null} [params.lang='en'] - Idioma da requisição (ex: 'fr-FR', 'pt-BR').
 * * @returns {{
 * dados: Array|Object,
 * erro: string|null,
 * loading: boolean
 * }} Retorna objeto contendo o estado atual da requisição.
 *
 * @example
 * // Buscando apenas por elemento e idioma (sem precisar passar null para o ID)
 * const { dados, erro, loading } = useElementList({ element: '/monsters', lang: 'pt-BR' });
 */
export const useElementList = ({ element, id = null, lang = null }) => {
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

/**
 * Hook personalizado para buscar a imagem na API do D&D.
 * * @param {Object} element - O objeto que contém o caminho da imagem (.image).
 * @returns {[Object|null, string|null, boolean]} Array contendo [dados, erro, loading].
 */
export const useElementListImage = ({ element }) => {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(!!element?.image);

  useEffect(() => {
    if (!element?.image) return;

    let request = true;

    fetch(`https://www.dnd5eapi.co${element.image}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (request) setDados(data);
      })
      .catch((error) => {
        if (request) setErro(error.message || "Erro ao carregar imagem");
      })
      .finally(() => {
        if (request) setLoading(false);
      });

    // Limpeza dos dados puxados anteriormente.
    return () => {
      request = false;
      setLoading(!!element?.image);
      setErro(null);
    };
  }, [element?.image]);

  return [dados, erro, loading];
};
