
import partners from '../../model/partners.json'
import React from "react"
const Partners =()=>{

    return(
        <section className="partners_container">
<article className="shape_cont" style={{backgroundImage:`url('../../assets/shape2.png')`,
backgroundSize:'110% 100%', backgroundRepeat:'no-repeat', backgroundPositionX:'-5px'}}></article>
{/* --------------------------------- */}
<article className="partner_cont"> 
  <div className="partner_title_div">
    {/* ------------------------------------ */}
 <div className="title">
    <div className="title_txt">Our Partners</div>
     <div className="title_underline"></div> 
  </div> 
  {/* ------------------------------------- */}
  </div>
  {/* --------------------------- */}
  <div className="partner_item_cont">
{partners.map((partner,index)=>{


return(
  <article className="partner_items" style={{backgroundImage:`url(${partner.icon})`,
    backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}} key={index}></article>
)
})}
  </div>

  {/* ------------------------------- */}
  <div className="partner_item_cont2">
{partners.map((partner,index)=>{

  return(
    <article className="partner_items2" style={{backgroundImage:`url(${partner.icon})`,
    backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%',left:`${index*100}%`}} key={index}></article>
  )
})}
  </div>

  {/* ----------------------------------- */}
</article>

{/* ----------------------------------- */}
</section>
    )
}

export default Partners