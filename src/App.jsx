
import { useState } from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {


  //pasar al formulario arreglo vacio del formulario setPacientes 
  //Para rellenar mi arreglo
  const [pacientes, setPacientes] = useState([]);

  //crear estado para eliminar o editar mis pacientes
  // su valor inicial  va a ser un  objecto vacio
  const [paciente, setPaciente] = useState({});





  return (

    <div className="container  mx-auto mt-20">
      <Header />

      <div className="md:flex  mt-12">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
        />


        {/*despues de psarle el arreglo pacientes a mi formulario y capturar su informacion*/}
        {/* paso a mi lista de pacientes y la imprimo alli mis valores obtenidos por medio de los props */}
        <ListadoPacientes
          pacientes = {pacientes}
          //para llegar a paciente tengo que pasarlo por nivel primero listado,depus paciente
          setPaciente = {setPaciente}
        />


      </div>
    </div>

  )
}

export default App


