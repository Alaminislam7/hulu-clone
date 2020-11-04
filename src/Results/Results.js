import React, { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import axios from "../axios";
import FlipMove from "react-flip-move";
function Results({ selectedOption }) {
  // const [movies,setMovies] =useState(["1","2"]);//give the 2 result
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //runs this code once when the results component loads/mounts
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
