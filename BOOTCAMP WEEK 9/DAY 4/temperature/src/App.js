
import {useState} from 'react';
import './App.css';
import Form from './Form.js';


// build an app that lets the user search for a city and get the current temperature. 
// create a form with a text input.
// when the form is submitted, get the user's input value and use it to call the API.
// get back the API data and display the city and temperature on the page. 
// error handling: what if the user inputs an empty string? what if there is a typo or no data returns from the API.

// phase 1: get the data from the API.
// Phase 2: create the form and connect it to the API.
// Phase 3: Error handling.
    // if the user enters an empty string
    // if the user types in a city with a typo/ doesn't exist.
function App() {

  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');
  // create a piece of state to hold the users input:
  const [userInput, setUserInput] = useState('');
  // this piece of state sets whether or not there was an error when the API call was made.
  const [searchError, setSearchError] = useState(false)

  // create a piece of state

  const getTemp =  async () => {
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')

    url.search = new URLSearchParams({
      appid: '0d355a186c0f05fcf19f76faf33c6791',
      q: userInput,
      units: 'metric',
    });

    try{
    const res = await fetch (url)
    const data = await res.json()
    // console.log(data);
    // console.log(data.name)
    // temperature rounded to the nearest whole number
    console.log(data.main.temp.toFixed())

    setTemp(data.main.temp.toFixed());
    setCity(data.name);

    // check if searchErro is tru
    // if it is, set it to false
    if (searchError) {
      setSearchError(false)
      }
    }
 
    catch(error){
      // if the API returns an error, we update our searchError state to be true (it's 'true' we have an error)
      setSearchError(true)
   }
   
    
  }

  

  // a handleChange function that will listen for when the user types and capture that value
  // pass this function to Form.js through props
  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  // a handleSubmit that handles the form submission and will call our getTemp function
  const handleSubmit = (event) => {
    event.preventDefault();
    getTemp();
  }

  return (
    <div className="App">
      <h1>temp</h1>
      <Form 
      handleChange={handleChange}
      userInput ={userInput}
      handleSubmit={handleSubmit}
      
      />
      {/* use a ternary to check if there is an error - if there is, show an error, if not, show the temperature */}
      {
        searchError ? <p>sorry, try again</p> : 
        <p> the temperature in {city} is {temp}&deg; celcius. </p>
      }
       {/* the temperature in __ is [number] celcius */}
     
    </div>
  );
}

export default App;
