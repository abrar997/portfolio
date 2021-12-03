import React, { Fragment } from "react";
import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Info from "./components/Info/Info";
import Resume from "./components/Resume/Resume";
import { Route, Routes } from "react-router";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} lg={3} style={{ background: "#eeee" }}>
            <Info />
          </Grid>
          <Grid item xs={12} lg={8} style={{ background: "#eee" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} exact />

              <Route path="/Resume" element={<Resume />}  />
              <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
