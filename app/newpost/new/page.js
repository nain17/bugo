export default function NewPost(){

    return(
      <div>
        <div className="flex-col">
          <h4 className="text-4xl text-center mt-36 font-medium">부고만들기</h4>
        </div>

        <form action="api/newpost" method="POST" className="text-center mt-8 space-y-5">
          <div className="input-class">
            <label htmlFor="registerName">신청자이름 : </label>
            <input className="border" type="text" placeholder="신청자명" name="registerName" required/>
          </div>
          <div className="input-class">
            <label htmlFor="phoneNum">핸드폰번호뒷자리 : </label>
            <input className="border" type="password" placeholder="핸드폰번호뒷자리" name="phoneNum" minLength={4} maxLength={4} required/>
          </div>
          <div className="input-class">
            <label htmlFor="goinName">고인명 : </label>
            <input className="border" type="text" placeholder="고인명" name="goinName" required/>
          </div>
          <div className="input-class">
            <label htmlFor="address">장례식장 : </label>
            <input className="border" type="text" placeholder="장례식장 주소" name="address" required/>
          </div>
          <div className="input-class">
            <label htmlFor="balinDate">발인일시 : </label>
            <input className="border" type="date" name="balinDate" defaultValue={'2023-07-25'} required/>
          </div>
          <button type="submit" className="border bg-blue-300 p-5">신청하기</button>
        </form>
      </div>
    )
  }