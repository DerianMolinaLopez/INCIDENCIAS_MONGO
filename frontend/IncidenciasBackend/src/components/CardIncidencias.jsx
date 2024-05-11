import React from 'react'

function formateaFecha(fehca){
    const fecha = new Date(fehca)
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
    
}
const CardIncidencia = ({id,handleModal,edificio,aula,equipo,descripcion,fecha,tecnico,status, tiempoEstimado}) => {
    /*
    id de la incidencia
    id del edificio
    id del aula
    id del equipo
    descripcion
    fecha en la que se emitio
    tecnico asignado
    status
    tiempo estimado
    */
   //la ultima son para los botones de las columnas
  return (
    <div className='grid grid-cols-10 text-center border-b-2 pb-2 last-of-type:pb-5'>
       <p>{id}</p>
       <p>{edificio}</p>
       <p>{aula}</p>
       <p>{equipo}</p>
       <p>{descripcion}</p>
       <p>{fecha}</p>
       <p>{tecnico==1?'Sin asignar':tecnico}</p>
       <p>{status}</p>
       <p>{tiempoEstimado==''?'sin asignar':tiempoEstimado}</p>
        <article className='flex justify-around'>
            <button onClick = {e =>handleModal(e,id)} className =' cursor-pointer bg-indigo-700 rounded-lg text-white px-1 h-7'>Editar</button>
            <button className ='bg-red-700 rounded-lg text-white px-1 h-7'>Eliminar</button>
        </article>
    </div>
  )
}

export default CardIncidencia
