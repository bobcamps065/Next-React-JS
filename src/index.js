import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import App from "./Components/App";
import Time from "./Components/Time";
import Form from "./Components/Form";

const tick = () =>{
ReactDOM.render(
<>
    <Home />
    <Nav />
    <Time />
    <App />
    <Form /> 
</>,     
        
        
document.getElementById('root'));
}
 
tick(setInterval(tick, 1000))