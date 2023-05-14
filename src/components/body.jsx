import React from "react"
import Slides from './utils/slides'
import About from './utils/about'
import Service1 from './utils/service1'
import Service2 from './utils/service2'
import Equipment from './utils/equipment'
import Projects from './utils/projects'
import Experts from './utils/experts'
import Partners from './utils/partners'


  
const Body =()=>{

    return(
        <section > 

<Slides/>
{/* --------------------------------------------- */}
<About/>
{/* --------------who we serve--------------------------*/}
<Service1/>
{/* <!-- ---------------what we do-------------------- --> */}
<Service2/>
{/* ----------projects-------------------------------- --> */}
<Equipment/>
<Projects/>

{/* <!-- ----experts---------------------------------- --> */}
{/* <Experts/> */}


{/* <!-- --------------------partners------------------- --> */}
{/* <Partners/> */}
        </section>
    )
}


export default Body