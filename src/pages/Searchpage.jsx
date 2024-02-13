import React, { useState, useEffect } from 'react'
import Header from "./Header";
import SearchResult from './SearchResult';
import Main from './Main';
import BackButton from '../components/BackButton';
function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);
  const [searchOn, setSearchOn] = useState(false)
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
  return (
    <>
      <Header filter={filter} />
      {
        searchOn && <BackButton setSearchOn={setSearchOn} />
      }
      {searchOn ? <SearchResult movies={movies} /> : <Main />}
    </>

  )
}

export default SearchPage