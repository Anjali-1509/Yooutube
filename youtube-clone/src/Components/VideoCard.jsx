import {Card, CardHeader, CardBody, CardFooter, Image, Text} from '@chakra-ui/react'
//import { CardContent, CardMedia} from "@mui/material"
import { Link } from "react-router-dom"
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl, demoChannelTitle } from '../utils/constant'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function VideoCard({video : {id : {videoId}, snippet}}){
    console.log(videoId, snippet)
    return (
        <Card className="video-card" style={{width:"300px", marginLeft: "20px", transition: "all 1s ease-in-out",boxShadow: 'none', borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <CardHeader style={{padding:0, marginBottom:"-25px"}}>
                 <Image src={snippet?.thumbnails?.high?.url}
                 alt={snippet?.title}
                 sx={{width:358, height:210}}
                  />
               </CardHeader>
            </Link>
            <CardFooter sx={{background:"#1e1e1e", height:"106px", display:"column",textAlign:"center"}}>  
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Text  size='lg' style={{color: "#fff"}}>
                     {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
                 </Text>
                </Link>

                <Link style={{display:"flex"}} to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                <Text  size='lg' style={{color: "grey", marginLeft: "50px"}}>
                     {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60) }
                 </Text>
                 <CheckCircleIcon sx={{color:"grey", fontSize:15, ml:"5px", mt:"5px"}} />
                </Link>
            </CardFooter>
        </Card>
    )
}