
import * as React from "react"
import '../styles/global.css'
import "../styles/App.css";
import "../styles/index.css";
import "../styles/career.css";
import "../styles/contact.css";
import "../styles/about.css";
import "../styles/service.css";
import "../styles/expert.css";
import "../styles/header.css";
import "../styles/notfound.css";
import Layout from "../components/layout"
import Body from "../components/body";
import { useEffect } from "react";
 import {SEO} from "../components/seo"

const Home = () => {
  return (
<Layout>
    <section className="home_body">
      
      {/* ------------------------------------- */}
      <Body />
      {/* ------------------------- */}
      
    </section>
    </Layout>
  );
};

export default Home;

export const Head=()=>{
  //console.log(props,data)
  const pathname = ""
  const excerpt = "We are leaders in Remotely Operated Vehicles (ROV) here in Nigeria and in partnership with top International Subsea companies. We specialize in manufacturing and operating Remote Operated Vehicles (ROVs) for our clients, and because we build our ROVs in our own facility , we have the flexibility to customize the equipment base on our client's needs and requirements."
  return(<SEO title={`Home | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={""}/>)
}