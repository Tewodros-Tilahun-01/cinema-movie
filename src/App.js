import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const App = () => {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
};

export default App;
