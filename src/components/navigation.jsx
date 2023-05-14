import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import pages from "../model/pages.json";
import pages2 from "../model/pages_mobile.json";
import options from "../model/sub_pages.json";
import head_social from "../model/social.json";
import business_info from "../model/business_info.json";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import {
  HomeOutlined,
  Telegram,
  Facebook,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Navigation = () => {
  const header = useRef(null);
  const scroll = useRef(null);
  const navi = useRef(null);
  const close = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = header.current;
      const ele_position = element&&element.getBoundingClientRect().top;
      const scroll_ele = scroll.current;

      if (ele_position <= -40) {
        scroll_ele&&scroll_ele.classList.add("show_scroll_header");
      } else {
        scroll_ele&&scroll_ele.classList.remove("show_scroll_header");
      }
    });
  }, []);

  const openNav = () => {
    const close_ele = close.current;
    close_ele&&close_ele.classList.add("show_close");
    const nav_ele = navi.current;
    nav_ele&&nav_ele.classList.add("show_nav");
  };
  const closeNav = () => {
    const close_ele = close.current;
    close_ele&&close_ele.classList.remove("show_close");
    const nav_ele = navi.current;
    nav_ele&&nav_ele.classList.remove("show_nav");
  };

  return (
    <section className=" header_parent">
      <section className="header_div">
        {/* <!-- ----------------------------------------- --> */}
        <section className="scroll_header" ref={scroll}>
          <article className="scroll_item1">
            <StaticImage src="../assets/logo_footer.png" placeholder="NONE" alt="logo" width={800}/>
          </article>
          <article className="scroll_item2">
            <div className="scroll_menu">
              {pages.map((page, index) => {
                return (
                  <Link to={page.link} key={index}>
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </article>
        </section>
        {/* <!-- ----------------------------------------- --> */}
        <article className="header_one">
          {/* <div className="head_partner">
<img src="../../../assets/srs_logo.png" alt="subsea"/>
</div> */}
          <div className="head_link">
            {options.map((link) => {
              return (
                <Link to={link.link} key={link.id}>
                  {link.name}
                </Link>
              );
            })}
          </div>
          {/* <!-- -----------///--------------------------- --> */}
          <div className="head_social">
            {head_social.map((link, index) => {
              return (
                <a 
                  href={link.link}
                  style={{ left: `${index * 50}px` }}
                  key={link.id}
                >
                  {(index == 0 && <Facebook className="head_social_icon" style={{color:"black", fontSize: "12px"}}/>) ||
                    (index == 1 && <Twitter className="head_social_icon" style={{color:"black",fontSize: "12px"}}/>) ||
                    (index == 2 && (
                      <LinkedIn className="head_social_icon"style={{color:"black", fontSize: "12px"}} />
                    ))}{" "}
                </a>
              );
            })}
          </div>
        </article>

        {/* <!-- ------------------------------------------- --> */}
        <article className="header_two">
          <div className="h2_logo">
            <StaticImage src="../assets/logo_2.png" alt="logo" placeholder="NONE" width={800}/>
          </div>

          {/* <!-- ---------------- --> */}
          <div className="h2_business_info">
            {/* <!-- ////////////////// --> */}
            {business_info.map((info, index) => {
              return (
                <article className="business_info_item" key={info.id}>
                  <div className="item_desc">
                    <span className="item_desc_icon">
                      {(index == 0 && <CallIcon />) ||
                        (index == 1 && <AccessTimeIcon />) ||
                        (index == 2 && <LocationOnIcon />)}
                    </span>
                    <span>{info.desc}</span>
                  </div>

                  <div className="item_info">
                    <a href={info.link}>{info.info}</a>
                  </div>
                </article>
              );
            })}
            {/* --------------------------------------- */}
          </div>
        </article>

        {/* <!-- -------------------------------------------- --> */}

        <article className="header_three" ref={header}>
          <div className="page_div">
            {pages.map((page, index) => {
              return (
                <Link to={page.link} key={index}>
                  {page.name}
                </Link>
              );
            })}
          </div>
        </article>
      </section>

      <section className="header_div2">
        <article className="mobile_menu_body">
          <article className="mobile_menu">
            <div className="mobile_menu_action open" onClick={openNav}>
              <MenuIcon />{" "}
            </div>
            <div
              className="mobile_menu_action close"
              onClick={closeNav}
              ref={close}
            >
              <KeyboardBackspaceIcon />
            </div>
          </article>
          <article className="mobile_logo">
            <StaticImage
              className="mobile_image"
              src="../assets/logo_2.png"
              alt="logo"
              placeholder="NONE" width={800}
            />
          </article>
        </article>
        {/* <!-- ///////// --> */}
        <div className="navigation" ref={navi}>
          <article className="navigation_cont">
            <div className="nav_logo_body">
              <div className="nav_logo">
                <StaticImage
                  className="nav_logo_img"
                  src="../assets/logo_footer.png"
                  alt="logo"
                  placeholder="NONE" width={800}
                />
              </div> 
            </div>
            <div className="mobile_nav_list_cont">
              {pages2.map(function (link, index) {
                return (
                  <Link to={link.link} className="mobile_navi" key={index}>
                    <span className="mobile_navi_icon">
                      {(index == 0 && <HomeOutlined />) ||
                        (index == 1 && <BarChartIcon />) ||
                        (index == 2 && <Telegram />) ||
                        // (index == 3 && <VerifiedUserIcon />) ||
                        (index == 3 && <BusinessCenterIcon />)}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
        {/* <!-- /////////// --> */}
      </section>
    </section>
  );
};

export default Navigation;
