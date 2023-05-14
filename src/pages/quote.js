import React,{ useState, useEffect, useMemo } from "react";
import {
    equipment_body,
  quote_body,
  quote_desc,
  quote_image,
  quote_form,
  form_div,
  quote_alert,
  quote_error,
  quote_success,
} from "../components/utils/equipment.module.css";
import Layout from "../components/layout"
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {GatsbyImage,getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
//import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {SEO} from "../components/seo"
// import {Helmet} from 'react-helmet'
// let seo_title ;
// let seo_desc;
// let seo_pathname;


const Quote = ({data,...props}) => {
  
  const item = data.contentfulTallseaEquipmentsSchema;
  
  const slug = item?.slug
  const image = getImage(item?.media.gatsbyImage)
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
  //const [item, setItem] = useState({});
  const [slugs, setSlugs] = useState(slug);

  // useMemo(() => {
  //   setSlugs(slug);
  // }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // const selected = data.filter((data) => data.slug == slugs);
    // console.log(selected);
    // !selected && history("/404");

    // setItem(...selected);
  }, []);

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [iserr, setIserr] = useState(false);
  const [err, setErr] = useState("");
  const [issuccess, setIssuccess] = useState(false);
  const [success, setSuccess] = useState("");

  const handleInputs = (e) => {
    setIserr(false);
    setIssuccess(false);
    const name = e.currentTarget.name;
    switch (name) {
      case "company":
        setCompany(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "message":
        setMessage(e.currentTarget.value);
        break;
    }
  };

  const submitQuote = async (e) => {
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
        setSending(true);
        const subject = `Quote request for ${item.title}`;
        await axios
          .post(
            "https://tallsea-api.herokuapp.com/api/v1/tallseaintegrated/mail",
            {
              email,
              company,
              subject,
              message,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            setSending(false);
            setIssuccess(true);
            setSuccess("Message sent.");
            setTimeout(() => {
              setIssuccess(false);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            setSending(false);
            setIserr(true);
            setErr("Failed to send quote");
          });
      }
    }
  };

  return (
    <Layout>
    <section className={equipment_body}>
     
      {/* -------------------------------- */}
      <article className={quote_body}>
        <div className={quote_desc}>
          <GatsbyImage
            image={image}
            alt={item?.title}
            className={quote_image}
          />
          <h3>{item?.title}</h3>
          <p>{renderRichText(item.description, options)}</p>
        </div>

        {/* ---------------------form */}
        <div className={quote_form}>
          <div className={quote_alert}>
            {iserr && <p className={quote_error}>{err}</p>}
            {issuccess && <p className={quote_success}>{success}</p>}
          </div>
          <form onSubmit={submitQuote}>
            <h2>Request a quote</h2>
            {/* ------------------------------- */}
            <div className={form_div}>
              <input
                type="text"
                name="company"
                placeholder="Company name(your company)"
                onChange={handleInputs}
              />
            </div>
            {/* ---------------------------- */}
            <div className={form_div}>
              <input
                type="text"
                name="email"
                placeholder="Email(sombody@email.com)"
                onChange={handleInputs}
              />
            </div>
            <div className={form_div}>
              <textarea
                type="text"
                name="message"
                placeholder="Drop a message..."
                onChange={handleInputs}
              />
            </div>

            <div className={form_div}>
              <button onClick={submitQuote} disabled={sending}>
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </article>

      {/* ------------------------------------------ */}
      
    </section>
    </Layout>
  );
};

export default Quote;

export const query = graphql`
  query ($slug: String!) {
    contentfulTallseaEquipmentsSchema(slug: {eq: $slug}) {
      media {
        gatsbyImage(placeholder: BLURRED, quality: 100, width: 800)
        publicUrl
      }
      slug
      title
      excerpt
      description {
        raw
      }
    }
  }
`
 export const Head=({data,...props})=>{
  //console.log(props,data)
  const pathname = props.location.pathname
  const {title,excerpt,media:{publicUrl}}= data.contentfulTallseaEquipmentsSchema
  return(<SEO title={` Equipment | ${title} | Tallsea Integrated Services Ltd`} description={excerpt} pathname={`/${pathname}`} twitterUsername={"@limitedtallsea"} url={"www.tallseaintegrated.com"} image={publicUrl}/>)
}