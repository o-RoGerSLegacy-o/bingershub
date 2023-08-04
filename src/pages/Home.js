import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => {
            return (
              <Link to={`/movie/${movie.id} `}>
                <div className="posterImage">
                  <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  ></img>
                </div>
                <div className="posterOverlay">
                  <div className="posterImageTitle">
                    {movie ? movie.original_title : ""}
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
