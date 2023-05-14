import React from "react"
import Header from "./header"
import Footer from "./footer"


const Layout = ({children})=>{

    return(
        <>
            {/* Header section of the project  */}
        <Header/>
        {/* --------------------------------- */}
        {children}
        {/* ---------------------------- */}

{/* footer section of the project */}
        <Footer/>
        
        </>
    )
}

export default Layout