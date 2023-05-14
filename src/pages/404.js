import React from "react"
import { ArrowBackIos } from '@mui/icons-material'
import { Link } from 'gatsby'
import Navigation from '../components/navigation'
import { StaticImage } from "gatsby-plugin-image"
import image from "../assets/notfound.ico"

const Notfound = ()=>{

    return(

        <section className="notfound"> 
            <Navigation/>
<article className="notfound_item">
    <div className="notfound_image"><img src={image} alt="notfound" /></div>
    <div className='notfound_text'>
        404
    </div>
    <Link  to="/" className='notfound_button'>
        <ArrowBackIos/> Back home
    </Link>


</article>

        </section>
    )
}

export default Notfound