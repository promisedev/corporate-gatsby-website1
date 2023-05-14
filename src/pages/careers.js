
import React from "react";

import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import Layout from "../components/layout"
import image from "../assets/nojob.png"
import {SEO} from "../components/seo"
const Career = ()=>{


const handleSubmit =(e)=>{
    e.preventDefault()
}


    return (
      <Layout>
      <section>
        <section className="career_search_div">
          <form action="" className="search_form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for job ..."
            />
            <button type="submit" onClick={handleSubmit}>
              {" "}
              <SearchIcon />
            </button>
          </form>
        </section>
        {/* ---------------- */}
        <section className="about_title">
          {/* ---------------------- */}
          <div className="title">
            <div className="title_txt">Careers</div>
            <div className="title_underline"></div>
          </div>
          {/* ----------------------------- */}
        </section>
 
        <section className="job_cont">
          <article className="no_job_msg_div">
            <article className="job_msg1">
              <img src={image} alt="icon-image" />
            </article>
            <article className="job_msg2">
              We are currently not recruiting at the moment
            </article>

            {/* --------------------- */}
            {/* <div className="job_img">
        <img src="../../../assets/nojob.png" alt="icon-image"/>
    </div> */}
          </article>
        </section>

      </section>
      </Layout>
    );
}

export default Career

export const Head=()=>{
  //console.log(props,data)
  const pathname = "careers"
  const excerpt = "At Tallsea Integrated Services Limited, we have a growing community of leading future experts that contribute to the growth of the oil & gas sector, join us!"
  return(<SEO title={`Careers | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={""}/>)
}