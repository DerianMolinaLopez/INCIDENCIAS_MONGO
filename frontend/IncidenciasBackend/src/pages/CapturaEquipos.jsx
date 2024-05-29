import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import useGlobalProvider from '../hooks/useGlobalProvider'
const CapturaEquipos = () => {
  const { setUsuario, usuario } = useGlobalProvider()
  const [edificioS, setEdificioS] = useState([])
  const [edificio, setEdificio] = useState('')
  const [equipoS, setEquipoS] = useState([])
  const [equipo, setEquipo] = useState([])
  const [aulaS, setAulaS] = useState([])
  const [aula, setAula] = useState('')
  useEffect(() => {
    //traemos todos los edificios y luego las aulas por edificio
    const obtenerData = async () => {
      const usuario = JSON.parse(localStorage.getItem('usuario'))
      setUsuario(usuario.usuarioExist)
      const { data } = await axios.get(`http://localhost:3000/edificios/${usuario.usuarioExist.id_usuario}`)
      setEdificioS(data)

      const response = await axios.get('http://localhost:3000/equipos/tipo');
      const tiposEquipos = Object.values(response.data);
      setEquipoS(tiposEquipos)
    }
    obtenerData()
  }, [])
  useEffect(() => {
    const obtenerAulaByEdificio = async () => {
       if(edificio!=''){
      console.log('edificio cambiado')
      console.log(edificio)
      const {data} = await axios.get(`http://localhost:3000/aulas/aulas/${edificio}`)
      setAulaS(data.aulas.aulas)
  console.log(data.aulas.aulas)
    }
    

    }
    obtenerAulaByEdificio()
  },[edificio])
  //edificio
  //aula



  const handleSubmit = async (e) => {

  }

  return (
    <div className='h-full  bg-gray-200 anchura '>
      <h2 className='text-indigo-700 text-3xl pt-20   '>Captura tus Aulas y asignalos a un edificio</h2>
      <div className='flex justify-center mt-16'>
        <form onSubmit={handleSubmit} className='bg-white w-1/2 rounded-lg shadow-xl space-y-5 p-10'>
          <div className='space-y-4'>
            <h3 className='text-indigo-700 text-2xl'>Selecciona el edificio</h3>
            <select
            value={edificio}
            onChange={(e) => setEdificio(e.target.value)}
            className='text-center w-1/2' name="" id="">
              <option value="" selected></option>
              {edificioS.map(edificio => (
                <option key={edificio.id_edificio} value={edificio.id_edificio}>
                  {edificio.id_edificio}
                </option>
              ))}
            </select>
          </div>



          <div className='space-y-4'>
            <h3 className='text-indigo-700 text-2xl'>Selecciona el aula</h3>
            <select
            value={edificio}
            onChange={(e) => setEdificio(e.target.value)}
            className='text-center w-1/2' name="" id="">
              <option value="" defaultValue={""}></option>
              {aulaS.map(aula => (
                <option key={aula} value={aula}>
                  {aula}
                </option>
              ))}
            </select>
          </div>
          <div className='space-y-4'>
            <h3 className='text-indigo-700 text-2xl'>Selecciona el tipo de equipo correspondiente</h3>
            <select
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            className='text-center w-1/2' name="" id="">
              <option value="" defaultValue={""}></option>
              {equipoS.map(equipo => (
                <option key={equipo} value={equipo}>
                  {equipo}
                </option>
              ))}
            </select>
          </div>

          <textarea name="" id="" placeholder='Descripcion' className=' border-2 gray-400 p-5'>

          </textarea>
          <a type='submit' className='block bg-gray-700 text-white p-3 hover:cursor-pointer hover:bg-gray-900 transition-all duration-200'>Enviar</a>

        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CapturaEquipos
