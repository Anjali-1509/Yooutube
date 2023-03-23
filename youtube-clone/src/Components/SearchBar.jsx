import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from '@chakra-ui/react'
import { UilSearch } from '@iconscout/react-unicons'
import { IconButton } from "@chakra-ui/react"


export default function SearchBar(){
    const [searchTerm, setSearchTerm]= useState("")
    const navigate= useNavigate()
    const  handleSubmit=()=>{
        if(searchTerm){
             navigate(`/search/${searchTerm}`)
        }
    }
    return (
        <form
           style={{display:"flex", background:"white", width:"400px",borderRadius:"5px", marginRight:"200px"}}
           onSubmit={handleSubmit}
           >
             <Input placeholder='Search...'  
             sx={{background:"white", width:"100%"}}
             value={searchTerm}
             onChange={(e)=>{setSearchTerm(e.target.value)}}
              />
              <IconButton type="submit">
              <UilSearch style={{color:"red", background:"white"}} />
              </IconButton>
              </form>
       
    )
}