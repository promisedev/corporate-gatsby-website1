import React from "react"
import Layout from '../components/layout'
//import slides from '../model/slides.json'
import { useEffect, useRef, useState } from 'react'
//import { useParams } from 'react-router-dom'
//import {Helmet} from 'react-helmet'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {GatsbyImage,getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {SEO} from "../components/seo"
const Service = ({...props})=>{
  //console.log( props)
  const {data,pageContext}= props
  const slides = data.allContentfulTallseaServicesschema2.nodes;
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        )
     },
    },
  }
  // --------------------------------------
const id =  pageContext?.slug
const service = useRef(null) 
// const [s_id, Sets_id] = useState()

    useEffect(()=>{

     if(id == "fabrication"){
        const current = service.current.parentElement.children[0]
const position = current.getBoundingClientRect().top-20
window.scrollTo(0,position)


     }else if(id == "survey"){
         const current = service.current.parentElement.children[1]
    const position = current.getBoundingClientRect().top-20
window.scrollTo(0,position)
     }
else if(id == "inspection"){
         const current = service.current.parentElement.children[2]
    const position = current.getBoundingClientRect().top-20
window.scrollTo(0,position)
     }
   else if(id == "rov"){
         const current = service.current.parentElement.children[3]
    const position = current.getBoundingClientRect().top-20
window.scrollTo(0,position)
     }


        
    },[])

    return (
      <Layout>
        <section className="services2_body">
          <h1 className="services_heading">Our Oil & Gas Services</h1>

          <article className="services_body">
            {slides?.map((slide, index) => {
              const image = getImage(slide?.media.gatsbyImage)
              return (
                <article
                  className="single_service_item"
                  key={index}
                  ref={service}
                  data-id={slide?.ref}
                >
                  <div className="services_item_desc">
                    <h2>{slide?.overview}</h2>
                    <h3>{renderRichText(slide.description, options)}</h3>
                  </div>
                  <div className="services_item_image">
                    <GatsbyImage image={image} alt="" />
                    <div></div>
                  </div>
                </article> 
              );
            })}
          </article>
          
        </section>
      </Layout>
    );
}

export default Service

export const query = graphql`
  query {
    allContentfulTallseaServicesschema2 {
      nodes {
        description {
          raw
        }
        excerpt
        ref
        slug
        overview
        media {
          gatsbyImage(quality: 100, placeholder: BLURRED, width: 900)
          publicUrl
        }
      }
    }
  }
`
export const Head=({data,...props})=>{
  //console.log(props,data)
  const pathname = props.location.pathname
 const excerpt = "We at Tallsea Integrated Services Ltd, our goal is geared toward adquate service delivery to all our clients."
  return(<SEO title={`Portfolio | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={""}/>)
}