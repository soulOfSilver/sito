import { Wrapper } from "./style";
import "../../standardStyle.css";

const Menu = () => {
  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Articoli</a>
          </li>
          <li>
            <a href="_">Podcast</a>
          </li>
          <li>
            <a href="_">Mission</a>
          </li>
          <li>
            <a href="_">Chi siamo</a>
          </li>
          <li>
            <a href="_">Contatti</a>
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Menu;
