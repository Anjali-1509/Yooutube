import { Routes ,Route } from "react-router-dom";
import ChannelDetail from "./ChannelDetail";
import Feed from "./Feed";
import SearchFeed from "./SearchFeed";
import VideoDetail from "./VideoDetail";

export default function Rputes(){
    return(
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
    )
}