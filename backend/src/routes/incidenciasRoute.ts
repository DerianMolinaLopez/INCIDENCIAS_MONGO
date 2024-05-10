import Route from 'express'
import IncidenciaController from '../controllers/IncidenciasController'
const incidenciasRoute = Route()
incidenciasRoute.get('/',IncidenciaController.getIncidencias)
incidenciasRoute.post('/',IncidenciaController.createIncidencias)
export default incidenciasRoute