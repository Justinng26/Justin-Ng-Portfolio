// import  axios  from 'axios';
import './App.css';
// import { useEffect, useState } from 'react';
import Catalogue from './Catalogue.js';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails.js';


// create an app that displays 20 movies on the page.
// the user can click on a movie and see details of that movie.

// Phase 1:
// structuring our initial API call.
// Displaying the results on the page.

// Phase 2:
// Implement React Router to allow the ser to click an image (movie poster) and get more details on the movie

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Hackflix</h1>
      </header>

    <Routes>
       <Route path="/" element = {<Catalogue />} />
       <Route path= "/movie/:movieID" element ={<MovieDetails />} />
    </Routes>
     
      
    </div>
  );
}

export default App;
