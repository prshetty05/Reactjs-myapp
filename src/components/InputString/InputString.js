import { useState } from "react";

const Inputstring = (props) => {

    const [value,setValue] = useState('');

    const handleChange = (e) => {
        let inputstring = e.target.value;
        setValue(inputstring)
    }


    return(

    <div>
        <input type='text' onChange={handleChange}/>
        <h3>{value}</h3>

    </div>
    );

}

export default Inputstring;