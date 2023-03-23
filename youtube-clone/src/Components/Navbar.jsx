import { Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Navbar(){
    return(
        <Stack direction="row" alignItems="center"  p={2} 
        sx={{position:"sticky",
         background: "#000",
          top:0, 
          justifyContent: "space-between", height:"100px"}}>

          <Link to="/" style={{display:"flex", alignItems:"center" ,color:"white"}}>
            <img 
             style={{height:"40px", weight:'40px', borderRadius:"10px", marginLeft:"20px"}}
             src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="logo"/>
          </Link>
         
             <SearchBar />
        </Stack>
    )
}

