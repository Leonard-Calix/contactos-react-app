import { useState } from "react";
import Navbar from "./components/Navbar";


const App = () => {

  const [numero, setNumero] = useState(10)

  const [persona, setPersona] = useState({
    nombre: 'Zayra',
    apellido: 'Canales'
  })

  const [contactos, setContactos] = useState([
    {
      nombre: 'Bryan',
      apellido: 'Calix'
    },
    {
      nombre: 'Leo',
      apellido: 'Velasquez'
    },
    {
      nombre: 'Bryan',
      apellido: 'Calix'
    },
    {
      nombre: 'Leo',
      apellido: 'Velasquez'
    }
  ])



  return (
    <>
      <Navbar />

      <div className="container mt-5" >
        <p>Listado</p>

        <p> Numero =  {numero} </p> 
        <p> Nombre =  {persona.nombre} </p> 
        <p> Apellido =  {persona.apellido} </p> 

        <p> Contacto 1 de Zayra =  {contactos[3].nombre} - {contactos[3].apellido}</p> 

        <p>Zayra tiene {contactos.length }  contactos</p>



      </div>

    </>
  )
}

export default App;