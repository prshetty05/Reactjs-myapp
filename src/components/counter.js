import React,{Component} from "react";
import DisplayComponent from "./DisplayComponent";
import InputComponent from "./InputComponent";


class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: 0
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

    }

    render(){

        return(
            <div>
                <InputComponent count={this.state.value} decrease={this.decrease} increase={this.increase}/>
                <DisplayComponent count={this.state.value}/>

            </div>

        )
    }

    increase(){
        
        this.setState({value: this.state.value + 1})
    }

    decrease(){
        
        this.setState({value: this.state.value - 1})
    }

    reset(){
        this.setState({value: 0})
    }
    
}

export default Counter;