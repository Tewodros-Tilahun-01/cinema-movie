import React, { useState, useEffect } from 'react'
import Header from "./Header";
import Schedule from './Schedule'
import Trend from './Trend'
import Hero from "./Hero";
import Blog from './Blog';
import Footer from './Footer';
import SearchPage from './SearchPage';
import BackButton from '../components/BackButton';
import "./mainpage.css"
import BackToTopBtn from '../components/BackToTopBtn';
function MainPage() {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  const [searchOn, setSearchOn] = useState(false)
  const [scroll, setScroll] = useState(0)
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/data/movieData.json");
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setMovies(data);
  }, [data]);
  function filter(event) {
    const searchword = event.target.parentNode.parentNode.firstChild.value;
    if (searchword === "") {
      setSearchOn(false);
    }
    else {
      const newData = data.filter((movie) => (movie.title.toUpperCase().startsWith(searchword.toUpperCase()))
      );
      setMovies(newData)
      setSearchOn(true)
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);

    });
    return (
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      })
    )
  }, [scroll])
  return (
    <>
      <Header filter={filter} scroll={scroll} />
      {
        searchOn && <BackButton setSearchOn={setSearchOn} />
      }
      {searchOn ? <SearchPage movies={movies} /> :
        <main>
          <Hero />
          <Schedule />
          <Trend />
          <Blog />
          <Footer />
          <BackToTopBtn scroll={scroll} />
        </main>}
    </>

  )
}

export default MainPage