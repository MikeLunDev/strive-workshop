import React from "react";
import "normalize.css";
import "./App.scss";
import ClassForm from "./components/ClassToFunction/ClassForm";
import FunctionForm from "./components/ClassToFunction/FunctionForm";

const App = () => {

    return (
        <div className="app-container">
            <h1>HELLO STRIVERS</h1>
            <ClassForm label={"test class"}/>
            <FunctionForm label={"test function"}/>       
        </div>
    );
};

export default App;
