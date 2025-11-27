import { useState } from 'react';
import './App.css'
import Clock from './hooks/reloj';
import ListadoHoras from './ListadoHoras';

interface Captura {
   capturaReloj: string;
};


function App() {
  const [Horas,setHoras] = useState(Array());
  const reloj=Clock();
  
  

  function anyadirHora(){
     let hora = new Date().toLocaleTimeString();
     console.log(hora);
     anaydirHoraLista(hora);
     
  }
  function anaydirHoraLista(horaAux: string){
     setHoras([...Horas,{id: Horas.length , hora:horaAux}]);
  }
  return (
    <>
      <button onClick={()=>anyadirHora()}>
          {reloj}
        
      </button>
      <ListadoHoras horas={Horas}></ListadoHoras>
    </>
  )
}

export default App
