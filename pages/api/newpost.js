import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
    if(요청.method == 'POST'){
        console.log(요청.body)
        let db = (await connectDB).db('bugo');
        let result = await db.collection('post').insertOne(요청.body)
        let good = await db.collection('post').findOne({_id: result.insertedId})
        응답.redirect(302, `/list/${good._id}`)
    }
}