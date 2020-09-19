// Components file name should begin with capital letter
// there are two types of components
// 1- Class Components- powerful beacause we can udpdate, change the states just like flutter's stateful Widget
// 2- Functional Components- It's like stateless widget, the states can not be changed
// This is the class component implementation

// To use component we have to import {Component} from react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.css';

// Creating a functional component
// const Demo=(props)=>{
//     return <div className="main_div">
//                 <h1> Hello {props.name}</h1>
//                 <p>Welcome to reactJS website</p>
//             </div>
// }


// if we don't pass props as an argument we can also done using this method
const Demo=({name})=>{
    return <div className="main_div">
                <h1> Hello {name}</h1>
                <p>Welcome to reactJS website</p>
            </div>
}

// creating a class component
// class Demo extends Component{
//     // needs render function which shows the UI
//     render(){
//         return <div className="main_div">
//           
//             <h1> Hello {this.props.name}</h1>  
//             <p>Welcome to reactJS website</p>
//         </div>
//     }
// }
export default Demo;


// props get passed to the component
// props are immutable(cannot be changed/modify)
// props- functional component
//this.props-class component