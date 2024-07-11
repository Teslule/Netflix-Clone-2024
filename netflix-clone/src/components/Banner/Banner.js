import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";



const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request?.data.results[
          Math.floor(Math.random()*request.data.results.length)
        ]
      );
      return request;
    }
     fetchData();
  }, []);

   function truncate(str, n) {
     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }

  return (
    <div
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      backgroundPosition: "center center",
    }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />

    </div>
  );
    //   (async () => {
    //     try {
    //       const request = await axios.get(requests.fetchNetflixOriginals);
    //       setMovie(
    //         requests.data.results[
    //           Math.floor(Math.random() * request.data.results.length)
    //         ]
    //       );
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   })();
    // }, []);
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals);
  //     setMovie(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length - 1)
  //       ]
  //     );
  //     return request;
  //   }
  //   fetchData();
  // }, []);
  // console.log(movie);
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
  // return (
  //   <div
  //     className="banner"
  //     style={{
  //       backgroundSize: "cover",
  //       backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //     }}
  //   >
  //     <div className="banner__contents">
  //       <h1 className="banner__title">
  //         {movie?.title || movie?.name || movie?.original_name}
  //       </h1>
  //       <div className="banner__buttons">
  //         <button className="banner__button play"> Play </button>
  //         <button className="banner__button"> My List </button>
  //       </div>
  //       <h1 className="banner__description">
  //         {truncate(movie?.overview, 150)}
  //       </h1>
  //     </div>
  //     <div className="banner--fadeBottom" />
  //   </div>
  // );
};

export default Banner;
