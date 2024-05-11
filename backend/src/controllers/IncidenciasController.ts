import Incidencia from "../models/incidencias";
import Departamento from "../models/Departamento";
import Aula from "../models/Aula";
import Edificio from "../models/Edificio";
import Equipo from "../models/Equipos";
import Tecnico from "../models/Tecnico";
import { Request, Response } from "express";
class IncidenciaController {
    static async getIncidencias(req:Request, res:Response) {
        try {
            const incidencias = await Incidencia.find()
            res.json(incidencias)
        } catch (error) {
            res.send('error en el servidor')
            console.log(error)
        }
    }
    /*
    id_incidencia: number;
    fecha: Date;
    fecha_finalizacion: Date;
    id_departamento: string;
    prioridad: prioridad;
    id_aula: string;
    id_edificio: string;
    descripcion: string;
    id_equipo: string;
    tiempo_estimado: string;
    idTecnico: number;
    Calificacion_atencion: number;
    tipo_incidencia: tipo_incidencia;
    estado: estado;
    */
    static async createIncidencias(req:Request, res:Response) {
    try {
        const {id_incidencia, id_departamento, id_aula, id_edificio, descripcion, id_equipo, idTecnico, Calificacion_atencion, tipo_incidencia} = req.body

        const [departamento, aula, edificio, equipoExist, TecnicoExist] = await Promise.all([
            Departamento.findOne({id_departamento}),
            Aula.findOne({id_aula}),
            Edificio.findOne({id_edificio}),
            Equipo.findOne({id_equipo}),
            Tecnico.findOne({idTecnico})
        ]);

        if (!departamento) {
            return res.status(404).json({message: "Departamento no encontrado"});
        }

        if (!aula) {
            return res.status(404).json({message: "Aula no encontrada"});
        }

        if (!edificio) {
            return res.status(404).json({message: "Edificio no encontrado"});
        }

        if (!equipoExist) {
            return res.status(404).json({message: "Equipo no encontrado"});
        }

        if (!TecnicoExist) {
            return res.status(404).json({message: "Técnico no encontrado"});
        }

        // Rest of your code...
        const prioridad  = 'sinAsignar';
        const fecha = Date.now()
        const estado= 'pendiente'
        const tiempo_estimado = ''
        const fecha_finalizacion = ''
        const incidencias = new Incidencia({id_incidencia,fecha,estado,  fecha_finalizacion, id_departamento, prioridad, id_aula, id_edificio, descripcion, id_equipo, tiempo_estimado, idTecnico, Calificacion_atencion, tipo_incidencia})   
        incidencias.save()
        res.send('Incidencia creada con éxito')
    } catch (error) {
        res.send('error en el servidor')
        console.log(error)
    }
}
/*

la incidencia desde aqui la creamos
edificio **
aula
tipo de equipo
equipo
descripcion
todas son id, la demas informacion la generare por defecto
*/
 static async createIncidencia(req:Request, res:Response) { //queda pendiente
    try{
        const {id_edificio,id_aula,id_equipo,descripcion} = req.body
        //obtenemos el ultimo registro de la coleccion
        const lastIncidencia = await Incidencia.findOne().sort({$natural:-1}).select('id_incidencia')
        let ultimo = lastIncidencia?.id_incidencia 
         

        res.send('probando')
    }catch(error){
        console.log(error)
        res.send('error en el servidor')
    }
 }
}
export default IncidenciaController