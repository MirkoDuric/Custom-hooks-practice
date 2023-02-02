import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return setData(json.results), console.log({ data });
      })
      .catch((err) => console.log(err.message));
  }, [url]);
  return { data };
}
