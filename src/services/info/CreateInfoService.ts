import { Request, Response } from 'express';
import prismaClient from '../../prisma';

interface infoRequest{

    data_lancamento:string;
    documento:string;
    saldo:string;

}

class CreateInfoService{

    async execute({data_lancamento, documento, saldo}:infoRequest){

  const info = await prismaClient.info.create({
            data:{
                data_lancamento: data_lancamento,
                documento: documento,
                saldo: saldo,
            },

        })

        return info;

    }
}

export {CreateInfoService}