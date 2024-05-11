import React from 'react'
import { useState,useEffect } from 'react'
import GridCard from '../components/GridCard'
import axios from 'axios'

const TecnicoInicio = () => {
    const [incidencias, setIncidencias] = useState([])
    //mandamos a traer las incidencias por el id del tecnico
    useEffect(() => { 
        const obtenerIncidencias = async () => {
            //traemos el id del tecnico del localStorage
            const usuarioLocal = JSON.parse(localStorage.getItem('usuario'))
            const { Nombre, id_usuario } = usuarioLocal.usuarioExist
            console.log(id_usuario)
            const response = await axios.get(`http://localhost:3000/incidencias/tecnico/${id_usuario}`)
            console.log(response.data)
            setIncidencias(response.data)
        }
        /*
          edificio
            aula
            equipo
            descripcion
            fecha
            departamento 
            prioridad
        */
        obtenerIncidencias()
     },[]) 
  return (
    <div className='bg-gray-200 w-screen p-24'>
        <h1  className='mb-10 text-3xl text-indigo-700'>Incidencias asignadas</h1>
        <section className='grid grid-cols-3  place-items-center'>
            {incidencias.map(incidencia=>
            (<GridCard   
                    descripcion={incidencia.descripcion}
                    id_aula={incidencia.id_aula}
                    id_edificio={incidencia.id_edificio}
                    id_equipo={incidencia.id_equipo}
                    prioridad={incidencia.prioridad}
                    id_departamento={incidencia.id_departamento}
                    tiempo_estimado={incidencia.tiempo_estimado}
                    fecha={incidencia.fecha}
                    departamento={incidencia.id_departamento}
                    key={incidencia.id_incidencia}
            />))}
        </section>  
     
    </div>
  )
}

export default TecnicoInicio
