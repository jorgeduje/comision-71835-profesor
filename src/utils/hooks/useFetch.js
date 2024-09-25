import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

// useFetch("https://jsonplaceholder.org/posts");

// const { data, error, isLoading } = useFetch(
//   "https://jsonplaceholder.org/users"
// );

// useFetch("https://jsonplaceholder.org/comments");

// componente

// // useFetch()
// const useState = ( parametro )=>{
//     return [variable= paremetro, funcion ]
// }

// const  [] =  useState(15)
