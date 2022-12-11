// this will be the form that allows the user to search for their city.

// (same as props.handlechange)
const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="userSearch">Please enter your city name</label>
            <input
             onChange={props.handleChange} 
             type= "text" 
             id="userSearch"
             value={props.userInput}

             />
            <button type="submit">Search</button>

        </form>
    )
}

export default Form;