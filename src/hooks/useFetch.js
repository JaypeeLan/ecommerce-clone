import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, value) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("An error occured.", err);
        setIsLoading(false);
      });
  }, value || []);

  return { data, error, isLoading };
};

export default useFetch;
