import React,{useState, useMemo, useEffect} from 'react'
import {
  equipment_cont,
  equipment_title_div,
  equipment_item_cont,
  equipment_item_cont2,
  controls,
  c_icon_btn,
  c_icon,
  enlarge,
  equipment_item,
  equipment_item2,
  equipment_image,
  equipment_name,
  equipment_desc,
  equipment_button,
  
} from "./equipment.module.css";
//import data from '../../model/equipments.json'
import { IconButton } from '@mui/material'
import { ArrowBackIos , ArrowForwardIos} from '@mui/icons-material'
import { Link,useStaticQuery,graphql } from 'gatsby';
import {GatsbyImage,  getImage} from "gatsby-plugin-image"

const Equipment =()=>{
const [position,setPosition]=useState(0)
const [position1,setPosition1]=useState(0)
const [data,setData]=useState([])
// useEffect(()=>{
//     console.log(position,data.length)
// },[position])

 const datas = useStaticQuery(graphql`
query {
  allContentfulTallseaEquipmentsSchema {
    nodes {
      excerpt
      media {
        gatsbyImage(placeholder: BLURRED,quality: 100, width: 500)
        
      }
      title
      slug
    }
  }
}
`);

useMemo(()=>{
  const datum = datas.allContentfulTallseaEquipmentsSchema.nodes;
  setData(datum)},[datas])

let location
let location1
const slideBack=()=>{
    location = position
 location--
if(location <= 0 ) {
  location  = data?.length+1
setPosition(location);    
}
setPosition(location)

}
const mobileBack=()=>{
    location1 = position1
 location1--
if(location1 <= 0 ) {
  location1  = data?.length-1
setPosition1(location1);    
}
setPosition1(location1)

}
const slideForward=()=>{
   location = position
location++
if(position == data?.length+1) {
   location  = 0
setPosition(location)    
}
setPosition(location)
}
const mobileForward=()=>{
   location1 = position1
location1++
if(position1 == data?.length-1) {
   location1  = 0
setPosition1(location1)    
}
setPosition1(location1)
}


const plus =(e)=>{
    e.currentTarget.classList.add(`${enlarge}`)

}
const minus =(e)=>{
e.currentTarget.classList.remove(`${enlarge}`)
}


    return (
      <article className={equipment_cont}>
        {/* ------------------------------------- */}
        <div className={equipment_title_div}>
          <div className="title">
            <div className="title_txt">Equipments</div>
            <div className="title_underline"></div>
          </div>
        </div>
        {/* ------------------------------------------------ */}
        <div className={equipment_item_cont}>
          <div className={controls}>
            <IconButton
              className={c_icon_btn}
              onClick={slideBack}
              style={{ background: "#fff" }}
            >
              <ArrowBackIos
                className={c_icon}
                style={{ fontSize: "14px" }}
              />
            </IconButton>
            <IconButton
              className={c_icon_btn}
              onClick={slideForward}
              style={{ background: "#fff" }}
            >
              <ArrowForwardIos
                className={c_icon}
                style={{ fontSize: "14px" }}
              />
            </IconButton>
          </div>
          {/* -------------------------------------- */}
          {data?.map((equip, index) => {

const image =getImage(equip?.media.gatsbyImage)

            return (
              <article
                className={equipment_item}
                key={index}
                style={{
                  left: `${index * 35}%`,
                  transform: `translateX(-${position * 40}%)`,
                }}
                onMouseOver={plus}
                onMouseOut={minus}
              >
                <GatsbyImage
                image={image}
                  className={equipment_image}
                  as="div"
                  alt=""
                />
                <p className={equipment_name}>{equip?.title}</p>
                <p className={equipment_desc}>
                  {equip?.excerpt?.substring(0, 170) + "..."}
                </p>
                <Link
                  to={`/quote/${equip?.slug}`}
                  className={equipment_button}
                >
                  Request quote
                </Link>
              </article>
            );
          })}
        </div>
        {/* -----------mobile------------ */}
        <div className={equipment_item_cont2}>
          <div className={controls}>
            <IconButton
              className={c_icon_btn}
              onClick={mobileBack}
              style={{ background: "#fff" }}
            >
              <ArrowBackIos
                className={c_icon}
                style={{ fontSize: "14px" }}
              />
            </IconButton>
            <IconButton
              className={c_icon_btn}
              onClick={mobileForward}
              style={{ background: "#fff" }}
            >
              <ArrowForwardIos
                className={c_icon}
                style={{ fontSize: "14px" }}
              />
            </IconButton>
          </div>
          {/* -------------------------------------------- */}
          {data?.map((equip, index) => {
            const image = getImage(equip?.media.gatsbyImage)
            return (
              <article
                className={equipment_item2}
                key={index}
                style={{
                  left: `${index * 100}%`,
                  transform: `translateX(-${position1 * 100}%)`,
                }}
              >
                <GatsbyImage
                  className={equipment_image}
                  image={image}
                  as="div"
                  alt=""
                />
                <p className={equipment_name}>{equip?.title}</p>
                <p className={equipment_desc}>
                  {equip?.excerpt?.substring(0, 170) + "..."}
                </p>
                <Link
                  to={`/quote/${equip?.slug}`}
                  className={equipment_button}
                >
                  Request quote
                </Link>
              </article>
            );
          })}
        </div>
      </article>
    );
}

export default Equipment