import Edificio from '../models/Edificio';
import Departamento from '../models/Departamento';
import { Request,Response } from 'express';
class EdificioController {
    static async getEdificios(req: Request, res: Response) {
        try{
            const edificio =  await Edificio.find()
            res.send(edificio)
        }catch(error){
            res.send('error ene l servidor')
            console.log(error)
        }
    }

    static async getEdificiosById(req: Request, res: Response) {
        try{
            //todos los edificios de un deparatamento
            const {id_departamento} = req.params
            const edificio =  await Edificio.find({id_departamento}).select('id_edificio')
            res.send(edificio)
        }catch(error){
            res.send('error ene l servidor')
            console.log(error)
        }
    }
    static async createEdificio (req:Request, res:Response){
        //verificamos si el departamento existe con su id
        /*
          id_departamento: string;
    nombre: string;
    descripcion: string;
    edificios: string[];
        */

        try{
            const {id_departamento,} = req.body
            const departamento = await Departamento.findOne({id_departamento})
            if(!departamento){
                return res.send('departamento no encontrado')
            }
            const edificio = new Edificio(req.body)
            departamento.edificios.push(edificio.id_edificio)
            edificio.save()
           
            await Promise.all([departamento.save(),])
            res.send('edificio creado con exito').status(200)
        }catch(e){
            res.send('error en el servidor')
            console.log(e)
        }
    }
     
}
export default EdificioController