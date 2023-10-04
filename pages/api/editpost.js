import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
    if(요청.method == 'POST'){
        console.log(요청.body)
        let db = (await connectDB).db('bugo');
        let result = await db.collection('post').updateOne({_id: new ObjectId(요청.body.id)},
            {$set : 요청.body}
        )
        응답.redirect(302, `/list/${요청.body.id}`)
        
    }
}