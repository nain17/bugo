import Image from "next/image"
import Link from "next/link"

export default function NewPost(){
    let title = ['부고장 국화','부고장 리본','부고장 기본','부고장 근조','부고장 명복','부고장 하늘','부고장 십자가','부고장 리본띠','부고장 국화꽃']
    let title2=['부고장 국화','부고장 리본','부고장 기본']

    return(
      <main>
        <div className="lg:grid lg:grid-cols-3 lg:w-8/12 w-11/12 justify-between gap-4 my-8 m-auto">
        {
            title.map((e,i)=>{
              return(
                <div className="px-8 py-4 border rounded-2xl text-center my-4 shadow-md" key={i}>
                  <img src={`/sample${i}.jpg`} alt="샘플" className="m-auto"/>
                  <div className="flex justify-around items-center my-5">
                    <h3 className="text-base">{title[i]}</h3>
                    <Link href={`/sample/${i}`}><p className=" bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">샘플보기</p></Link>
                  </div>
                  <div className="bg-gray-200 py-2 rounded-xl hover:bg-gray-300 hover:-translate-y-1 ease-in duration-100">부고 만들기</div>
                </div>
              )
            })
          }
          {/* {
            title.map((e,i)=>{
              return(
                <div className="bg-blue-200" key={i}>
                  <div><img src={`/sample${i}.jpg`} alt="샘플" /></div>
                  <div className="flex justify-between">
                    <p className="w-3/4 bg-gray-200">{title[i]}</p>
                    <Link href={`/sample/${i}`}><p className="w-1/4 bg-gray-300">샘플보기</p></Link>
                  </div>
                  <div>부고 만들기</div>
                </div>
              )
            })
          } */}
        </div>
      </main>
    )
  }