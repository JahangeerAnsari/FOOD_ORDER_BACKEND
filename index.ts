import express from "express";
import {adminRoute,vandorRoute} from './routes'
const app = express();

app.use('/admin',adminRoute)


app.listen(8100,() =>{
 console.log("App listening on port :81000 ");

})