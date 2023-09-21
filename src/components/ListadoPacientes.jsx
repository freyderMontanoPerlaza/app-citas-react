import Paciente from "./Paciente"


const ListadoPacientes = () => {
    return (
        <div className="bg-slate-100 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="font-black mt-5  text-center"> 
                Administra tus {''}<span className="text-indigo-700">Pacientes y Citas</span>
            </p>


            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />





        </div>
    )
}

export default ListadoPacientes
