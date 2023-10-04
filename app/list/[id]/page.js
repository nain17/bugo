import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function DetailList(props){
    let db = (await connectDB).db('bugo');
    let result = await db.collection('post').findOne( { _id: new ObjectId(props.params.id)});
    console.log(props)
    return(
        <div className="text-center m-10">
            <div className="flex justify-center space-x-9">
                <h4>모바일부고장보기</h4>
                <h4>모바일감사장보기</h4>
            </div>
            <div className="text-center m-10">
                <h4>고인명 : {result.registerName}</h4>
                <p>장례식장 : {result.goinName}</p>
                <p>빈소 : {result.address}</p>
                <p>발인일 : {result.balinDate}</p>
            </div>
            <Link href={`/edit/${props.params.id}`}><button className="border p-5 bg-blue-300">내용 수정하기</button></Link>
        </div>
    )
  }