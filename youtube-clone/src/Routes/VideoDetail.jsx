import { useState, useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import {Text, Box, Stack, Heading} from "@chakra-ui/react"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from './../Components/Videos';




export default function VideoDetail(){
    const [videoDetail, setVideoDetail]= useState(null)
    const [videos, setVideos] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=>setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data)=>setVideos(data.items))
    },[id])

    console.log(videos)

   if(!videoDetail?.snippet) return 'Loading.....'
   if(!videos) return "Loading..."

   const {snippet :{title,channelId,channelTitle}, statistics:{viewCount, likeCount}}= videoDetail

    return (
         <Box style={{height:"95vh", display:"flex", background:"black"}}>
            <Stack direction={{xs:"column", md:"row"}} style={{width:"100%"}}>
                <Box flex={1}>
                    <Box style={{width:"100%", position:"sticky", top:"86px"}}>
                       <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                       <Heading as='h3' size='md' style={{color:"#fff", textAlign:"left"}}>
                            {title}
                        </Heading>
                        <Stack direction="row" justifyContent="space-between" color="#fff" py={1} py={2}>
                           <Text color="#fff">{channelTitle}</Text>
                           <Stack direction="row" gap="20px" alignItems="center">
                              <Text sx={{opacity:0.7}}>
                                 {parseInt(viewCount).toLocaleString()} views
                              </Text>
                              <Text sx={{opacity:0.7}}>
                                 {parseInt(likeCount).toLocaleString()} views
                              </Text>
                           </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Stack>

          <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
             <Videos videos={videos} direction="column" flexWrap="none" />
          </Box>
         </Box>
    )
}