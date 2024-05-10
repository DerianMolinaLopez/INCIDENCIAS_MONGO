import Router from 'express';
const routerUsuarios  = Router();
import UsuarioController from '../controllers/UsuarioController';
routerUsuarios.get('/',UsuarioController.getUsuarios)
routerUsuarios.post('/',UsuarioController.createUsuarios)
export default routerUsuarios