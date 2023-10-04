import { connectDB } from "@/util/database";

export default async function handler(요청, 응답){
    if(요청.method == 'GET'){
        let db = (await connectDB).db('bugo');
        let result = await db.collection('post').find().toArray();
        응답.status(200).json(result)

        return(
            <div>
                <div className="flex-col">
                    <h4 className="text-4xl text-center mt-36 font-medium">부고만들기</h4>
            
                    <div className="text-center">
                        <div className="text-center mt-20">
                        <h2 className="text-2xl">신청자정보</h2>
                        <div>
                            <form action="" className="flex-col space-y-3">
                            <div>
                                <label htmlFor="name">신청자이름</label>
                                <input className="border" id="registerName" type="text" placeholder="신청자명을 입력해 주세요."/>
                            </div>
                            <div>
                                <label htmlFor="num">핸드폰번호</label>
                                <input className="border" id="phoneNum" type="text" placeholder="숫자 4자리를 입력해 주세요."/>
                            </div>
                            </form>
                        </div>  
                        </div>
                        <div className="text-center mt-20">
                        <h2 className="text-2xl">부고정보</h2>
                        <div>
                            <form action="" className="flex-col space-y-3">
                            <div>
                                <label htmlFor="name">고인명</label>
                                <input className="border" id="goinName" type="text" placeholder="고인명을 입력해 주세요(예:홍길동)"/>
                            </div>
                            </form>
                        </div>   
                        </div>
                
                        <div className="text-center mt-20">
                        <h2 className="text-2xl">장례식장 정보</h2>
                        <div>
                            <form action="" className="flex-col space-y-3">
                            <div>
                                <label htmlFor="num">주소</label>
                                <input className="border" id="address" type="text" placeholder="장례식장 주소를 입력해 주세요"/>
                            </div>
                            </form>
                        </div> 
                        </div>
                        <div className="text-center mt-20">
                        <h2 className="text-2xl">발인 일시</h2>
                        <div>
                            <form action="" className="flex-col space-y-3">
                            <div>
                                <label htmlFor="name">발인 날짜</label>
                                <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                            </div>
                            </form>
                        </div>  
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-700 mt-20 rounded-lg p-8">신청하기</button>
                    </div>
                </div>
            </div>
        )
    }

}