import { useState } from "react";
import axios from "axios";

function usePost() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(url, apiData);
      setData(responseData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { error, loading, data, post };
}

export default usePost;
