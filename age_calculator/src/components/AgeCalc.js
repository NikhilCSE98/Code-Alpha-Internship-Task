import React, { useState } from "react";
import './Age_Calc.css';
let AgeCalc=()=>{
    let [birthDate,setBirthDate]=useState('');
    let [age,setAge]=useState(null);
    const  calculateAge=()=>{
        if(birthDate)
        {
            const birthDateObj=new Date(birthDate);
            const current=new Date();
            let calculatedAge=current.getFullYear()-birthDateObj.getFullYear();
            let monthDiff=current.getMonth()-birthDateObj.getMonth();
            if(monthDiff<0||(monthDiff===0 && current.getDate()<birthDateObj.getDate()))
            {
                calculatedAge--;
            }
            setAge(calculatedAge);
        }
    }

    const resetCalc=()=>{
        setBirthDate('');
        setAge(null);
    } 
    return(
    <div className="container">
        <h1>Age Calculator</h1>
        <div className="box">
            <div className="box1">
                <label>Enter your date of birth</label>
                <br/>
                <input type="date" name="date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)}></input>
                <div>
                <button className="button-65" onClick={calculateAge}>Submit</button>
                <button className="button-65" onClick={resetCalc}>Reset</button>
                </div>
            </div>
            <div className="box2">
                <h1>Your Age is</h1>
                <div>
                    {age}
                </div>
            </div>
        </div>
    </div>
);
}

export default AgeCalc;