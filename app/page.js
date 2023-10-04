export default function Home(){
  let title = '홈입니다.'

  let base = [
    {
      registerName : '홍길동',
      goinName : '홍영길',
      address : '대전 중앙병원 5호 분향실',
      balinDate : '7월23일',
    }
  ]
  return(
    <div>
      <h4 className="text-4xl text-center mt-36 font-medium">{title}</h4>
      <p className=" text-center mt-10">by Dally Cho</p>
    </div>
  )
}