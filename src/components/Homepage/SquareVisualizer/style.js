import styled from "styled-components";

export const Border = styled.div`
  border: 0.5px solid black;
  width: 350px;
  height: 450px;
  margin: 0 150px;

  .image {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .square {
    margin: 5px;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 13px;
  }
`;

export const Wrapper = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
`;
