import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";

const SquareVisualizer = ({ data }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (data) {
      var tmp = [];
      var j = data.length;
      for (var i = 0; i < 5; i++) {
        if (data[j]) {
          tmp.push(data[j]);
        }
        j--;
        if (j < 0) {
          break;
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
              <img src={article.thumbnail} alt="" width="350px" />
              <div className="article-summary">
                <Link className="no-format-link" to={`/articles/${article.id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <div className="tiny-text">
                  <p>
                    {article.author} &#x2022; {article.read_time} min
                  </p>
                  <p>{article.abstract}</p>
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
