import { Wrapper, Intro } from "./style";
import "../../standardStyle.css";
import { useState, useEffect } from "react";
import { fb } from "../../firebase";
import SquareVisualizer from "./SquareVisualizer/SquareVisualizer";
import "../../styles/fonts.css";
import Header from "../Header/Header";

const Homepage = () => {
  const [bloglist, setBloglist] = useState([]);
  const db = fb.firestore();
  const Blogs = db.collection("articles");

  useEffect(() => {
    const unsubscribe = Blogs.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBloglist(data);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <div className="intro-background">
          <Intro>
            <h2 className="default-h2">Benvenuto su aboringsite.com</h2>
            <p>
              A Boring Site è il sito web di informazione che tratta di scienza
              e attualità, nato per combattere la concezione dell’informazione
              di qualità accessibile soltanto a pochi. I contenuti del sito sono
              disponibili nella sezione articoli.
              <br />
              <br />
              Nell'apposita sezione puoi ascoltare gli episodi del nostro
              podcast, A Boring Podcast, in cui discutiamo di grandi temi,
              prevalentemente di ambito scientifico.
              <br />
              <br />
              Siamo due studenti universitari di Milano che vogliono promuovere
              questo progetto attraverso una piattaforma di informazione
              completamente gratuita e open source.
              <br />
              <br />
              Se desideri collaborare con noi e contribuire ad ampliare i
              contenuti del sito scrivici nel form che trovi nella sezione
              contatti.
            </p>
          </Intro>
        </div>
        <SquareVisualizer data={bloglist} />
      </Wrapper>
    </>
  );
};

export default Homepage;
