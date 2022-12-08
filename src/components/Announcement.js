import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: red;
  text-align: center;
  font-size: 14px;
`;

const Announcement = () => {
  return <Container> Get all products at 20% off today only!!</Container>;
};

export default Announcement;
