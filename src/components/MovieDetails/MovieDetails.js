import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Trailer from "../Trailer";
const MovieDetails = ({ movies, history }) => {
  const { idmovie } = useParams();

  const [movie, setMovie] = useState({});

  const findMovie = () => {
    setMovie(movies.find((el) => el.id === idmovie));
    console.log(movie);
  };

  useEffect(() => {
    findMovie();
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/">Retour</Link>
      <h1>{movie.title}</h1>
      <h1>Trailer</h1>
      <Trailer trailerId={movie.trailer} />
      <p>{movie.desc}</p>
    </div>
  );
};

export default MovieDetails;
