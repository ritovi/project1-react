import phrases from "../utils/phrases.json"
import arrimg from "../utils/arrimg.json"
import Random from "../utils/Random.js"

const Archivo2 = ({prop2, prop3}) => {
    const Funcion = ()=>{
        const arreglo = phrases; const arreI = arrimg;
        const a = Random(arreglo).phrase;
        const b = Random(arreI);
        prop2(a);
        prop3(b);
    }
    
  return (
    <button onClick={Funcion}>Happy</button>
  )
}

export default Archivo2