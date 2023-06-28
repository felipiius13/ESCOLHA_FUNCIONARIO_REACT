import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Mechanical Engineers',
      corPrimaria: '#f08688',
      corSecundaria: '#f8dcdd'
    },
    {
      nome: 'Electrical Engineers',
      corPrimaria: '#f7888a',
      corSecundaria: '#f7cecf'
    },
    {
      nome: 'Control and Automation Engineers',
      corPrimaria: '#fc797b',
      corSecundaria: '#fac7c8'
    },
    {
      nome: 'Programmers',
      corPrimaria: '#fd6c6e',
      corSecundaria: '#fabcbd'
    },
    {
      nome: 'Design',
      corPrimaria: '#f35c5e',
      corSecundaria: '#fcb3b4'
    },
    {
      nome: 'Management',
      corPrimaria: '#f14d50',
      corSecundaria: '#f8a6a8'
    },
    {
      nome: 'Economists',
      corPrimaria: '#a82628',
      corSecundaria: '#f59b9d'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;