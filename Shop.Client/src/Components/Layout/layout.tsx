import { Header } from "../Header/header";
import { Interface } from "../Interface/interface";
import { Route, Routes} from "react-router-dom";
import { List } from "../List/list";
import { Item } from "../Item/item";


export const Layout = () =>{


    return(
<>  
<Header/>
    <Routes>
             <Route path='/' element={<Interface />} />
             <Route path={'/products-list/:id'} element={<Item />}/> 
             <Route path={'/products-list'} element={<List />}/> 
   </Routes> 
</>   
    )

      
}