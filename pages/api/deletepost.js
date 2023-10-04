import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
    if(요청.method == 'DELETE'){
        console.log(요청.body)
        let db = (await connectDB).db('bugo');
        let result = await db.collection('post').deleteOne({_id: new ObjectId(요청.body)})
        console.log(result)
        응답.status(200).json('삭제완료')
    }
}