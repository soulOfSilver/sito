import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f8f9d7;
  margin-bottom: 100px;

  .article-element {
    border: 0.5px solid black;
    display: flex;
    padding: 5px;
    margin: 15px 20% 15px 20%;
  }

  .article-summary {
    margin-left: 50px;
    background-color: #c4d7e0;
  }

  .tiny-text {
    p {
      font-size: 10px;
    }
  }

  .fat-link {
    margin-left: 4px;
    font-weight: 500;
  }
`;
