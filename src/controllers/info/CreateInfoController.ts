import {Request, Response} from 'express';
import {CreateInfoService} from '../../services/info/CreateInfoService'
import { json } from 'stream/consumers';




class CreateInfoController{
  
    async handle(req:Request, res:Response){
        const {data_lancamento, documento, saldo} = req.body;

        const createInfoService = new CreateInfoService();

        const info = createInfoService.execute({

            data_lancamento,
            documento,
            saldo

        })


           
    
           return res.json({ok:true})
           
        }

   

    }



export {CreateInfoController}