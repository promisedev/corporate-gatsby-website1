import React from "react"
import { useGlobalContext } from "../../controllers/context_api"

import expert from '../../model/experts.json'

const Expert = ()=>{
const {SetisModal, expert_id} = useGlobalContext()

const closeModal =()=>{
    SetisModal(false)
}
const s_expert =  expert.filter((expert)=> expert.id == expert_id)
const info = s_expert[0]


    return(
        <section className="single_expert">
<article className="single_expert_body" >
  <div className="single_expert_name">{info.name}</div>  
<div className="single_expert_role">{info.role}</div>
<div className="single_expert_desc">{info.bio}</div>
<div className="single_expert_contr" onClick={closeModal}>Close
</div>

</article>

        </section>
    )
}
export default Expert