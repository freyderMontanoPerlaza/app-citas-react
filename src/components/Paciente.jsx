
const Paciente = ({ paciente, setPaciente }) => {

    //destructurar mis props para usar las variables directamente
    const { nombre, propietario, email, fecha, sintoma } = paciente


    return (

        <div>
            <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">{sintoma}</span>
                </p>

                {/* botones  */}
                <div className="flex  justify-between mt-10">

                    <button
                        type="button"
                        className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-10 rounded-lg"
                        onClick={() => setPaciente(paciente)}
                    >
                        Editar
                    </button>

                    <button
                        type="button"

                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded-lg">
                        Eliminar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Paciente
