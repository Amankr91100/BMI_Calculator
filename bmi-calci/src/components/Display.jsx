import style from './Display.module.css';
const Display = ({bmi,message}) =>{
    return (
           <div className={`${style.center} ${!bmi ? style.hidden : ""}`}>
          {/* // <div className={style.center}> */}
          <h3>Your BMI is:{bmi}</h3>
          <p>{message} </p>
        </div>
    )
    
}
export default Display;