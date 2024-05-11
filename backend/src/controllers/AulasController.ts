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
            const {id_aula,edificio_id,equipos} = req.body
            //verificamos si existe ese edifcio
            const edificio = await Edificio.findOne({id_edificio:edificio_id})
            const aulaExist = await Aula.findOne({id_aula})
            if(!edificio){
                return res.status(400).json({msg:'edificio no encontrado'})
            }
            //o vemos sii ya existe el aula
            if(aulaExist){
                return res.status(400).json({msg:'Ya hay un aula con ese id'})
            }

            const aula = new Aula({id_aula,edificio_id,equipos})
            edificio.aulas.push(aula.id_aula)
            await Promise.all([aula.save(),edificio.save()])
            
            res.send('Aula creada con eixto')
        }catch(error){
            res.send('erorr en el servidor')
            console.log(error)
        }
    }
    static async getAulasByEdificio(req:Request,res:Response){
        try{
            //vamos a reecibir el id del edificio
            const {edificio_id} = req.params
    
            const aulas = await Aula.find({edificio_id}).select('id_aula')
           console.log(aulas)
            res.json(aulas)

        }catch(e){
            res.send('error al acargar las auals')
            console.log(e)
        }
    }
}
export default AulasController