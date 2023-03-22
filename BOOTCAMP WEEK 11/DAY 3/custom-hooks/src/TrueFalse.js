import { useState } from "react";

const TrueFalse = () => {

    const [isTrue, setIsTrue] = useState(true)

    return(
       <div>
            <button>click</button>
            {
                isTrue ? <p>yes, true</p> :
                <p>no, false</p> 
            }
        
        </div>
    )
}

export default TrueFalse;