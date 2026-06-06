import { useEffect, useState } from "react";
import { getElements } from "../dndAPI";

export const useElementList = (id, element) => {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let request = true;

    getElements(id, element)
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
          setErro(error.message || `Erro ao carregar ${element}`);
        }
      })
      .finally(() => {
        if (request) {
          setLoading(false);
        }
      });

    return () => {
      request = false;
      setLoading(true);
      setErro(null);
    };
  }, [id, element]);

  return { dados, erro, loading };
};
