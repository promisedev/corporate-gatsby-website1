import { useState } from 'react'
import React,{useContext} from 'react'

const AppContext = React.createContext()

const AppProvider =({children})=>{

const [isModal, SetisModal]= useState(false)
const [expert_id, Setexpert_id]= useState(0)
const [ele_position,Setele_position] = useState(0)

return(
    <AppContext.Provider value={{
isModal, SetisModal,
Setexpert_id,
expert_id,
ele_position,
Setele_position
    }}> {children}</AppContext.Provider>
)
}


const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export  {useGlobalContext,AppProvider}