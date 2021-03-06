import React from "react";
import { Route, Routes } from "react-router";
import { Container, Grid } from "@material-ui/core";
import Info from "./components/Info/Info";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const style = {
  paddingTop: " 40px",
};
const App = () => {
  return (
    <div style={style}>
      <Container>
        <Grid container spacing={2} justifyContent="">
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Info />
          </Grid>
          <Grid item xs={12} lg={8} sm={12} md={8}>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} exact />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </Container>
     </div>

  );
};

export default App;
