'use client'
import { useState } from "react"

export default function Count({test, i}){
    let [내용, 내용바꿈]=useState(test.map(e=>{return(e.count)}))

    return(
        <div>
            <span>{내용[i]}</span>
            <button onClick={()=>{
                
                let copy = [...내용]
                copy[i]++
                console.log(copy[i])
                내용바꿈(copy)
            }}>+</button>
        </div>
    )
}