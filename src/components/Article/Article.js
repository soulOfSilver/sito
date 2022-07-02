import { useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { fb } from "../../firebase";

const Article = () => {
  const [articleID, setArticleID] = useSearchParams();
  articleID.get("article");

  useEffect(async () => {
    const db = fb.firestore();
    const docRef = doc(db, "articles", articleID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    return;
  }, []);
};

export default Article;
