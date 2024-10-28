import express from "express";
const app = express();
app.use('/',(req, res) => {
 res.send('Hello from Food App')
})
app.listen(8000,() =>{
 console.log("App listening on port :8000 ");
 
})