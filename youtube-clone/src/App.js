import './App.css';
import { Stack, HStack, VStack, Box} from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import Feed from './Routes/Feed';
import Routes from "./Routes/Routes"


function App() {
  return (
    <Box className="App">
      <Navbar />
      <Routes />
    </Box>
  );
}

export default App;
