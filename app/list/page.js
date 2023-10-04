import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List(){
    let base = [
      {
        registerName : '홍길동',
        goinName : '홍영길',
        address : '대전 중앙병원 5호 분향실',
        balinDate : '7월23일',
      }
    ]
    let db = (await connectDB).db('bugo');
    let result = await db.collection('post').find().toArray();
    result.map((element)=>{
      element._id = element._id.toString();
      return element
    })
    return(
      <div className="flex-col">
        <div className="text-center">
          <h4 className="text-4xl mt-36 font-medium">부고조회</h4>
          <p className="mt-10">by Dally Cho</p>
        </div>

        <div className="">
          <ListItem result={result}/>
        </div>
      </div>
    )
  }