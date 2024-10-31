import express, { NextFunction , Request,Response} from 'express';
const router = express.Router();
router.get('/',(req:Request, res:Response, next:NextFunction) =>{
  res.send('this is responr for app admin route')
})

export {router as adminRoute}