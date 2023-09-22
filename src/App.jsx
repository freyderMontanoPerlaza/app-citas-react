
import { useState } from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {


  //pasar al formulario arreglo vacio del formulario setPacientes 
  //Para rellenar mi arreglo
  const [pacientes, setPacientes] = useState([]);





  return (

    <div className="container  mx-auto mt-20">
      <Header />

      <div className="md:flex  mt-12">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />


        {/*despues de psarle el arreglo pacientes a mi formulario y capturar su informacion*/}
        {/* paso a mi lista de pacientes y la imprimo alli mis valores obtenidos por medio de los props */}
        <ListadoPacientes
          pacientes = {pacientes}
        />



      </div>
    </div>

  )
}

export default App


