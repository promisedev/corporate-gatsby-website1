import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
//import slides from '../../model/slides.json'
import {useStaticQuery,graphql} from "gatsby"
import {GatsbyImage,getImage} from "gatsby-plugin-image"

const Slides = ()=>{

const data = useStaticQuery(graphql`
  query {
    allContentfulTallseaServicesschema2 {
      nodes {
        bg {
          gatsbyImage(placeholder: BLURRED,quality: 100, width: 1200)
        }
        excerpt
        ref
        overview
      } 
    }
  }
`);
const slides = data.allContentfulTallseaServicesschema2.nodes;
//console.log(data)

const [position,Setposition]= useState(0)


useEffect(()=>{
    let counter = 0;
 setInterval(()=>{    
counter++
if(counter == slides?.length){counter =0}
Setposition(counter)

 },5000)

 

},[])

// console.log(position);

    return(
        <section className="slide_div">
    
{ slides?.map((slide,index)=>{
const image = getImage(slide?.bg.gatsbyImage);
const desc = slide?.excerpt?.substring(0,150)
    return(
        <article className="slides" style={{ top:`${index*100}%`,transform:`translateY(-${position*100}%)` }}  key={index}>
<GatsbyImage image={image} className="slides_back" alt=""/>
{/* ------------------------------------------ */}
<article className="slide_text">  
    <div className="txt txt1">{slide?.overview}</div>
    <div className="txt_description">{desc}...</div>
<div className="slide_btn"><Link to={`/portfolio/${slide.ref}`}>Learn More</Link> </div>
          
</article>

{/* ----------------------------------------------- */}

</article>
    )
})}

{/* ---------------------------------------- */}

</section>
    )
}

export default Slides



// https://wenco.com.au/wp-content/uploads/2021/02/Image6-min-1-scaled.jpg

// https://www.pgs.com/contentassets/fcdda3ee2c5547ba8516e859b9564e9a/golfbanner_ramformtitan-860px.jpg







