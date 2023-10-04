'use client'

import Link from "next/link"

export default function ListItem({result}){
    return(
        <div>
            { result.map((element, i)=>
                <div key={i} className="bugo-list-card flex justify-center border bg-blue-200 space-y-5">
                <Link href={`/list/${element._id}`} className="flex justify-around w-8/12">
                    <h4>{element.registerName}</h4>
                    <p>{element.goinName}</p>
                    <p>{element.address}</p>
                    <p>{element.balinDate}</p>
                </Link>
                <button onClick={(e)=>{
                    fetch('/api/deletepost', {
                        method: 'DELETE',
                        body: element._id,
                    }).then((r)=> r.json())
                    .then(()=>{
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(() => {
                            e.target.parentElement.style.display = 'none';
                        }, 1000);
                    })
                }}>🗑️</button>
                </div>
            )}
        </div>
    )
}