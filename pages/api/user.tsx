import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';
interface ErrorResponseType {
    error: string
} //o tipo da resposta enviada
interface SuccessResponseType {
    _id: string;
    name: string;
    email: string;
    cellphone: string;
    teacher: string;
}
export default async (req: NextApiRequest, res: NextApiResponse<ErrorResponseType | SuccessResponseType>):Promise<void> => {
    if (req.method === "POST") {
        const {name, email, cellphone, teacher} = req.body;
        //pegando tais variaveis do body se enviar tipo 'sexo' tal não sera usada
        if(!name || !email || !cellphone || !teacher){
            res.status(400).json({ error: 'Missing body parameter'});
            return; //mata a aplicação sem se conectar no banco de dados
        }
        const { db } = await connect(); //conecxão com o banco de dados
        const response = await db.collection(`user's`).insertOne({
            name, email, cellphone, teacher,
        }); //todos os dados passados


        res.status(200).json(response.ops[0]);
    }else{
        res.status(400).json({error: "requisição erro, deveria ser POST"});
    }
}; //retorna void, apenas um console
