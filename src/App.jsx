import { useState, useMemo, useRef, useEffect } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.module.css";
import ArticleList from "./components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./components/SearchForm/SearchForm";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Player from "./components/Player/Player";
import ComponentA from "./components/ComponentA/ComponentA";
import ComponentB from "./components/ComponentB/ComponentB";
import MyComponent from "./components/MyComponent/MyComponent";
import { UserMenu } from "./components/UserMenu/UserMenu";

// const memoizedValue = useMemo(() => {
//   return a + b;
// }, [a, b]);

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
    } catch {
      // } catch (error) {
      // console.log(error);
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

  // const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  // const [query, setQuery] = useState("");

  const [planets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query] = useState("");
  const [clicks, setClicks] = useState(0);

  // const filteredPlanets = planets.filter((planet) => planet.includes(query));
  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  const [value, setValue] = useState(0);
  const btnRef = useRef();
  const valueRef = useRef(0);

  console.log("App: ", btnRef.current);

  // useEffect(() => {
  //   console.log("useEffect: ", btnRef.current);
  // });

  useEffect(() => {
    console.log(valueRef.current);
  });

  //  const handleClick = () => {
  //    console.log("handleClick: ", btnRef.current);
  //  };

  const handleClick = () => {
    valueRef.current += 1;
  };

  return (
    <>
      <h1>Lesson 2</h1>

      {/* Хук useMemo */}
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
      {/* Хук useRef */}
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>

      <button onClick={handleClick}>Click to update ref value</button>

      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />

      <ComponentA />
      <ComponentB />
      <MyComponent />

      <div>
        <h1>Context example</h1>
        <UserMenu />
      </div>

      <h1>Lesson 1</h1>
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
    </>
  );
}

export default App;
