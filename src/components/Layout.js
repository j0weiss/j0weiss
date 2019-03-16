import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";


const Content = styled.section`
  margin: 20px;
`;


const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      <Content>
        {
          children
        }
      </Content>
      <Footer/>
    </>
  )
};

export default Layout;