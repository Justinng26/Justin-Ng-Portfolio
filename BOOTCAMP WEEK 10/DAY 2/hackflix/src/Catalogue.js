import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Catalogue = () => {
 
    // want to call the API when the page loads but not again if there's a re-render of the page.
  // this piece of state holds the data that we are getting back from the API.

     const [movies, setMovies] = useState([]);

     useEffect(() => {

        axios({
          url: "https://api.themoviedb.org/3/discover/movie",
          params: {
            api_key: 'b035ed89aea03d801ec92d8309751f87',
            include_adult: false,
            include_video: false,
            primary_release_year: 1997
          }
        }).then(response => {
          console.log(response.data.results);
          setMovies(response.data.results);
        })
    
      }, [])

    return (
        <section>
          <ul className='catalogue'>
            {
              movies.map(singleMovie => {
                return(
                   <li key={singleMovie.id}>
                    <Link to= {`/movie/${singleMovie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} 
    
                            alt={`Poster for ${singleMovie.original_title}`} />
                    
                    </Link>
                     
                   </li>
                )
              })
            }
          </ul>
        </section>
    
  )
}

export default Catalogue;