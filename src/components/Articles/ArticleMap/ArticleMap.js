import { Wrapper } from "./style";
import "../../../styles/fonts.css";

const ArticleMap = () => {
  return (
    <>
      <Wrapper>
        <div className="left-menu">
          <ul>
            <h4 className="default-h4 underline-on-hover">Informatica</h4>
            <ul>
              <h5 classname="default-h5 underline-on-hover">
                Artificial intelligence
              </h5>
              <h5 classname="default-h5 underline-on-hover">
                computational theory
              </h5>
              <h5 classname="default-h5 underline-on-hover">reti e internet</h5>
              <h5 classname="default-h5 underline-on-hover">
                software engineering
              </h5>
            </ul>
            <h4 className="default-h4 underline-on-hover">Filosofia</h4>
          </ul>
        </div>
        <div className="right-menu">
          <ul>
            <h4 className="default-h4 underline-on-hover">
              politica e attualita'
            </h4>
            <h4 className="default-h4 underline-on-hover">
              blockchain e cryptovalute
            </h4>
            <h4 className="default-h4 underline-on-hover">psicologia</h4>
            <ul>
              <h5 classname="default-h5 underline-on-hover">neuroscienze</h5>
            </ul>
            <h4 className="default-h4 underline-on-hover">economia</h4>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

// Informatica, artificial intelligence, computational theory, reti e internet, software engineering, filosofia, politica e attualita', blockchain e cryptovalute, psicologia, neuroscienze, economia

export default ArticleMap;
