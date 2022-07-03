import React,{useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Components 
import { Header } from './components/Header'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
//Animation 
import { AnimatePresence } from 'framer-motion';
import { AddItem } from './pages/AddItem';
import { UpdateItems } from './pages/UpdateItems';
//Context imports
import { useStateValue } from './context/StateProvider';
//=> /utils/FirebseFunctions 
import { fetchFoodItems,fetchCategory } from './utils/FirebseFunctions';
import { Items } from './components/AllItems/Items';
export const App = () => {
  //Get All Foods Items from reducer
  const [{foodItems,categoryItems},dispatch] = useStateValue();
  useEffect(() => {
    fetchFoodItems(foodItems,dispatch);
    fetchCategory(categoryItems,dispatch);
  }, []);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/allitems" element={<Items />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/updateitem/:id" element={<UpdateItems />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}
