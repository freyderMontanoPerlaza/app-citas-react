import React from 'react'

const Formulario = () => {
    return (
        <div className=' md:w-1/2 lg:w-2/5 '>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

            <p className='text-lg mt-5 text-center font-bold'>
                Añade Pacientes {''} <span className='text-indigo-700 mb-10'>Administralo</span>
            </p>


            <form className='bg-white shadow-md rounded-lg py-10 px-5 mt-4'>
                <div className='mb-5'>
                    <label htmlFor="mascota"
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre  Mascota
                    </label>


                    <input type="text"
                        id='mascota'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
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
                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>


                    <input type="date"
                        id='alta'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                    />
                </div>{/*end col input */}

                <div className='mb-5'>
                    <label htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>

                    <textarea
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        id='sintomas'
                        placeholder='Describe Los síntomas'
                    />

                </div>{/*end col input */}


                <input type="submit"
                    className='bg-indigo-700 w-full p-3 rounded-md
                                text-white uppercase font-bold
                                hover:bg-indigo-800 cursor-pointer transition-all'  value="Agregar Pacientes" />


            </form>
        </div>
    )
}

export default Formulario
