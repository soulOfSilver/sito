import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fb } from "../../firebase";
import HTMLReactParser from "html-react-parser";
import Menu from "../Menu/Menu";
import { Wrapper } from "./style";

const Article = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState("");
  const [data, setData] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");

  const dataRetrieve = async () => {
    const db = fb.firestore();
    const articleRef = db.collection("articles");
    const snapshot = await articleRef.where("id", "==", id).get();

    if (snapshot.empty) {
      console.log("Errore durante il ripescaggio delle informazioni");
      return;
    } else {
      snapshot.forEach((article) => {
        console.log(article.data());
        setAuthor(article.data().author);
        setData(article.data().body);
        setThumbnail(article.data().thumbnail);
        setTitle(article.data().title);
      });
    }
  };

  useEffect(() => {
    dataRetrieve();
    return;
  }, []);

  return (
    <Wrapper>
      <h1>A boring Site</h1>
      <Menu />
      <div className="body">
        <div className="internal-body">
          <h2>{title}</h2>
          <h4>{author}</h4>
          <div className="thumbnail">
            <img src={thumbnail} alt="" className="big-image" />
          </div>
          <div>{HTMLReactParser(data)}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Article;
