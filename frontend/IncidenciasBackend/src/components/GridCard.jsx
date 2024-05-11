import React from 'react'
function formateaFecha(fehca){
    const fecha = new Date(fehca)
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
    
}
const GridCard = ({descripcion,fecha,id_aula,id_departamento,id_edificio,id_equipo,prioridad,tiempo_estimado}) => {
  return (
    <article className='text-start rounded-lg w-1/2 bg-white p-2'>
         <p>
            Departamento: <span className='text-indigo-700'>{id_departamento}</span> 
                            
        </p>
         <p>Edificio: <span className='text-indigo-700'>{id_edificio}</span> </p>
         <p>Aula: <span className='text-indigo-700'>{id_aula}</span> </p>
         <p>Equipo: <span className='text-indigo-700'>{id_equipo}</span></p>
        <p>Descripcion: <span className='text-indigo-700'>{descripcion}</span></p>
        <p>Fecha: <span className='text-indigo-700'>{formateaFecha(fecha)}</span></p>
        <p>Prioridad: <span className='text-indigo-700'>{prioridad}</span> </p>
        <p>Tiempo estimado: <span className='text-indigo-700'   >{tiempo_estimado}</span></p>

    </article>
  )
}

export default GridCard
