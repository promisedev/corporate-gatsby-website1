import React from "react"
import social from '../model/social.json'
import contact from '../model/footer_contact.json'
import pages from '../model/f_pages.json'
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import PinDropIcon from "@mui/icons-material/PinDrop";
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {
  HomeOutlined,
  Telegram,
  Facebook,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Footer = ()=>{
let mydate = new Date().getFullYear();  

   return (
     <section
       className="footer_container"
       //     style={{background:`url('../../../assets/footer_bg.png')`,
       // backgrounRepeat:'no-repeat', backgroundSize:'100% 100%'}}
     >
       <article className="footer_item1">
         {/* --------------------------------------------- */}
         <div className="footer_about">
           <article className="footer_abt_logo">
             {" "}
             <StaticImage src="../assets/logo_footer.png" alt="footer_logo" width={800}/>
           </article>
           <article className="footer_abt_desc">
             Tallsea Integrated Services LTD is a privately owned company
             located in Port Harcourt, Rivers State, Nigeria. We are leaders in
             Remotely Operated Vehicles (ROV) here in Nigeria and in
             partnership with top International Subsea companies. Tallsea was
             established in 2006 to provide Remotely Operated Vehicles (ROV)
             designed and manufactured specifically for the Oil and Gas
             industry.
           </article>
         </div>
         {/* ------------------------------------------ */}
         <div className="footer_contact">
           <article className="footer_contact_title">
             <span>Contacts</span>
           </article>
           <article className="footer_contact_items">
             {contact.map((contact, index) => {
               return (
                 <div key={index} className="f_contact_items">
                   <span className="f_cont_icon">
                     {(index == 0 && <CallIcon />) ||
                       (index == 1 && <MailIcon />) ||
                       (index == 2 && <PinDropIcon />)}
                   </span>
                   <a href={contact.link} className="f_contact_list">
                     {contact.desc}
                   </a>
                 </div>
               );
             })}
           </article>
         </div>
         {/* ----------------------------------- */}
         <div className="footer_social">
           <article className="footer_contact_title">
             <span>Social Media</span>
           </article>
           <article className="footer_contact_social">
             {social.map((social, index) => {
               return (
                 <a href={social.link} className="social_icon" key={index}>
                   {(index == 0 && <Facebook className="head_social_icon" style={{color:"black", fontSize: "12px"}}/>) ||
                    (index == 1 && <Twitter className="head_social_icon" style={{color:"black",fontSize: "12px"}}/>) ||
                    (index == 2 && (
                      <LinkedIn className="head_social_icon"style={{color:"black", fontSize: "12px"}} />
                    ))}
                 </a>
               );
             })}
           </article>
         </div>
       </article>

       {/* -------------------------------------- */}
       <article className="footer_map">
         <div className="footer_map_cont">
           <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127217.68397180639!2d6.983042658203125!3d4.846598500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd9e27bb3201%3A0xd7254633d251d1a0!2sTallsea%20Integrated%20Services%20LTD!5e0!3m2!1sen!2sng!4v1646178677006!5m2!1sen!2sng"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
           ></iframe>
         </div>
       </article>

       {/* ----------------------------- */}
       <article className="footer_item2">
         <div className="footer_pages">
           {pages.map((page, index) => {
             return (
               <Link to={page.link} className="single_pages" key={index}>
                 {page.name}{" "}
               </Link>
             );
           })}
         </div>
         <div className="footer_copy">
           &copy; {mydate} tallsea integrated services LTD. All rights reserved.
         </div>
       </article>
     </section>
   );
}

export default Footer