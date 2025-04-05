import { useState } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.module.css";
import ArticleList from "./components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./components/SearchForm/SearchForm";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);

  //       const data = await fetchArticlesWithTopic("react");
  //       // const response = await axios.get(
  //       //   "https://hn.algolia.com/api/v1/search?query=react"
  //       // );
  //       // setArticles(response.data.hits);
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //     // console.log(response);
  //   }

  //   fetchArticles();
  // }, []);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
      {/* <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />} */}
    </div>
  );
}

export default App;
