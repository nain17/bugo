import Image from "next/image"
import 이미지1 from '/public/s0/top-img.jpg'
import 이미지2 from '/public/s0/main-img.jpg'
import 이미지3 from '/public/s0/bt-img.jpg'
import KakaoMap from "./Kakaomap"
import Script from "next/script"

export default function Sample(props){
    const KAKAOMAP_API_KEY = '91e8dea0bcf9e8b2ede7a67b30b73d3a'
    return(
      <div>
         <div className=" space-y-10 mb-20">
              <section className="text-center">
                <Image src={이미지1} alt="" className="lg:w-3/12 object-cover m-auto"/>
                <Image src={이미지2} alt="" className="lg:w-2/12 w-7/12 object-cover m-auto"/>
                <p className="text-lg my-8">故김민수님께서 11월 25일 별세하셨음을<br/>삼가 알려 드립니다.<br/>가시는길 깊은 애도와 명복을 빌어주시길<br/>진심으로 바랍니다.</p>
                <Image src={이미지3} alt="" className="lg:w-3/12 m-auto"/>
              </section>
    
              <section>
                <ul className="space-y-2 text-start m-auto max-w-md pl-5">
                    <li><span className="font-bold">고인:</span> 주영근 (향년 94세)</li>
                    <li><span className="font-bold">상주:</span> 주경철</li>
                    <li><span className="font-bold">별세:</span> 2023년 07월 25일 (화)</li>
                    <li><span className="font-bold">발인:</span> 2023년 07월 27일 (목) 10시 00분</li>
                    <li><span className="font-bold">빈소:</span> 중앙보훈병원 장례식장 306호(3층)</li>
                    <li><span className="font-bold">장지:</span> 현충원</li>
                </ul>
              </section>
              
              <section>
                <div className="text-center">
                    <h2>장례식장 오시는길</h2>
                    <KakaoMap KAKAOMAP_API_KEY={KAKAOMAP_API_KEY}></KakaoMap>
                    <ul className="flex space-x-3 justify-center">
                      <li>티맵</li>
                      <li>카카오맵</li>
                      <li>카카오내비</li>
                    </ul>
                </div>
              </section>

              <section className=" text-center">
                <p>예를 갖추어 자리를 마련해야 마땅하나, 단체조문을 사양하고 가족들과 함께 고인을 잘 보내드리려 합니다.<br/>
                마음으로 따뜻한 위로 부탁드리며, 고인의 명복을 빌어주시기 바랍니다.
                </p>
              </section>

              <section className=" grid">
                <h2 className="text-center">마음전하는 곳</h2>
                <button className=" m-4 rounded-2xl border-2">계좌번호 보기</button>
              </section>
         </div>
      </div>
    )
    
  }