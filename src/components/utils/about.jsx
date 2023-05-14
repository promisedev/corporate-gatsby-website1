import React,{ useEffect } from 'react'
import { useState } from 'react'
//import about_slide from '../../model/about_slide.json'
import {useStaticQuery,graphql} from "gatsby"
import {GatsbyImage,getImage} from "gatsby-plugin-image"

 const About = ()=>{
const [position,Setposition]=useState(0)

const data = useStaticQuery(graphql`
    query {
      allContentfulAboutslides {
        nodes {
          media {
            gatsbyImage(quality: 100, width: 800, placeholder: BLURRED)
          }
        }
      }
    }
  `)
const about_slide = data.allContentfulAboutslides.nodes;
useEffect(()=>{
let counter =0;
setInterval(()=>{
counter++
if(counter == about_slide?.length){counter =0}
Setposition(counter)

},5000)

},[])


    return(
        <section className="about_div">
 <article className="about_desc"> 
     {/* --------------------------------- */}
  <div className="title">
    <div className="title_txt">About Our Industry</div>
     <div className="title_underline"></div> 
  </div> 
  {/* ----------------------------------- */}
  
  <div className="about_item">
  <h2> 
  Tallsea Integrated Services LTD is a privately owned company located in Port Harcourt, Rivers State, Nigeria. We are leaders in Remotely Operated Vehicles (ROV) here in Nigeria and in partnership with top International Subsea companies.
  <p>Tallsea was established  in 2006 to provide Remotely Operated Vehicles (ROV) designed and manufactured
  specifically for the Oil and Gas industry.</p>
  <p>Since inception we have supported many regional marine companies for international Oil companie's projects
  in SouthEast Asia such as Exxon-Mobil, Shell, Talisman Energy, Conoco Philips, Murphy Oil,
  Broron Oil and Gas, Pem Offshore, Nigeria etc.</p>
</h2>
  </div>  
 </article>

{/* ---------------------------------------------- */}
 <article className="about_img">
   <div className="img_slide" >

{about_slide?.map((slide,index)=>{

const image = getImage(slide.media.gatsbyImage)
   return(
      <div className='img_slide_item'style={{
       left:`${index*100}%`, transform: `translateX(-${position*100}%)`, backgroundPosition:'-3px'
      }} key={index}>
      <GatsbyImage image={image} alt="" className='img_slide_img'/>

      </div>
   )
})}


   </div>
    
 </article>   
</section>
    )
 }

 export default About