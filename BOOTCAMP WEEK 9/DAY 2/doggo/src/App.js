
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form.js';
import './App.css';


function App() {

  // set an empty array first, because .map will return an array.
  const [allPups, setAllPups] = useState([]);
  const [orientedPups, setOrientedPups] = useState([]);

  // 1. Call useEffect: (use a CBF, add dependancy array so it runs once)
  useEffect( () => {
    // 2. invoke axios: (returns a promise so use 1 .then)
      axios({
        // 3. look up how axios works by looking at docs.     Axios always makes the API call.
          url: "https://api.unsplash.com/search/photos",
          method: "GET",
          dataResponse: "json",
          params: {
            client_id: "umteXz05fepLWaDMu_Yu1DojetM-vqfROB2kZ2JmJq4",
            query: "puppies",
            per_page: 30,
          },
      })
          // 4. Pass .then a cbf. to execute when we make an API call. 
          .then( (response) => {
             console.log(response.data.results);

            // 5. Return a new array using .map, pass it a CBF.
            const arrayWithOrientations = response.data.results.map((pupObj) => {
              // 6. We loop through our array, adding a new array with the same objects, but each now has a property with its own respective photo orientation. Get the ratio of width to height.
                const ratio = pupObj.width / pupObj.height;

                // 7. lets assume the orientation is square by default, and then we will change it if needed:
                let whichShape = "square";

                // 8. use an if statemnt to check if the orientation should be landscape or portrait instead. (can use IF because we're above the return)
                if(ratio > 1.35){
                  whichShape = "landscape";
                } else if (ratio < 0.75) {
                  whichShape = "portrait";
                }

                // 9.create the orientation property, then assign it 'whichShape' value.
                pupObj.orientation = whichShape;

                // 10. return the object with its new orientation property, which .map will put into our new array for us:
                return pupObj;
            });
            
            // 11. Finally, put our new array, with objects that have 'orientation' properties, into our allPups state.
            setAllPups( arrayWithOrientations );
          });

  }, []);

  // passing argument to 'Form' component, call it there lets us pass it an argument - specifically the user's choice of the photo orientation.
  // this function actually recieves two args, the event object and the user's choice so that we can handle all our form submission stuff here in one place, including preventing the default submit behaviour, and filtering our pups based on user choice of orientation.
  const chooseWoofers = (event, userPick) => {
    event.preventDefault();
    

    // we have the users orientation in this function (userPick). use filter on allPups array and get back a new Array of just pups orientated the way the user wants.
    // first we clone our steful allPups array, since we want to be careful to never mutate our stateful values directly
    const clonePups = [...allPups];

    // filter will execute a callback for each item in our array. IF that cbf returns true, it will put that into the new array. if it returns false, then it will skip over that item and move onto the next one - meaning we need a condition that returns True for those items we want to keep and put it in out new array (we need to check if the orientation does indeed match the userPick)
    const orientedDoggos = clonePups.filter( (dogObject) => {
      return dogObject.orientation === userPick;

    });

    // we take our filtered list of oriented dog photos and set it into state, which will trigger a re-render, putting our pups on the page (once we set our JSX)
    setOrientedPups(orientedDoggos);
    
  }

  return (
    <div className="App">
      <header>
        <h1>dogs</h1>
      </header>
      {/* call the form compoennt and pass it our chooseWoofers function as a prop, so that it can be called in the component and used to pass the user's choice back up to this component (app.js) as an argument*/}
      <Form getDirection= {chooseWoofers} />
    </div>
  );
}

export default App;


// PSEUDO CODE

// When my App.js mounts, go get a bunch of puppy photos from the unsplash API, and tag them each by orientation. 
    // to make this API request we will use AXIOS. (use one .then)
    // we want to make this API call the moment that our component mounts, and then we're done. we don't need to do it again. So, that means we need to make our API call in a USE EFFECT with an empty DEPENDANCY ARRAY
    // once we get our data, we need to organise it to the needs of our app. In this case, that means tagging every image as square, portrait or landscape (we can work this out by checking the ratio of width to height.)

    //  we need to put it in USE STATE. That way it will persist even if my component renders again and again. If I were to put it in a regular, locally-scoped- variable ie. a variable scoped to  my component function, then each time the function is recalled, it would just rese that variable and we would have nothing.

// Have a form on the page which allows the user to select if they want photos oriented landscapes, portrait or squares. When the user submits that form, grab their selection of orientation and use that to narrow down my dataset to just those photos. 
    // lets put this form in its own component (exercise) to not overcrowd App.js. and if this was a collab project it means different people can work on different bits without code conflicts. 
    // this means that while most of the form logic will take place in its own component, we will then need to get the user's selecton UP from the form component back to App.js.
        // we can pass a function down as a prop from app.js to the form component. Then when we call the function in the form component, we can pass it the user's selection as an argument... which will be receieved up in APP.js.
      // once we receive the users data orientation preference in App.js we will use that info to FILTER our original list of photos to a smaller subset of photos oriented the way the user wants.
        // when we have finished filtering we will want to put the photos somewhere, such that they will then rendered to the page. We can put them into STATE. That will trigger a re-render, whihc will let us return new JSX with our photos on the page. 

// write our jsx such that we get our narrowed down dataset ie a list of photos in the orientation of the user's choice we will have them MAP to the page.
  // we will write this MAP in its own component, just to keep it clean, which means we will pass our list of filtered photos down as a PROP to this component.
  // this component will also contain conditional rendering info to account for whether or not we have a list to show. 
