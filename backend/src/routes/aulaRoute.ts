import Route from 'express'
import AulasController from '../controllers/AulasController'
const routerAulas = Route.Router()
routerAulas.get('/',AulasController.getAulas)
routerAulas.post('/',AulasController.createAulas)
export default routerAulas