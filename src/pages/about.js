import React from "react"
import service from "../model/service1.json";
//import about_slides from "../model/about_slide.json";
import stat from "../model/statistics_array.json";
import expert from "../model/experts.json";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import {useStaticQuery,graphql} from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image";
import Groups2Icon from '@mui/icons-material/Groups2';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {SEO} from "../components/seo"
const About = () => {
  const [position, Setposition] = useState(0);

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
const about_slides = data.allContentfulAboutslides.nodes;

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      counter++;
      if (counter == about_slides?.length) {
        counter = 0;
      }
      Setposition(counter);
    }, 4000);
  }, []);
  // --------------------------------

  const [position2, Setposition2] = useState(0);

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      counter++;
      if (counter == expert.length) {
        counter = 0;
      }

      Setposition2(counter);
    }, 3000);
  }, []);

  return (
<Layout>
    <section>         

      <section className="about_title">
        {/* ------------------------ */}
        <div className="title">
          <div className="title_txt">About Us</div>
          <div className="title_underline"></div>
        </div>
        {/* ---------------------------------- */}
      </section>
      {/* ----------------------------------------- */}
      <section className="about_container">
        <article className="about_cont1">
          <div className="about_image_div">
            {about_slides?.map((slide, index) => {
              const image = getImage(slide?.media.gatsbyImage)
              return (
                <article
                  className="about_slides"
                  style={{

                    left: `${index * 100}%`,
                    transform: `translateX(-${position * 100}%)`,
                  }}
                  key={index}
                >
                  <GatsbyImage image={image} alt="" style={{width:"100%", height:"100%"}}/>
                </article>
              );
            })}

            {/* --------------------------- */}
          </div>
          {/* ------------------------- */}
          <div className="about_desc_div">
            <h1>
              {" "}
              Tallsea Integrated Services LTD is a privately owned company located in Port Harcourt, Rivers State, Nigeria. We are leaders in Remotely Operated Vehicles (ROV) here in Nigeria and in partnership with top International Subsea companies.
              <p>
                Tallsea was established in 2006 to provide Remotely Operated
                Vehicles (ROV) designed and manufactured specifically for the Oil
                and Gas industry.
              </p>
              <p>
                Since inception we have supported many regional marine companies
                for international Oil companie's projects in SouthEast Asia such
                as Exxon-Mobil, Shell, Talisman Energy, Conoco Philips, Murphy
                Oil,Broron Oil and Gas, Pem Offshore, Nigeria etc.
              </p>
            </h1>
          </div>
        </article>

        {/* -------------------------------- */}
        <article className="about_cont2">
          <div className="chose_title">
            {/* --------------------------- */}
            <div className="title">
              <div className="title_txt">Why Choose Us</div>
              <div className="title_underline"></div>
            </div>
            {/* ------------------------------ */}
          </div>
          {/* ------------------------------------- */}
          <div className="chose_desc">
            We specialize in manufacturing and operating Remote Operated
            Vehicles (ROVs) for our clients, and because we build our ROVs in
            our own facility , we have the flexibility to customize the
            equipment base on our client's needs and requirements. Our fleet of
            vehicles are maintained to the highest standards for optimum
            performance and reliability and can be customized for particular
            projects to provide a cost effective service to our clients.
            <p>
              Our management staffs bring with them more than 20 years of
              experience in the Oil and Gas Industry. This assures our clients
              that we possess the technical expertise required for the most
              ardous task.
            </p>
            We are highly experienced in the following-
            {/* <ul class="chose_list">
    <li>Major Pipeline Inspection</li>
<li>Survey Inspection</li>
<li>Maintenance and repair</li>
<li>Construction Support</li>
<li>Seabed Survey</li> 
<li>Pipe Laying</li> 
<li>Platform Inspection</li> 
<li>Freespan Correction</li> 
  </ul> */}
            <div className="serve_list">
              {service.map((service, index) => {
                return (
                  <div className="serve_list_item" key={index}>
                    <span className="span1">
                      <span className="span2"></span>
                    </span>
                    {service.desc}
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
      {/* <!-- --------------------------------- --> */}
      <section className="stats_div">
        <article className="stats_title">
          {/* ---------------------- */}
          <div className="title">
            <div className="title_txt">Our Statistics</div>
            <div className="title_underline"></div>
          </div>
          {/* ----------------------- */}
        </article>
        <article className="stats_cont">
          {stat.map((stats,index) => {
            let stat_count = 0;
            let count = stats.count;
            let mycount = 0;
            return ( 
              <div className="stats_items" key={stats.id}>
                <article className="stats_avatar"   
                >
{index==0&&< Groups2Icon style={{fontSize:"21px", color:"rgb(204, 169, 215)"}}/> ||index==1&&<AssignmentTurnedInIcon style={{fontSize:"21px", color:"rgb(204, 169, 215)"}}/> ||index==2&&<Diversity2Icon style={{fontSize:"21px", color:"rgb(204, 169, 215)"}}/> ||index==3&&<WorkspacePremiumIcon style={{fontSize:"21px", color:"rgb(204, 169, 215)"}}/>  }
                </article>
                <article className="stats_count">{count}</article>
                <article className="stats_title">{stats.name}</article>
              </div>
            );
          })}
        </article>
      </section>

      {/* <!-- ------------expert ---------- --> */}
      {/* <section className="expert_div">
        <article className="expert_title_div">
          {/* ----------------------------- */}
          {/* <div className="title">
            <div className="title_txt">Our Experts</div>
            <div className="title_underline"></div>
          </div> */}
          {/* --------------------------- */}
        {/* </article> */}
        {/* ------------------------------------ */}
        {/* <article className="about_expert_container"> */}
          {/* ------------------------------- */}
          {/* {expert.map((expert, index) => {
            const bio = expert.bio?.substring(0, 250);
            return (
              <div
                className="expert_items"
                key={expert.id}
                style={{
                  left: `${index * 30}%`,
                  transform: `translateX(-${position2 * 45}%)`,
                }}
              > */}
                {/* <article className="avatar" style={{backgroundImage:`url(${expert.avatar})`,
    backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article> */}
                {/* <article className="expert_name">{expert.name}</article>
                <article className="expert_role">{expert.role}</article>
                <article className="expert_bio">{bio}...</article>
              </div>
            );
          })} */}
          {/* -----------------------  */}
        {/* </article> */}
        {/* ---------------------------- */}
        {/* <article className="about_expert_container2">
          {/* ------------------------------- */}
          {/* {expert.map(function (expert, index) {
            const bio = expert.bio?.substring(0, 250);

            return (
              <div
                className="expert_items2"
                key={expert.id}
                style={{
                  left: `${index * 100}%`,
                  transform: `translateX(-${position2 * 100}%)`,
                }}
              > */} 
                {/* <article className="avatar" style={{backgroundImage:`url(${expert.avatar})`,
     backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article> */}
                {/* <article className="expert_name">{expert.name}</article>
                <article className="expert_role">{expert.role}</article>
                <article className="expert_bio">{bio}...</article>
              </div>
            );
          })} */}
          {/* <!-- ---------- --> */}
        {/* </article> */}
      {/* </section> */} 
      {/* ------------------------------------------------- */}

      
    </section>
    </Layout>
  );
};

export default About;

export const Head=()=>{
  //console.log(props,data)
  const pathname = "about"
  const excerpt = "Tallsea Integrated Services LTD is a privately owned company located in Port Harcourt, Rivers State, Nigeria. We are leaders in Remotely Operated Vehicles (ROV) here in Nigeria and in partnership with top International Subsea companies."
  return(<SEO title={`About Us | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={""}/>)
}
