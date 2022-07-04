import styled from "styled-components";

export const Wrapper = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  li a {
    display: block;
    text-align: center;
    padding: 14px 40px;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 300;
  }
`;
