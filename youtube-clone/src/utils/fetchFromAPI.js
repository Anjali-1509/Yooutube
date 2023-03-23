import axios from "axios"

const BASE_URL ="https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '0dc13c68cbmshfef3ebbf007320bp189553jsn900a0a651b20',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
const {data} = await axios.get(`${BASE_URL}/${url}`, options)
return data
}