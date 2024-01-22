import React from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.css";
//import swiper styles
import "swiper/css";
import "./App.css";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Main from "./pages/Main";
const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Main />
    </main>
  );
};

export default App;
