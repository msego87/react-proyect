import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
//cuando lo exporto por default, cuando lo importo lo puedo renombrar de cualquier forma
//import App from "./HelloWorldApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp  /> */}
        <CounterApp value={20}/>
    </React.StrictMode>
)