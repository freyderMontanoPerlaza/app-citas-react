import { useState, useEffect } from 'react';
import Error from './Error'



const Formulario = ({ pacientes, setPacientes, paciente }) => {

    //mi primeros states el orden es importante
    //para evitar mesclar las variables
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintoma, setSintoma] = useState('');

    const [error, setError] = useState(false);



    //useEffect escuchando por los cmbios que pasa en pacientes
    useEffect(() => {
        //comprobar si un objecto esta  vacio o no
        if (Object.keys(paciente).length > 0) {
            //por obligacion tiene que llevar el objecto para actualizar
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintoma(paciente.sintoma);
        }

    }, [paciente]);






    //generar Id para mi objecto paciente
    const generarId = () => {
        const ramdon = Math.random().toString(36).substring(0, 3);
        const fecha = Date.now().toString(36)

        return ramdon + fecha
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion formulario
        if ([nombre, propietario, email, fecha, sintoma].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true);
            return
        }

        //estado del  error regresarlo a falso
        setError(false);

        //despues de validar paso a captura mi informacion
        //y para eso declaro un Objecto paciente
        const objectoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintoma
        }


        //vereficar editar el registro
        if (paciente.id) {

            objectoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
    
        
        } else {

            objectoPaciente.id = generarId();
            //siempre se toma una copia de lo que ya hay para no reinscribir mi arreglo para agregar el nuevo objecto al final
            //Tener una coleccion de todos los pacientes
            //utilizar metodos inmutable para mis listas
            //el arreglo  no sea modificada por algun metodo 
            setPacientes([...pacientes, objectoPaciente]);

        }

        //reiniciar formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintoma('');

    }










    return (
        <div className=' md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

            <p className='text-lg mt-3 text-center font-bold'>
                Añade Pacientes {''} <span className='text-indigo-700 mb-10'>Administralo</span>
            </p>


            <form
                onSubmit={handleSubmit}//funcion 
                className='bg-white shadow-md rounded-lg py-10 px-5 mt-4'>

                {error && <Error><p>Todos los campos son Obligatorios</p></Error>}





                <div className='mb-5'>
                    <label htmlFor="mascota"
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre  Mascota
                    </label>


                    <input type="text"
                        id='mascota'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={nombre}//estado de entada
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>


                    <input type="text"
                        id='propietario'
                        placeholder='Nombre del  propietario'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}

                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>


                    <input type="email"
                        id='email'
                        placeholder='Email Contacto del  propietario'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="alta"
                        className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>


                    <input type="date"
                        id='alta'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}

                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="sintomas"
                        className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>

                    <textarea
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        id='sintomas'
                        placeholder='Describe Los síntomas'
                        value={sintoma}
                        onChange={(e) => setSintoma(e.target.value)}

                    />

                </div>{/*end col input */}


                <input type="submit"
                    className='bg-indigo-700 w-full p-3 rounded-md
                                text-white uppercase font-bold
                                hover:bg-indigo-800 cursor-pointer transition-all'
                    value={paciente.id ? ' Editar  Paciente' : 'Agregar Paciente'} />


            </form>
        </div>
    )
}

export default Formulario
