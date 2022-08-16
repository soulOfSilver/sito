import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 20%;

  ul {
    h5 {
      font-size: 17px;
      font-weight: 400;
    }

    .underline-on-hover {
      /* display: inline-block; */
      position: relative;
    }

    .underline-on-hover:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #0087ca;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .underline-on-hover:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
