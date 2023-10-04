import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function EditPost(props){
    let db = (await connectDB).db('bugo');
    let result = await db.collection('post').findOne( { _id: new ObjectId(props.params.id)});
    return(
      <div>
        <div className="flex-col">
          <h4 className="text-4xl text-center mt-36 font-medium">부고수정하기</h4>
        </div>

        <form action="/api/editpost" method="POST" className="text-center mt-8 space-y-5">
          <div className="input-class">
            <label htmlFor="registerName">신청자이름 : </label>
            <input className="border" type="text" placeholder="신청자명" name="registerName" required defaultValue={result.registerName}/>
          </div>
          <div className="input-class" style={{display: 'none'}}>
            <label htmlFor="phoneNum">핸드폰번호뒷자리 : </label>
            <input className="border" type="password" placeholder="핸드폰번호뒷자리" name="phoneNum" minLength={4} maxLength={4} />
          </div>
          <div className="input-class">
            <label htmlFor="goinName">고인명 : </label>
            <input className="border" type="text" placeholder="고인명" name="goinName" required defaultValue={result.goinName}/>
          </div>
          <div className="input-class">
            <label htmlFor="address">장례식장 : </label>
            <input className="border" type="text" placeholder="장례식장 주소" name="address" required defaultValue={result.address}/>
          </div>
          <div className="input-class">
            <label htmlFor="balinDate">발인일시 : </label>
            <input className="border" type="date" name="balinDate" defaultValue={result.balinDate} required/>
          </div>
          <div className="input-class" style={{display: 'none'}}>
            <label htmlFor="balinDate">id</label>
            <input className="border" type="text" name="id" defaultValue={props.params.id} required/>
          </div>

          <div>
            <button type="submit" className="border bg-blue-300 p-5">위 내용으로 수정하기</button>
            <button type="submit" className="border bg-blue-300 p-5">부고 삭제하기</button>
          </div>
        </form>
      </div>
    )
  }