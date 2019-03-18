import React from "react";
import styled, {ThemeProvider} from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";


/* Colors from https://colorhunt.co/palette/22272 */
const theme = {
  primaryColor: "#3f72af",
  darkColor: "#112d4e",
  lightColor: "#dbe2ef",
  backgroundColor: "#f9f7f7"
};

const invertedTheme = {
  primaryColor: "#f9f7f7",
  darkColor: "#3f72af",
  lightColor: "#dbe2ef",
  backgroundColor: "#112d4e"
};

const StyledLayout = styled.div`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.primaryColor};
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
    {/*<ThemeProvider theme={invertedTheme}>*/}
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