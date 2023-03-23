import { Card, CardHeader, CardBody, CardFooter , Box, Image, Text} from '@chakra-ui/react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';

export default function ChannelCard({channelDetail}){
    return(
        <Box sx= {{boxShadow:"none", color: "black",borderRadius : "20px", width: "320px", padding:"10px"}} >

           <Link to={`/channel/${channelDetail?.id?.channelId}`}>
             <Card sx={{ background:"black",display:"flex", flexDirection:'column', justifyContent:"center",textAlign:'center', color: "#fff", marginLeft:"20px"}}>
                <CardBody>
                <CardHeader sx={{background: "black"}}>
                 <Image src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                 alt={channelDetail?.snippet?.title}
                 sx={{borderRadius:"50%", height:"180px", width:"180px",mb:2, border: "1 px solid #e3e3e3"}}
                  />
                 </CardHeader>
                
               <CardFooter>
               <Text  size='lg' style={{color: "grey", marginLeft:"20px", marginTop: "-10px", fontWeight: "bold"}}>
                     {channelDetail?.snippet?.title}
                 </Text>
                 <CheckCircleIcon sx={{color:"grey", fontSize:15, ml:"5px"}} />
                 </CardFooter>
               </CardBody>
             </Card>

           </Link>
        </Box>
    )
}