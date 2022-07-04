import styled from "styled-components";

export const Border = styled.div`
  border: 0.5px solid black;
  width: 750px;
  height: 300px;
  margin: 0 150px;

  .image {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .square {
    margin: 5px;
  }

  img {
    width: 500px;
  }

  p {
    font-size: 13px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
