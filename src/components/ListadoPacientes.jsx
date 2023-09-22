
import Paciente from "./Paciente"



const ListadoPacientes = ({ pacientes, setPaciente }) => {








    return (
        <div className="bg-slate-100 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {/* comprobar si hay pacientes en la lista */}
            {pacientes && pacientes.length ? (
                <>

                    <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
                    <p className="font-black mt-5  text-center">
                        Administra tus {''}<span className="text-indigo-700">Pacientes y Citas</span>
                    </p>

                    {/*iterando mi lista de pacientes por la funcion mas aceptada es un  map */}
                    {
                        pacientes.map((paciente) => {
                            return (

                                <Paciente

                                    key={paciente.id}//me genera mi llave unica 
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                />
                            )
                        })
                    }
                </>

            ) :

                (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                        <p className="font-black mt-5  text-center">
                            Comienza agregar Pacientes {''}<span className="text-indigo-700">Y aparecerán en este lugar</span>
                        </p>
                    </>
                )


            }






        </div>
    )
}

export default ListadoPacientes
