import * as dotenv from 'dotenv';

export const getEnvironment = () =>{
    dotenv.config({
        override:true,
        path: `helper/env/.env.prod`
    })
}