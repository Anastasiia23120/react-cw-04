// import css from "./ArticleList.module.css";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectId, url, title }) => (
      <li key={objectId}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
