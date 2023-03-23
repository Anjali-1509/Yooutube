import { Box } from "@chakra-ui/react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Videos from "../Components/Videos"
import ChannelCard from "../Components/ChannelCard"
import { fetchFromAPI } from './../utils/fetchFromAPI';



export default function ChannelDetail(){
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos]= useState([])

  const {id} = useParams()
  console.log(channelDetail, videos)
  
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data))
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  }, [id])
    return (
         <Box style={{background:"black", height:"100vh", zIndex :10}}>
         <Box>
           <div style={{ height:"300px",
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,111,1) 35%, rgba(0,212,255,1) 100%)"}}>
             {id}
             <ChannelCard channelDetail={channelDetail} style={{marginTop:"100px"}} />
         </div>
        
         </Box>
         </Box>
    )
}