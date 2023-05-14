import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {SEO} from "../components/seo"
const Contact =()=>{
 

const [company,Setcompany] = useState('')
const [email,Setemail] = useState('')
const [message,Setmessage] = useState('')

const [sending, setSending] = useState(false);
const [iserr, setIserr] = useState(false);
const [err, setErr] = useState("");
const [issuccess, setIssuccess] = useState(false);
const [success, setSuccess] = useState("");

 const label1 = useRef(null)   
const label2 = useRef(null) 
const label3 = useRef(null) 

const viewLabel1 =(e)=>{
  Setcompany(e.currentTarget.value)  
setIserr(false);
setIssuccess(false);
if(e.currentTarget.value === ''){
    label1.current.classList.remove('show_l_fullname')
}
label1.current.classList.add('show_l_fullname')
}
 
const viewLabel2 =(e)=>{
Setemail(e.currentTarget.value)  
setIserr(false);
setIssuccess(false);
if(e.currentTarget.value === ''){
    label2.current.classList.remove('show_l_email')
} 
label2.current.classList.add('show_l_email')
}

const viewLabel3 =(e)=>{
Setmessage(e.currentTarget.value)  
setIserr(false);
setIssuccess(false);
if(e.currentTarget.value === ''){
    label3.current.classList.remove('show_l_message')
}
label3.current.classList.add('show_l_message')
}

const handleSubmit = async(e)=>{
 e.preventDefault();

 if (company == "") {
   setIserr(true);
   setErr("Please enter your company name.");
   return;
 } else if (email == "") {
   setIserr(true);
   setErr("Please provide your email.");
   return;
 } else if (message == "") {
   setIserr(true);
   setErr("Please lease a message.");
   return;
 } else {
   if (!email.includes("@")) {
     setIserr(true);
     setErr("Please provide a valid email.");
     return;
   } else {
     setSending(true)
const subject = `Customer service: ${company} Enquiry`
await axios.post("https://tallsea-api.herokuapp.com/api/v1/tallseaintegrated/mail",{
email,
company,
subject,
message
}).then((res)=>{
  console.log(res)
setSending(false)
setIssuccess(true)
setSuccess("Message sent.")

setTimeout(()=>{setIssuccess(false)},2000)
}).catch((err)=>{
  console.log(err)
setSending(false)
setIserr(true); 
setErr("Failed to send message")
})
   }
 }

}



    return (
      
      <Layout>
      <section>
       
        {/* -------------------------------------- */}
        <section className="about_title">
          {/* ------------------------------------- */}
          <div className="title">
            <div className="title_txt">Contact Us</div>
            <div className="title_underline"></div>
          </div>
          {/* ---------------------------------- */}
        </section>
        {/* ---------------------------------------- */}

        {/* ------------------------------------ */}
        <section className="contact_div">
          <div className="contact_div1">
            {/* ----------- */}
            <div className="form_alert">
              {iserr && <p className="form_error">{err}</p>}
              {issuccess && <p className="form_success">{success}</p>}
            </div>
            {/* --------------------- */}
            <form className="contact_form" onSubmit={handleSubmit}>
              {/* ------------------------------------ */}
              <label htmlFor="company" className="l_fullname" ref={label1}>
                Company
              </label>
              <input
                type="text"
                name="company"
                id="fullname"
                placeholder="Company name(your company)"
                value={company}
                onChange={viewLabel1}
              />

              {/* -------------------------- */}
              <label htmlFor="email" className="l_email" ref={label2}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email(sombody@email.com)"
                value={email}
                onChange={viewLabel2}
              />
              {/* ------------------------------ */}
              <label htmlFor="message" className="l_message" ref={label3}>
                Message
              </label>
              <textarea 
                name="message"
                id="message"
                placeholder="Drop a message..."
                value={message}
                onChange={viewLabel3}
              />

              <button type="submit" onClick={handleSubmit} disabled={sending}>
                {sending?"Sending...":"Send"}
              </button>
            </form>
          </div>
          <div className="contact_div2">
            <article className="care_title">SEND A MESSAGE</article>
            <article className="care_description">
              {" "}
              Tallsea Integrated Services LTD is interested in providing quality
              services to all our esteem clients. Reach out to us for enquiries
              and suggestions, we will respond as soon as possible.
            </article>
          </div>
  
          <section className="customer_care">
            <article
              className="customer_care_avatar"
            ><StaticImage src="../assets/robot.png"className="customer_care_img" alt="robot" /></article>
          </section>
        </section>

      
      </section>
      </Layout>
    );
}

export default Contact

export const Head=()=>{
  //console.log(props,data)
  const pathname = "contact"
  const excerpt = "Tallsea Integrated Services LTD is interested in providing quality services to all our esteem clients. Reach out to us for enquiries and suggestions, we will respond as soon as possible."
  return(<SEO title={`Contact Us | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={""}/>)
}