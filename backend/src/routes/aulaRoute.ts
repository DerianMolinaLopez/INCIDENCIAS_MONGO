import Route from 'express'
import AulasController from '../controllers/AulasController'
const routerAulas = Route.Router()
routerAulas.get('/',AulasController.getAulas)
routerAulas.post('/',AulasController.createAulas)
routerAulas.get('/:edificio_id',AulasController.getAulasByEdificio)
export default routerAulas