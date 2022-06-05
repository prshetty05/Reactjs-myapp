
import React,{Component} from "react";

class APICALL extends Component{

    constructor(props){
    super(props);

    this.state = {
        flag: false,
        userData: null

        }
    }

    render(){

        return(
            <div>
                {this.state.flag ? <h1>{this.state.userData}</h1>:<h1>Loading...</h1>}
                
            </div>

        );

    }

    async componentDidMount(){
        const url = 'https://randomuser.me/api/';
        const res = await fetch(url);
        const userData = await res.json();
        let username = (userData.results[0].name.first + " " + userData.results[0].name.last);
        this.setState({userData: username,flag: true});
    }

}

export default APICALL;

