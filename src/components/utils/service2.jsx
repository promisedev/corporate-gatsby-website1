import React from "react"
import { ArrowForward } from '@mui/icons-material';
import { ArrowRightAlt } from '@mui/icons-material';
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

//import service from '../../model/service2.json'
const Service = ()=>{ 

  const data = useStaticQuery(graphql`
    query {
      allContentfulTallseaServicesSchema1 {
        nodes {
          excerpt
          slug
          title
          media {
            gatsbyImage(placeholder: BLURRED, width: 500)
          }
        }
      }
    }
  `);

  const service = data.allContentfulTallseaServicesSchema1.nodes;

const changeBg =(e)=>{
e.currentTarget.classList.add("change_service_bg")
const title =e.currentTarget.children[1]
title.classList.add("change_title_color")
const link = e.currentTarget.children[3].children[0]
 link.classList.add("change_anchor_bg")

}

const removeBg = (e)=>{
e.currentTarget.classList.remove("change_service_bg")
const title =e.currentTarget.children[1]
title.classList.remove("change_title_color")
const link = e.currentTarget.children[3].children[0]
 link.classList.remove("change_anchor_bg")

}
 
    return(
        <section className="serve_div">
    {/* <!-- / --> */}
  <div className="title">
    <div className="title_txt">What We Do</div>
     <div className="title_underline"></div> 
  </div> 
  {/* <!-- / --> */}
<div className="serve_description">
  <h3>Our services covers all aspect of Oil and Gas operations. Over the past years we have worked with several major Local and Multi-national companies here in Nigeria and we have track record of good service delivery. We are highly experienced in handling the following services-</h3></div>
<div className="service_cont">
{service?.map((service,index)=>{

 const image = getImage(service?.media.gatsbyImage)
const desc = service?.excerpt?.substring(0,200)
  return(
    <article className="service_item" onMouseOver={changeBg} onMouseOut={removeBg} key={index}> 

<GatsbyImage image={image} className="service_img" alt={service?.title}/>
<h2 className="service_title">{service?.title}</h2>
<h3 className="service_desc">{desc}...</h3>
<div className="service_more">
    <Link to={`/service/${service?.slug}`} className="service_anchor">Read More <ArrowRightAlt/></Link>
</div>  
</article>
  )
})} 

</div>
</section>
    )
}

export default Service