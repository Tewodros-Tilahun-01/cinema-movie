import React, { useState, useEffect } from 'react';

// import swiper react componetnts
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules"

import "./trend.css";
import TrendCard from '../components/TrendCard';
function Trend() {
    const [slides, setSlides] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/data/movieData.json");
            const data = await res.json();
            setSlides(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section id="trend" className='trend'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">coming soon</h4>
                </div>
                <div className='row'>
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,

                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },

                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,

                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className='trendSwiper'
                    >{slides && slides.length > 0 && slides.map(slide => {
                        return (
                            <SwiperSlide key={slide._id}>
                                <TrendCard slide={slide} />
                            </SwiperSlide>
                        )
                    })}

                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Trend