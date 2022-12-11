import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Esther from './Esther.js';
import Joe from './Joe.js';
import ErrorPage from './ErrorPage.js';

const MyMovies = () => {
  const { movieId } = useParams();
  return(
    <p>My movie is called {movieId} </p>
    
  )
}

const Apology = () => {
  const { name } = useParams();
  return(
    <div>
      <h1> Dear {name} </h1>
      <p> soz </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>this is my website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path= "/" element ={ <Home />}  />

        <Route path= "/about" element= {<About />}>
          <Route path=":movieId" element = { <MyMovies />} />
        </Route>

        <Route path= "/contact/" element={<Contact />}>

            <Route path= "esther" element ={<Esther />} />
            <Route path= "joe" element ={<Joe />} />
        </Route>

        <Route path="*" element = { <ErrorPage />} />
          <Route path = "/apology/:name" element = { <Apology /> }  />
      </Routes>
    </div>
  );
}

export default App;
