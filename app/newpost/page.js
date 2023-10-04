export default function NewPost(){
    let title = '부고만들기'
    return(
      <main>
        <div className="flex-col">
          <h4 className="text-4xl text-center mt-36 font-medium">{title}</h4>
  
          <div className="text-center mt-20">
            <h2 className="text-2xl">신청자정보</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
                <div>
                  <label htmlFor="num">핸드폰번호</label>
                  <input className="border" id="num" type="text" placeholder="숫자 4자리를 입력해 주세요."/>
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
                  <input className="border" id="name" type="text" placeholder="고인명을 입력해 주세요(예:홍길동)"/>
                </div>
                <div>
                  <label htmlFor="num">연세</label>
                  <input className="border" id="num" type="text" placeholder="고인의 연세를 입력해 주세요(예:85)"/>
                </div>
                <div>
                  <label htmlFor="num">상주</label>
                  <textarea className="border" id="num" type="text" placeholder="상주이름을 입력해 주세요(예: 아들 홍영길)"/>
                </div>
              </form>
            </div>   
          </div>
  
          <div className="text-center mt-20">
            <h2 className="text-2xl">장례식장 정보</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">장례식장명</label>
                  <input className="border" id="name" type="text" placeholder="장례식장명을 입력해 주세요"/>
                </div>
                <div>
                  <label htmlFor="num">빈소</label>
                  <input className="border" id="num" type="text" placeholder="빈소이름을 입력해 주세요"/>
                </div>
                <div>
                  <label htmlFor="num">주소</label>
                  <input className="border" id="num" type="text" placeholder="장례식장 주소를 입력해 주세요"/>
                </div>
              </form>
            </div> 
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">장지 정보</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">임종 일시</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">발인 일시</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">안내하는 글</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">마음전하는 곳</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">신청자이름</label>
                  <input className="border" id="name" type="text" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl">서비스이용약관 동의</h2>
            <div>
              <form action="" className="flex-col space-y-3">
                <div>
                  <label htmlFor="name">개인정보 수집/이용 동의</label>
                  <input className="border" id="name" type="checkbox" placeholder="신청자명을 입력해 주세요."/>
                </div>
              </form>
            </div>  
          </div>

          <button className="bg-sky-500 hover:bg-sky-700 mt-20 rounded-lg p-8">신청하기</button>
        </div>
      </main>
    )
  }