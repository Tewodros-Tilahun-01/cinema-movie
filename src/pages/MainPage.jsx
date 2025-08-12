import React, { useState, useEffect } from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import Trend from "./Trend";
import Hero from "./Hero";
import Blog from "./Blog";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import BackButton from "../components/BackButton";
import "./mainpage.css";
import BackToTopBtn from "../components/BackToTopBtn";
import { apiService } from "../services/api";

function MainPage() {
    const [movies, setMovies] = useState([]);
    const [data, setData] = useState([]);
    const [searchOn, setSearchOn] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const resData = await apiService.getMovies();
            setData(resData);
        } catch (error) {
            console.log("Error:", error);
            setError("Failed to load movies. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        setMovies(data);
    }, [data]);

    function filter(event) {
        let searchword = "";
        if (event.keyCode === 13) {
            searchword = event.target.value;
            findMovie(searchword);
        } else if (event.target.name === "search-outline") {
            searchword = event.target.parentNode.parentNode.firstChild.value;
            findMovie(searchword);
        }
    }
    function findMovie(searchword) {
        if (searchword === "") {
            setSearchOn(false);
        } else {
            const newData = data.filter((movie) =>
                movie.title.toUpperCase().startsWith(searchword.toUpperCase())
            );
            setMovies(newData);
            setSearchOn(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY));
        return window.removeEventListener("scroll", () => {
            setScroll(window.scrollY);
        });
    }, [scroll]);
    return (
        <>
            <Header filter={filter} scroll={scroll} />
            {searchOn && <BackButton setSearchOn={setSearchOn} />}
            {searchOn ? (
                <SearchPage movies={movies} />
            ) : (
                <main>
                    {loading && (
                        <div className="text-center" style={{ padding: '50px' }}>
                            <p>Loading movies...</p>
                        </div>
                    )}
                    {error && (
                        <div className="text-center" style={{ padding: '50px' }}>
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    )}
                    {!loading && !error && (
                        <>
                            <Hero data={data} />
                            <Schedule data={data} />
                            <Trend slides={data} />
                            <Blog />
                            <Footer />
                            <BackToTopBtn scroll={scroll} />
                        </>
                    )}
                </main>
            )}
        </>
    );
}

export default MainPage;
