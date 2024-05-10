import e, { Request, Response } from 'express';
import Departamento from '../models/Departamento';

import Edificio from '../models/Edificio';
import Aula from '../models/Aula';
class AulasController { 
    static async getAulas(req: Request, res: Response) {
        const aulas = await Aula.find()
        res.json(aulas)
    }
    static async createAulas(req:Request,res:Response){
        /*
          id_aula: string;
        edificio_id: string;
        edificio: string;
        equipos: string[];
        */
        try{
            const {id_aula,id_edificio,equipos} = req.body
            //verificamos si existe ese edifcio
            const edificio = await Edificio.findOne({id_edificio})
            const aulaExist = await Aula.findOne({id_aula})
            if(!edificio){
                return res.status(400).json({msg:'edificio no encontrado'})
            }
            //o vemos sii ya existe el aula
            if(aulaExist){
                return res.status(400).json({msg:'Ya hay un aula con ese id'})
            }

            const aula = new Aula({id_aula,id_edificio,equipos})
            edificio.aulas.push(aula.id_aula)
            await Promise.all([aula.save(),edificio.save()])
            
            res.json(aula)
        }catch(error){
            res.send('erorr en el servidor')
            console.log(error)
        }
    }
}
export default AulasController