import React, { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./lotties/loadingAnimation.json";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
const axios = require("axios").default;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  //#region ///INITIALIZE MOVIES///
  const fetchMovieHandler = useCallback(async () => {
    ///////////AFTER ASYNC USE ///////////
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios({
        method: "get",
        url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        //url: "https://swapi.dev/api/films",
      });
      if (res.data) {
        ////WORK WITH FIREBASE DATABASE////
        const transformedDataMovies = [];

        for (const key in res.data) {
          transformedDataMovies.push({
            id: key,
            title: res.data[key].title,
            openingText: res.data[key].openingText,
            releaseDate: res.data[key].releaseDate,
          });
        }
        console.log(transformedDataMovies);
        setMovies(transformedDataMovies);

        ////BEFORE WORK WITH FIREBASE DATABASE////
        // const transformedDataMovies = res.data.results.map((movieData) => {
        //   return {
        //     id: movieData.episode_id,
        //     openingText: movieData.opening_crawl,
        //     releaseDate: movieData.release_date,
        //     ...movieData,
        //   };
        // });
        // console.log(transformedDataMovies);
        // setMovies(transformedDataMovies);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      setError(error.toJSON().message);
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }

    ///////////BEFORE ASYNC USE /////////////
    // axios({
    //   method: "get",
    //   url: "https://swapi.dev/api/films",
    // }).then((res) => {
    //   //console.log(res.data.results); <<< movies_list
    //   //setMovies(res.data.results); <<< you can't set this because
    //   ////props that require in Movie component didn't take a key like
    //   ////a result that return from API
    //   //// then you need to tranformed a data first using .map function
    //   const transformedDataMovies = res.data.results.map((movieData) => {
    //     return {
    //       id: movieData.episode_id,
    //       openingText: movieData.opening_crawl,
    //       releaseDate: movieData.release_date,
    //       ...movieData,
    //     };
    //   });
    //   console.log(transformedDataMovies);
    //   setMovies(transformedDataMovies);
    // });
  }, []);

  useEffect(() => {
    fetchMovieHandler();
    return () => {};
  }, [fetchMovieHandler]);
  //#endregion ///END OF - INITIALIZE MOVIES///

  //#region ///ADDING MOVIES///
  const addMovieHandler = async (movie) => {
    console.log(movie);
    setIsLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        data: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      });

      if (res.data) {
        console.log(res.data);
        fetchMovieHandler();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.toJSON().message);
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };
  //#endregion ///END OF - ADDING MOVIES///

  //#region ///CONTENT HANDLER///
  let content = <p>Found no movies.</p>;

  error && (content = <p>{error}</p>);

  movies.length > 0 && (content = <MoviesList movies={movies} />);

  isLoading &&
    (content = (
      <Lottie
        animationData={loadingAnimation}
        style={{ width: "50%", margin: "auto" }}
      />
    ));

  //#endregion ///END OF - CONTENT HANDLER///

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
