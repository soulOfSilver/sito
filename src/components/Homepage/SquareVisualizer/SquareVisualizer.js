import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import "../../../standardStyle.css";
import "../../../styles/divs.css";
import "../../../styles/fonts.css";
import "../../../styles/elements.css";

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
        <div className="centered-div">
          <h2 className="medium-h2">
            Leggi gli ultimi articoli del nostro sito
          </h2>
        </div>
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
        <div className="centered-div">
          <h3>
            Non ti basta? Lasciati tentare dalla nostra collezione nella sezione
            <a href="/articles" className="no-format-link fat-link">
              articoli
            </a>
          </h3>
        </div>
      </Wrapper>
    </>
  );
};

export default SquareVisualizer;
