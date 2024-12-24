import React from "react";
import Header from "./header/Header";
import { Route, Routes, useLocation } from "react-router-dom";

import Category from "./category/Category";
import Chart from "./Chart/Chart";
import Login from "./Login/Login";
import Office from "./Office/Office";
import Membersearch from "./Membersearch/Membersearch";
import Membergroup from "./MemberGroup/Membergroup";
import MemberGroupAdd from "./MemberGroupAdd/MemberGroupAdd";
import AddMessage from "./AddMessage/AddMessage";


const App = () => {
  const Location = useLocation();

  const navi = Location.pathname==="/Chart"
  const navi2 = Location.pathname==="/Office"
  const navi3 = Location.pathname==="/Membersearch"
  const navi4 = Location.pathname==="/Membergroup"
  const navi5 = Location.pathname==="/MemberGroupAdd"
  const navi6 = Location.pathname==="/AddMessage"
  
 


  return (
    <> 
      {navi && <Header/>}
      {navi && <Category/>}
      {navi2 && <Header/>}
      {navi2 && <Category/>}
      {navi3 && <Header/>}
      {navi3 && <Category/>}
      {navi4 && <Header/>}
      {navi4 && <Category/>}
      {navi5 && <Header/>}
      {navi5 && <Category/>}
      {navi6 && <Header/>}
      {navi6 && <Category/>}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Office" element={<Office/>} />
        <Route path="/Membersearch" element={<Membersearch/>} />
        <Route path="/Membergroup" element={<Membergroup/>} />
        <Route path="/MemberGroupAdd" element={<MemberGroupAdd/>} />
        <Route path="/AddMessage" element={<AddMessage/>} />




      </Routes>
      
    
    </>
  );
};

export default App;