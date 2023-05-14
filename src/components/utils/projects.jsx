import React, { useEffect, useState } from 'react';
//import projects from '../../model/projects.json'
import {useStaticQuery,graphql} from "gatsby"
import {GatsbyImage,StaticImage,getImage} from "gatsby-plugin-image"
import img from '../../assets/gear.png'
const Projects =()=>{

    const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        nodes {
          media {
            gatsbyImage(placeholder: BLURRED, quality: 100, width: 500)
          }
          vessel
          title
          rov
          location
        }
      }
    }
  `)

  const projects = data.allContentfulProjects.nodes;

    const [position,Setposition]= useState(0)
const [position2,Setposition2]= useState(0)

// useEffect(()=>{
//     let counter = 0;
//  setInterval(()=>{    
// counter++
// if(counter == (projects.length)+9){setTimeout(()=>{counter = 0},1000);}

// Setposition(counter)

//  },5000)

// },[])*uncomment this code when their re more than 12 projects

useEffect(()=>{
    let counter = 0;
 setInterval(()=>{    
counter++
if(counter == projects?.length){counter = 0}

Setposition2(counter)

 },3000)

},[])



    return(
        <section className="project_div">
    <article className="background_ani">
      
{/* <!-- ---------------- --> */}
<div className="gear_cont gear1" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear2" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear3" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear4" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear5" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear6" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}
<div className="gear_cont gear7" style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeaet', backgroundSize:'100% 100%'}}></div> 
{/* <!-- ---------------- --> */}

    </article>
    {/* <!-- ------------------------------- --> */}
    <article className="project_cont">
        <div className="project_title_div">
            {/* <!-- / --> */}
  <div className="title">
    <div className="title_txt">Our Projects</div>
     <div className="title_underline"></div> 
  </div> 
  {/* <!-- / --> */}
        </div>
        <div className="project_container">
            {/* <!--  --> */} 
{projects?.map((project,index)=>{
const image = getImage(project?.media.gatsbyImage)
    return(
        <article className="project_items" style={{left:`${index*25}%`,transform: `translateX(-${position*45}%)`}}  key={index}>
     <div className="project_desc_img"><GatsbyImage className="project_desc_image"  image={image} alt="" /></div>
     <div className="project_desc_cont">
         <article className="project_title">{project.title}</article>
        <article className="project_desc">
         <p><b>Location:</b>  {project?.location}</p>
         <p><b>ROV System:</b>  {project?.rov}</p>
         <p><b>Vessel:</b>  {project?.vessel}</p>
         </article>
            
     </div>
    </article>
    )
})}
{/* ----------------------------------------------- */}

</div>
{/* <!-- ----------------------------- --> */}
<div className="project_container2">
            {/* <!--  -----------------> */}
{projects.map((project,index)=>{
const image = getImage(project?.media.gatsbyImage)
    return(
        <article className="project_items2" style={{left:`${index*100}%`,transform: `translateX(-${position2*100}%)`}} key={index}>
    <div className="project_desc_img" >
    <GatsbyImage className="project_desc_image"  image={image} alt="" />
    </div>
    <div className="project_desc_cont">
        <article className="project_title">{project?.title}</article>
       <article className="project_desc">
       <p><b>Location:</b>  {project?.location}</p>
         <p><b>ROV System:</b>  {project?.rov}</p>
         <p><b>Vessel:</b>  {project?.vessel}</p>
       </article>
         
     </div>
    </article>
    )
})}
{/* ---------------------------------- */}

</div>
        {/* ----------------------------- */}
    </article>
</section>

    )
}

export default Projects