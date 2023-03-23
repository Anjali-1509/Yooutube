import { Stack } from "@chakra-ui/react"
import {categories} from "../utils/constant"
const selectedCategory ="New"

export default function SideBar({selectcategory, setSelectedCategory}){
    return(
        <Stack direction="row" sx={{overFlowY: 'auto',background:"black",padding:"10px", height:{sx:"auto", md:"95%"}, flexDirection:{md:"column"}}}>
        {categories.map((category)=>
        <button className="category-btn"
         onClick={()=>setSelectedCategory(category.name)}
         key={category.name}
         >
        <span>{category.icon}</span>
        <span>{category.name}</span>
        </button>
        )}
        </Stack>
    )
}