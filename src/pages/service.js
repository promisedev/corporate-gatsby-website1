// import Footer from "./footer"
// import Navigation from "./navigation"
// import {useParams} from 'react-router-dom'
import React,{ useEffect, useState } from "react"
//import React from "react"
//import service from '../model/service2.json'
import portfolio from '../model/portfolio.json'

import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import Layout from "../components/layout"
// import {Helmet} from 'react-helmet'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {GatsbyImage,getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
import s_bg from '../assets/services.png'
import {SEO} from "../components/seo"
const Service =({data})=>{


  const single_service = data.contentfulTallseaServicesSchema1;
  const image = getImage(single_service?.media.gatsbyImage)
const portfo = data.allContentfulPortfolio.nodes
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

  useEffect(()=>{
    window.scrollTo(0,0)
},[])

let [position,SetPosition]= useState(0)

let counter = 0;
useEffect(()=>{


setInterval(()=>{
    counter++;
    if(counter == portfo?.length){counter=0}
    SetPosition(counter)
},3000)

},[])
 
const prev =()=>{
    let l_counter = position
    l_counter--
  if(l_counter < 0){l_counter = portfo?.length-1}
    SetPosition(l_counter)
}
const next =()=>{
  let l_counter = position
    l_counter++
if(l_counter == portfo?.length){l_counter = 0 }
    SetPosition(l_counter)
    
}






// console.log(portfolio);

    return (
      <Layout>
      <section>
        
        <section
          className="serv_title"
          style={{
            backgroundImage: `url(${s_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "800px 100%",
          }}
        >
          {/* ------------------------------------ */}
          <div className="title">
            <div className="title_txt serv_txt">Our Services</div>
            {/* <div className="title_underline"></div>  */}
          </div>
          {/* ----------------------------------- */}
        </section>
        {/* --------------------------------------- */}
        <section className="serv_container">
          <article className="serv_item_one">
            <div className="serv_item_image">
              <GatsbyImage
                className="serv_item_img"
                image={image}
                as="article"
                alt=""
              />
            </div> 
            {/* ----------------------------------------------- */}
            <div className="serv_item_desc">
              <article className="overview_title" >
                {single_service.title}
              </article>
              <article className="overview_desc">
              {renderRichText(single_service.description, options)}
              </article>
            </div>
          </article>
          {/* ------------------------------------ */}
          <article className="serv_item_two">
            <div className="portfolio_txt">Portfolio</div>
            <article className="prev_next">
              <div className="prev" onClick={prev}>
                <ArrowLeft />
              </div>
              <div className="next" onClick={next}>
                {" "}
                <ArrowRight />
              </div>
            </article>
            <div className="portfolio_img">
              {portfo?.map((port, index) => {
                const p_image = getImage(port?.media.gatsbyImage)
                return (
                  <article
                    className="port_slide"
                    style={{
                      left: `${index * 100}%`,
                      transform: `translateX(-${position * 100}%)`,
                    }}
                  ><GatsbyImage image={p_image} alt="" style={{width:"100%", height:"100%"}}/></article>
                );
              })}
            </div>

            <div className="portfolio_desc">
              <article className="p_desc_title">Why Chose Tallsea</article>
              <article className="p_desc_desc">
                {portfolio[0].port_desc}
              </article>
              <article className="p_desc_list">
                {portfolio[0].list.map((list, index) => {
                  return (
                    <div className="serve_list_item" key={index}>
                      <span className="span1">
                        <span className="span2"></span>
                      </span>
                      {list.list}
                    </div>
                  );
                })}
              </article>
            </div>
          </article>
        </section>

       
      </section>
      </Layout>
    );
}

export default Service



export const query = graphql`
  query ($slug: String) {
    contentfulTallseaServicesSchema1(slug: {eq: $slug}) {
      description {
        raw
      }
      media {
        gatsbyImage(width: 1000, quality: 100, placeholder: BLURRED)
        publicUrl
      }
      title
      excerpt
    }
    allContentfulPortfolio {
      nodes {
        media {
          gatsbyImage(quality: 100, width: 1200, placeholder: BLURRED)
          
        }
      }
    }
  }
`
export const Head=({data,...props})=>{
  //console.log(props,data)
  const pathname = props.location.pathname
  const {title,excerpt,media:{publicUrl}}= data.contentfulTallseaServicesSchema1
  return(<SEO title={`Services | ${title} | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={publicUrl}/>)
}