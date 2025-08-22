import { useState } from "react";
import style from "./Form.module.css";
const Form = ({onCalculate, onMessage}) => {

  const [weightVal, setWeightVal] = useState("");
   const [heightVal, setHeightVal] = useState("");
   

   const calculateBmi = (e)=>{
     event.preventDefault();

    if(weightVal === "" && heightVal ===""){
      alert("please enter a valid num")
    }
    else {
      const bmi = ((weightVal/(heightVal*heightVal))*703);
      onCalculate(bmi.toFixed(1));

      if(bmi<25){
        onMessage("You are underweight")
      }
      else if(bmi>=25 && bmi<30){
        onMessage("You are healthy")
      } 
      else{
        onMessage("You are overweight");
      }
    }
        setHeightVal("");
        setWeightVal("");
   }

    return(
         <form onSubmit={calculateBmi}  className={style.container}>
         <div >

          <label htmlFor="Weight">Weight</label>
          <input type='text' placeholder='Enter your weight' value={weightVal} onChange={(event)=> setWeightVal(event.target.value)} />
        </div>
        <div>
          <label htmlFor="Height">Height</label>
          <input type='text' placeholder='Enter your height' value={heightVal} onChange={(event)=> setHeightVal(event.target.value)} />
        </div>

        <div>
          <button className='btn' type='submit'>Submit</button>
          {/* <button className='btn btn-outline'>Reload</button> */}
        </div>

        
      </form>
    )
}
export default Form;