import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// in this component we will make a second API call to the specific movie endpoint using  the value in movie ID.
const MovieDetails = () => {

    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState({});

    useEffect(() =>{
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: 'b035ed89aea03d801ec92d8309751f87'
            }
        }).then(response => {
            setOneMovie(response.data);
        })
    },[])

  return (
    <div className="poster">
        <div className="description">
            <h2>{oneMovie.original_title}</h2>
            <h3>{oneMovie.tagline}</h3>
            <p>{oneMovie.overview}</p>
        </div>
        <div className="poster-image">
            <img 
              src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
              alt={`Poster for $
              {original_title}`}
              />
        </div>
    </div>
  )
}

export default MovieDetails;