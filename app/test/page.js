import Count from "./count"

export default function test(){

    let test = [
        {title: '안녕하세요',
        content: '내용1',
        count:3},
        {title: '제목2',
        content: '내용3',
        count:4},
        {title: '제목3',
        content: '내용3',
        count:5},
    ]

    let title = '홈입니다.'
    return(
        <div>
        <h4 className="text-4xl text-center mt-36 font-medium">{title}</h4>
        <p className=" text-center mt-10">by Dally Cho</p>
        <div className="flex justify-center space-x-6">
            {
                test.map((element,i)=>{
                    return(
                        <div className="" key={i}>
                            <div className=""></div>
                            <div>{element.title}</div>
                            <div>{element.content}</div>
                            <Count test={test} i={i}></Count>
                        </div>
                    )
                })
            } 
            </div>
        </div>
    )
  }