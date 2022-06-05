import { useState } from "react"

function Functioncounter(props){
    const [count,setCount] = useState(0);


    return(
        <div>
            <h1>
                {count}

            </h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    );

    function increase(){
        setCount(count + 1);
        console.log(count);
    }

    function decrease(){
        setCount(count-1);
        console.log(count);
    }
}

export default Functioncounter;