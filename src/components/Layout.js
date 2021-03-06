import React from "react";
import styled, {ThemeProvider} from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { theme } from "../theme";


const StyledLayout = styled.div`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  flex: 1;
  margin: 20px;
`;

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Navbar/>
        <Content>
          {
            children
          }
        </Content>
        <Footer/>
      </StyledLayout>
    </ThemeProvider>
  )
};

export default Layout;