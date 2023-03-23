import { Stack,Box } from '@mui/system';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

export default function Videos({videos,paddingLeft,direction, flexWrap}){
 
    return (
    <Stack direction={direction || "row"} flexWrap={flexWrap||"wrap"} justifyContent="start" gap={1} style={{width:"100%", height:"100vh", overflow : 'auto', paddingLeft}}>
            {
                videos.map((item, idx)=>
                <Box key={idx}>
                  {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
                  {item.id.videoId && <VideoCard video={item} />}
                 
                </Box>
                )
            }
        </Stack>
    )
}