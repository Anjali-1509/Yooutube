import { useState, useEffect } from "react"
import {Box, Typography} from "@mui/material"
import { Stack } from '@chakra-ui/react';
import SideBar from "../Components/SideBar";
import { Heading } from '@chakra-ui/react'
import Videos from "../Components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";



export default function Feed(){
    const [selectedCategory, setSelectedCategory]= useState("New")
    const [videos, setVideos]= useState([])

    useEffect(()=>{
       fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
       .then((data)=>setVideos(data.items))
    }, [selectedCategory])


    return (
         <Stack sx={{flexDirection:{sx:"column", md: "row"}, background:"black"}}>
            <Box sx={{height:{sx:"auto", md:"92vh"}, borderRight: "1px solid #3d3d3d", px:{sx:0, md:2}}}>
             <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </Box>

            <Box>
            <Heading as='h2' size='xl' style={{color:"white"}}>
               {selectedCategory} <span style={{color:"red"}}>Videos</span>
             </Heading>
            <Videos videos={videos}/>
            </Box>
         </Stack>
    )
}