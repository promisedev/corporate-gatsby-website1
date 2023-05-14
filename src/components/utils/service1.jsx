import React from "react"
import service from '../../model/service1.json'

const Service =()=>{

 
    return(
        <section className="serve_div">
    {/* ------------------------------- */}
  <div className="title">
    <div className="title_txt">Service Overview</div>
     <div className="title_underline"></div> 
  </div> 
  {/* ---------------------------------- */}
<div className="serve_description"><h3> Tallsea Integrated Services Ltd is an Oil and Gas Exploration servicing company, and we serve those in the Oil and Gas Industry. We are highly experienced in conducting services like the following-</h3>
</div>
<div className="serve_list">
     
{  service.map((service,index)=>{

  return(
    <div className='serve_list_item' key={index}>
      <span className='span1'><span className='span2'></span></span>{service.desc}
    </div>
  )
})}

</div>
</section>  
    )
}

export default Service