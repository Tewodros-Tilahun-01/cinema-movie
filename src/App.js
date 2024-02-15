import React from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.css";
//import swiper styles
import "swiper/css";
import "./App.css";

import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <main>
      <MainPage />
    </main>
  );
};

export default App;
