import React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
  background-color: rgb(40, 42, 66);
  color: #fff;
  padding: 15px 0;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <StyleHeader>
      <h1>Game Release Hub</h1>
    </StyleHeader>
  );
};

export default Header;
