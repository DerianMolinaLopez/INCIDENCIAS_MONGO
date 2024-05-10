import Equipo from "../models/Equipos";
import { Request,Response } from "express";
import {tipo_equipo} from "../models/Equipos";
class EquiposController{
    static async getEquipos(req: Request, res: Response){
        try{
            const equipos = await Equipo.find()
            res.json(equipos)
        }catch(error){
            res.send('error en el servidor')
            console.log(error)
        }
    }
    /*
       id_equipo: string;
       tipo: tipo_equipo;
       caracteristicas: string;
       aula_id: string;
       garantia_id: number;
       bitacoras: string[];
       tipoEquipo: tipo_equipo
    */
    static async createEquipos(req: Request, res: Response){
        try{
            const {id_equipo,caracteristicas,aula_id,garantia_id,bitacoras,tipoEquipo} = req.body
            const equipos = new Equipo({id_equipo,caracteristicas,aula_id,garantia_id,bitacoras,tipoEquipo})
           
            equipos.save()
            res.send('probando')
        }catch(error){
            res.send('error en el servidor')
            console.log(error)
        }
    }
    static async getTipoEquipos(req:Request,res:Response){
        res.json(tipo_equipo)
    }
}
export default EquiposController