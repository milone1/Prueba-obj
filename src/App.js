/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import ButtonAdd from './components/Button';


function App() {
  
const personas = [{
  id:1,
  name: 'Juan',
  edad:12,
},
{
  id:2,
  name: 'Pedro',
  edad:12,
},
{
  id:3,
  name: 'Mrtin',
  edad:12,
},
{
  id:4,
  name: 'Marcelo',
  edad:12,
},
]

  const savePadre = (values) => {
    console.log("padre", values);
    personas.push(values);
    console.log("my objeto", personas);
  }

  useEffect(() => {
    console.log(personas.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[personas])

  return (
    <>    
      <ButtonAdd personas={personas} savePadre={savePadre}/>
      <h1>Lista de personas</h1>
      <h2>{personas.length}</h2>
      {personas.map(fun => (
        <>
          <h1>Name: {fun.name}</h1>
          <h1>Edad: {fun.edad}</h1>
          <h1>ID: {fun.id}</h1>
        </>
      ))}
    </>
  );
}

export default App;
