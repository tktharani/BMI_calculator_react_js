
import { useState } from 'react';
import './App.css';

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState(null);
const[bmistatus,setBmiStatus]=useState("");
const[errormessage, setErrormessage]=useState("");

const calculatebmi=()=>{
  const isValidheight=/^\d+$/.test(height);
  const isValidweight=/^\d+$/.test(weight);
  if(isValidheight && isValidweight  ){
    const heightInmeter=height/100;
    const bmivalue=weight/(heightInmeter*heightInmeter)
    setBmi(bmivalue.toFixed(2));
    if(bmivalue < 18.5){
      setBmiStatus("UnderWeight")
    }
    else if(bmivalue >= 18.5 && bmivalue < 24.9){
      setBmiStatus("Normal Weight")
    }
    else if(bmivalue>=25 && bmivalue < 29.9){
      setBmiStatus("Over Weight")
    }
    else{
      setBmiStatus("Obesity")
    }
    setErrormessage("");

  }else{
    setBmi(null);
    setBmiStatus("");
    setErrormessage("Please enter valid numeric values for height and weight.")
  }
}
const clearall=()=>{
  setBmi(null);
  setBmiStatus("");
  setHeight("");
  setWeight("");
}
  return (
    <>
    <div className='bmi-calculator'>
      <div className='box'></div>
      <div className='data'>
        <h2>BMI CALCULATOR</h2>
       {errormessage && <div className='error'>
          <p>{errormessage}</p>
        </div>}
        <div className='input-container'>
          <label htmlFor='height'>Height (cm):</label>
          <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}></input>
        </div>
        <div className='input-container'>
          <label htmlFor='weight'>Weight (Kg):</label>
          <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
        </div>
        <button onClick={calculatebmi}>Calculate BMI</button>
        <button onClick={clearall} className='btnclear'>Clear</button>
        {bmi!==null&&(
          <div className='result'>
          <p>YOUR BMI is{bmi}</p>
          <p>Status:{bmistatus}</p>
        </div>
          
        )}
      </div>

    </div>



    </>
  );
}

export default App;
