import React from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.css";
//import swiper styles
import "swiper/css";
import "./App.css";

import SearchPage from "./pages/Searchpage";

const App = () => {
  return (
    <main>
      <SearchPage />
    </main>
  );
};

export default App;
