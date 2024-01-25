import React from 'react';
import './App.css';
import {useFetchMovies} from "./hooks/useFetchMovies";
import {Movie} from "./scripts/fetchMovies";

function App() {
  const {loading, movies, totalPages}  = useFetchMovies();

  if (loading){
    return (<div>Loading...</div>)
  }
  return (
    <div className="App">
      {movies.map(({title}:Movie, index:number)=>(
          <div key={index}>{title}</div>
      ))}
      {totalPages}
    </div>
  );
}

export default App;
