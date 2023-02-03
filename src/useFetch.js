import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          return setData(json.results);
        });
    } catch (err) {
      return setError("We have an error");
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { data, error, loading };
}
