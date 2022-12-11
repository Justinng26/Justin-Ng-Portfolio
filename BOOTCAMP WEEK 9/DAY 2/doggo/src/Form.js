import { useState } from "react";

const Form = (props) => {

    

    // we create a piece of state to hold the user's selection as they switch between different drop down options(this will be updated onChange of the select drop-down)
    const [userChoice, setUserChoice] = useState("")

    // .target accesses the <select> element because 'handleChange' is inside it.
    const handleChange = (event) => {
        setUserChoice( event.target.value );
    }

    // pass the definition of THIS function to onSubmit. need to call getDirection from props, also need to pass it an argument ie users's choice. that isnt possible if we want to pass the geDirections functions to the onSubmit as  a handler, since we need to add round bracketts to pass argumentw which means that we woule be calling the fcuntion instead of passing the function, instead define a new function, handleSubmit, this fucntion receives the event object since its an event handler and then calls getDirection function ofr us, passit it the usersChoice argument, - this way we can prevent default in out App.js AND use the userChoice to filter our pups. and then pass that handleSubmit definition to the onSubmit instead.
    const submitHandler = (event) => {
        props.getDirection(event, userChoice);
    }

    return(
        <form onSubmit={submitHandler}>
           <label htmlFor="photoOrientation">Show me photos that are:</label>
            <select 
            id="photoOrientation" 
            name="photoOrientation"
            onChange={ handleChange }
            value ={ userChoice }
            >

                <option value="" disabled>Pick one:</option>
                <option value="square">square</option>
                <option value="landscape">landscape</option>
                <option value="portrait">portrait</option>
            </select>
        <button type="submit">Give me photos!</button>
        </form>
    )
}


export default Form;

// previously, when handling forms in js we would wait for the user to submit the form, when they submitted, we would run through the page, grabbing the values of the various inputs they had filled out. we would then use those values (send them to a server, use them for an api call et.)
    // eg . document.querySelector('input[type=text]').val();
    // then pass userChoice to whatever function we want to run next, or pass it to fetch () etc.
// we need another way to capture the value that the user writes or selects in our form inputs. React gives us an onChange event listener that will fire every time the value in a given input changes ie every time a letter is added or deleted from a text input, or every time a user switches between options in a drop-down etc.
    // this solves our problem because this is still JS and in Js whenever the event fires, JS will pass an EVENT OBJECT to the handler function. This object includes all kinds of info about the event, and specifically about the element where the event occurs. that gives us access to the current state of that elements, which means we can get whatever value it holds that second
        // thats how we get the input values in react - we get them using the event object eachtime they change, and then we have value stored in state, which means that eventually the user submits the form, we don't have to go get the input and their values from the page, we already have them stored in our JS (in state) and we can just grab them from those staeful variables.