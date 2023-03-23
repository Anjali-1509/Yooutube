import { useState, useEffect } from "react"
import { Stack, Box, Text} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import Videos from "../Components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";



export default function SearchFeed(){
    const {searchTerm} = useParams()
    const [videos, setVideos]= useState([])

    useEffect(()=>{
       fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
       .then((data)=>setVideos(data.items))
    }, [searchTerm])


    return (
           
            <Box style={{background:"black"}}>
            <Heading as='h2' size='xl' style={{color:"white", marginBottom :"10px"}}>
               Search Results for : <span style={{color:"red"}}>{searchTerm}</span> Videos
             </Heading>
            <Videos videos={videos} paddingLeft="100px" />
            </Box>
          
      
    )
}