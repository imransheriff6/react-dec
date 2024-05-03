import { Component } from "react";

class ClassExample extends Component {
    constructor(){
        super();
        this.state = {
            setCount:10
        }
    }
    change(){
        this.setState({
            setCount:this.state.setCount + 1
        })
    }
    render(){
        return <>
        <h1>{this.state.setCount}</h1>
        <button onClick={()=>this.change()}>Change</button>
        </>
    }
}
export default ClassExample