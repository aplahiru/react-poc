import React, { Component } from 'react';

export type ClassState = {
    statusArray: string[],
    greet: string
}

export type ClassProps = {
    greet: string
}

class LifeCycleHookClass extends Component<ClassProps, ClassState> {
    // constuctor for class component
    constructor(props:ClassProps){
        super(props);
        console.log("component mounted & constructor fired");
        this.state = {
            statusArray: ["element "+Math.round(Math.random()*100)/100],
            greet: "Welcome"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // function call when component mounting
    componentDidMount(){
        console.log("component did mount fired");
        
    }
    // function call when component updating
    componentDidUpdate(prevState:ClassState, prevProps:ClassProps){
        if(prevState.statusArray !== this.state.statusArray){
            console.log("component did update fired & state changed");
            
        }
        else{
            console.log("component did update fired & state doesn't changed");
            
        }
        if(prevProps.greet !== this.props.greet){
            console.log("component did update fired & props changed");
            
        }
        else{
            console.log("component did update fired & props changed");
            
        }
    }
    // function call when component's state or props change
    shouldComponentUpdate(nextProps: ClassProps, nextState: ClassState){
        if(nextProps.greet !== this.props.greet || nextState.statusArray !== this.state.statusArray){
            if(nextProps.greet !== this.props.greet){
                console.log("component should update fired & props changed");
                
            }
            if(nextState.statusArray !== this.state.statusArray){
                console.log("component should update fired & state changed");
                
            }
            return true;
        }
        else{
            if(nextProps.greet === this.props.greet){
                console.log("component should update fired & props doesn't changed");
                
            }
            if(nextState.statusArray === this.state.statusArray){
                console.log("component should update fired & state doesn't changed");
                
            }
            return false;
        }
    }
    // function call when when state or props changed
    static getDerivedStateFromProps(props:ClassProps, state:ClassState){
        if(props.greet !== state.greet){
            console.log("getDerivedStateFromProps fired & state changed according to relevant props");            
            return{
                ...state,
                greet: props.greet
            }
        }
        console.log("getDerivedStateFromProps fired & state doesn't changed");
        return null;
    }
    // function call when component unmounting
    componentWillUnmount(){
        console.log("component will unmount fired");
        
    }
    // function call when click event fire
    handleClick(){
        this.setState({
            statusArray: [...this.state.statusArray, 'element '+Math.round(Math.random()*100)/100]
        })
    }
    render() {
        return (
            <div>
                <h1>React Class Component Lifecycle Hooks</h1>
                <h4>Please refer console to look how to work lifecycle methods</h4>
                <div><button onClick={this.handleClick}>Click Me</button></div>
                <h6>state of the component are listed below</h6>
                {
                    this.state.statusArray.map((status, index)=>{
                        return(
                            <p key={index}>{status}</p>
                        )
                    })
                }
                <h6>props of the component are listed below</h6>
                {
                    <p>{this.state.greet}</p>
                }
            </div>
        )
    }
}

export default LifeCycleHookClass
