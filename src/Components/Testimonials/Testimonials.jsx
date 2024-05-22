import React, { useEffect, useState } from 'react'
import Data from'./Data.js'
import './Testimonials.css'


function Testimonials() {
    const [people]=useState(Data)
    const[Index,Setindex]=useState(0)

    useEffect(()=>{
        const lastindex = people.length-1;
        if(Index<0){
            Setindex(lastindex)
        }
        if(Index > lastindex){
            Setindex(0)
        }
    },[Index,people])

    useEffect(()=>{
        const slider = setInterval(()=>{
            Setindex(Index+1);
        },5000)
        return(()=>{
            clearInterval(slider)
        })
    },[])
  return (
    <section className='Section' >
        <div className="title">
            <h2>Testimonials</h2>
        </div>
        <div className="section-center">
            {people.map((item,Indexpeople)=>{
                const {id,Title,image,name,quote}=item;
                let position="nextslide";
                if(Indexpeople===Index){
                    position="activeslide"
                }
                if(Indexpeople===Index-1 || (Index===0 && Indexpeople===people.length-1)){
                    position="lastslide"
                }

                return(
                    <article  className={position}  key={id} >
                        <img src={image} alt="" />
                        <h4>{name}</h4>
                        <p>{Title}</p>
                        <p>{quote}</p>
                    </article>
                )
            })}
            <button className='Prev' onClick={()=> Setindex(Index-1)}  >
                <i className="fas fa-arrow-right" ></i>
            </button>
            <button className='Prev' onClick={()=> Setindex(Index-1)} >
            <i className="fas fa-arrow-left" ></i>
            </button>
        </div>
    </section>
  )
}

export default Testimonials