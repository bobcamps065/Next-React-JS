import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import App from "./Components/App";
import Time from "./Components/Time";
import Card from "./Components/Card";

const tick = () =>{
ReactDOM.render(
<>
    <Home />
    <Nav />
    <Time />
    <App />
    <Card /> 
</>,     
        
        
document.getElementById('root'));
}
 
tick(setInterval(tick, 1000))