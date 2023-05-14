import React, { useEffect, useState } from 'react';
import expert from '../../model/experts.json'
const Expert = ()=>{

const [position,Setposition]= useState(0)


  useEffect(()=>{
    let counter = 0;
 setInterval(()=>{    
counter++
if(counter == expert.length){counter = 0}

Setposition(counter)

 },3000)

},[])





    return(
        <section className="expert_div">
  <article className="expert_title_div">
 {/* ----------------------------------- */}
 <div className="title">
    <div className="title_txt">Our Experts</div>
     <div className="title_underline"></div> 
  </div> 
  {/* ---------------------------------- */}
  </article>
{/* ----------------------------------------- */}
  <article className="expert_container">
    {/* ---------------------------------------- */}
    {expert.map((expert,index)=>{

const bio = expert.bio?.substring(0,250) 

      return(
        <div className="expert_items" key={expert.id} style={{left:`${index*30}%`,transform : `translateX(-${position * 45}%)`}}>
    {/* <article className="avatar" style={{backgroundImage:`url(${expert.avatar})`,
    backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article> */}
    <article className="expert_name">{expert.name}</article>
    <article className="expert_role">{expert.role}</article>
    <article className="expert_bio">{bio}...</article>
  </div>
      )
    })}
    {/* <-------------------------------- */}
  </article>
  {/* ------------------------------------ */}
  <article className="expert_container2">
    {/* <--------------------------------- */}
    {expert.map(function(expert,index){

   const bio = expert.bio?.substring(0,250) 

    return (<div className="expert_items2" key={expert.id} style={{left:`${index*100}%`,transform : `translateX(-${position * 100}%)` }}>
     {/* <article className="avatar" style={{backgroundImage:`url(${expert.avatar})`,
     backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article> */}
    <article className="expert_name">{expert.name}</article>
    <article className="expert_role">{expert.role}</article>
    <article className="expert_bio">{bio}...</article>
  </div>)
})}
    {/* --------------------------------- */}
  </article>
</section>


    )
}

export default Expert