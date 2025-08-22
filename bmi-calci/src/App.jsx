import AppName from './components/AppName';
import Display from './components/Display';
import Form from './components/Form';
import './App.css'
import { useState } from 'react';

function App() {

   const [bmi,setBmi] = useState("");
   const [message, setMessage] = useState("");
   
    const handleBmiResult = (bmi) => {
    setBmi(bmi);
   
  };
    const handleMessageResult = (msg) => {
    
    setMessage(msg);
  };

  return (

 
  

    <div className='container'>
      <AppName  />
      <Form onCalculate={handleBmiResult} onMessage={handleMessageResult} />
      <Display bmi={bmi} message={message} />
    </div>
  )
}

export default App
