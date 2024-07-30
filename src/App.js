import Nathan from './Nathan';
import './App.css';


let  obj = {nome: 'Nathan', idade: 18, time:'Vasco'};
let  prof = {nome: 'Zeco', idade: 18, time:'Fla'};

const mediaI = 5
const mediaII = 10
let resultado = mediaI + mediaII 

function calcMedia(){
 return resultado / 2
}
console.log(calcMedia())

let resultadoI = `resultado média: ${calcMedia()}`;
function App() {
  return (
   <>
    <h1>VASCO</h1>
    <span>
      Nome: {prof.nome}
    </span>
    <p> Olá <Nathan {...obj} /></p>
    <p> Olá <Nathan {...prof} /></p>
    <p>{resultadoI}</p>
    </> 
  );
}

export default App;
