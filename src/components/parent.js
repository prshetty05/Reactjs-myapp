import React,{Component} from "react";
import Child from './child.js'

class Parent extends Component{

    render(){
        return(
        <div>
            <Child fruit='mango'>Hello World</Child>
            <Child fruit='kiwi'>Hello Java</Child>
            <Child fruit='orange'>Hello orange</Child>

        </div>
 
        );
    }

}

export default Parent;