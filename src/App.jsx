import { useState } from 'react';
import './App.css'
import Archivo1 from './Components/Archivo1';
import Archivo2 from './Components/Archivo2.jsx';

function App() {

  const [cont,setcont] = useState("Estábamos condenados, pero Él asumió toda la culpa 💙");
  const [num, setnum] = useState(1);

  
  const objStyle = {
    backgroundImage : `url("fon${num}.jpg")`,
    backgroundSize: "cover"
  }
  return (
    <div className='caja'>
      <div className = "caja__div" style={objStyle}>
        <div>
          <Archivo1 prop1={cont}/>
          <Archivo2 prop2 = {setcont} prop3 ={setnum}/>
        </div>
        
      </div>
    </div>

  )
}

export default App
