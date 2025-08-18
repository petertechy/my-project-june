import { Component } from "react";

class ClassReact extends Component {
    constructor(props) {
        super(props);
    }
    state = { myNumber: 12, firstName: "Ola" }
    myNumber =  12
    increase = () =>{
        // console.log("Hello")
        // this.myNumber = 30
        this.setState({myNumber: this.state.myNumber+1})
        console.log(this.state)
    }

    componentDidMount(){
        console.log("I have mounted")
    }

    componentDidUpdate(){
        console.log("component has updated")
    }

    componentWillUnmount(){
        alert("You want to leave")
    }

    render() { 
        console.log(this.props)
        const myName = this.props.title
        return ( 
            <>
                <h1>Hello {myName} - {this.state.myNumber}</h1>
                <button onClick={this.increase}>Increase Value</button>
            </>
         );
    }
}
 
export default ClassReact;