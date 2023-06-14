import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Main />
        <Footer />
      </main>
    </>
  );
};

export default App;
