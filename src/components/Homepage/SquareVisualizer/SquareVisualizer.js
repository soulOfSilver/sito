import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";

const SquareVisualizer = ({ data }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (data) {
      var tmp = [];
      for (var i = 0; i < 5; i++) {
        if (data[i]) {
          tmp.push(data[i]);
        }
      }
      setArticles(tmp);
    } else {
      setArticles([]);
    }
    return;
  }, [data]);

  return (
    <>
      <Wrapper>
        {articles.map((article) => {
          if (!article) {
            return;
          }
          return (
            <div className="article-element" key={article.thumbnail}>
              <img src={article.thumbnail} alt="" width="300px" />
              <div className="article-summary">
                <Link className="no-format-link" to={`/articles/${article.id}`}>
                  <h3>{article.titolo}</h3>
                </Link>
                <div className="tiny-text">
                  <p>{article.autore}</p>
                  <p>{article.sommario}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default SquareVisualizer;
