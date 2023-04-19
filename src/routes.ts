import {Router, Request, Response} from 'express';
import multer from 'multer';
const multerConfig = multer();
import {CreateUserController} from './controllers/user/CreateUserController';
import {CreateInfoController} from './controllers/info/CreateInfoController'
import {AuthUserController} from './controllers/user/AuthUserController';
import {DetailUserController} from './controllers/user/DetailUserController';
import {isAuthenticated} from './middleware/isAuthenticated';

import uploadConfig from './config/multer'
import { request } from 'http';
import { Readable } from 'stream';
import readline from 'readline';
import prismaClient from './prisma';

interface Infodados{
    data_lancamento:string,
    documento:string,
    saldo:string
}

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//rotas user cadastrar//
router.post("/users", new CreateUserController().handle)

//rota info cadastrar

router.post("/infor", isAuthenticated, multerConfig.single('file'),new CreateInfoController().handle)

//rota user auth
router.post("/session", new AuthUserController().handle)

//buscar informações do usuario
router.get("/userinfor", isAuthenticated, new DetailUserController().handle)


export {router}