import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";
import filterList from "../data/filter";

function Schedule({ data }) {
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState(filterList);
    useEffect(() => {
        setMovies(data);
    }, [data]);
    function changeFilter(id, name) {
        const newFilter = filters.map((filter) => {
            filter.active = false;
            if (id === filter._id) {
                filter.active = true;
            }
            return filter;
        });
        setFilters(newFilter);
        if (id === 1) {
            setMovies(data);
            return;
        }
        setMovies(data.filter((movie) => movie.category === name));
    }
    return (
        <section id="schedule" className="schedule">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">opening this week</h4>
                </div>
                <div className="row">
                    <div className="filters">
                        <ul className="filters">
                            {filters.map((filter) => (
                                <li
                                    key={filter._id}
                                    className={
                                        filter.active ? "active" : undefined
                                    }
                                    onClick={() =>
                                        changeFilter(filter._id, filter.name)
                                    }
                                >
                                    {filter.name}{" "}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    {movies &&
                        movies.length > 0 &&
                        movies.map((movie) => {
                            return <Card key={movie._id} movie={movie} />;
                        })}
                </div>
            </div>
        </section>
    );
}

export default Schedule;
