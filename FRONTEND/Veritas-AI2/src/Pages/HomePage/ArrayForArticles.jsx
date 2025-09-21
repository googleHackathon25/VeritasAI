import { useEffect, useState } from "react";
import axios from "axios";

function useNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=ab1827b1bdc34c06bd3ce71f0a15048b"
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  return articles; // ✅ return just the array
}

export default useNews;
