import Route from 'express'
import EdificioController from '../controllers/EdificioController'
const edificioRoute = Route()

edificioRoute.get('/',EdificioController.getEdificios)

edificioRoute.post('/',EdificioController.createEdificio)
export default  edificioRoute