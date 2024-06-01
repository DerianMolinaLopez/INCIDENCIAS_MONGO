import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import express from 'express';
import { conectDB } from './database/db/db';
import routerAulas from './routes/AulaRoute';
import routerDepartamento from './routes/DepartamentoRoute';
import routerGarantias from './routes/garantiaRoute';
import routerUsuarios from './routes/usuarioRoute';
import routerTecnicos from './routes/tecnicoRoute';
import incidenciasRoute from './routes/incidenciasRoute';
import edificioRoute from './routes/EdificioRoute';
import routerEquipos from './routes/equiposRoute';
import cambiosRouter from './routes/CambiosRoute';
const app = express();

app.use(cors())
app.use(express.json())
dotenv.config()

app.listen(3000,()=>{
    console.log(colors.bold.blue('server on port 3000'));
})
app.use('/departamentos',routerDepartamento)
app.use('/edificios',edificioRoute)
app.use('/aulas',routerAulas)
app.use('/garantias',routerGarantias)
app.use('/equipos',routerEquipos)
app.use('/usuarios',routerUsuarios)
app.use('/tecnicos',routerTecnicos)
app.use('/incidencias',incidenciasRoute)
app.use('/cambios',cambiosRouter)
conectDB()
//rutas raices de los modelos