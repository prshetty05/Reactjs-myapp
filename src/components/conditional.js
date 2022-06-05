import React,{Component} from "react";

class Conditional extends Component{

        constructor(props){
        super(props);
        this.state = {
            flag: false
        }
    }

    render(){

        return(
            <div>
                <h1>Hello JS</h1>

                <h1>Hello Java</h1>
            </div>

        )
    }

}