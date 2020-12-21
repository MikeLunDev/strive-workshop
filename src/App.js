import React from "react";
import "normalize.css";
import "./App.scss";
import ClassForm from "./components/ClassToFunction/ClassForm";
import FunctionForm from "./components/ClassToFunction/FunctionForm";
import OptimizationHooks from "./components/OptimizationHooks";
import { SUCCESS } from "./constants";
import CustomHook from "./components/CustomHook";

const App = () => {
    
    return (
        <div className="app-container">
            <h1>OPTIMIZATION HOOKS</h1>
            <ClassForm label={"test class"}/>
            <FunctionForm label={"test function"}/>
            <OptimizationHooks type={SUCCESS}/>      
            <CustomHook/> 
        </div>
    );
};

export default App;
