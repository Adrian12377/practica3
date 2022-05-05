import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Barra from './layout/Barra';
import React, {useState} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  let [cheer, setcheer] = useState("saludo inicial");
  let [darkmode, setdarkmode] = useState(false);
  const cambiartexto = () => {
    "saludo = saludo2";
    sercheer("saludo desde la cima");
}
const modooscuro = () => {
  serdarkmode(!darkmode);
}
  return (
    <BrowserRouter> 
    <Routes>


    <Route path='/' element={<Barra/>}>

      <Route path='about' element={  <About/>   }     />
      <Route path='contacto' element={  <Contact/>   }     />
      <Route index element={  <Home/>   }     />
    </Route>

    <h1>
    {cheer}
    </h1>
    <hr/>
<button type="button"
onClick={cambiartexto}>
  Cambiar texto
</button>
<br/>

<button type="button"
onClick={modooscuro}>
  {
    (darkmode==true) ? "modo oscuro" : "modo oscuro"
  }
</button>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;