import React from "react";
import Header from "./header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "./category/Category";
import Chart from "./Chart/Chart";
import Login from "./Login/Login";
import Office from "./Office/Office";
import Membersearch from "./Membersearch/Membersearch";

const App = () => {
  const Location = useLocation();

  const navi = Location.pathname==="/Chart"
  const navi2 = Location.pathname==="/Office"
  const navi3 = Location.pathname==="/Membersearch"


 


  return (
    <> 
      {navi && <Header/>}
      {navi && <Category/>}
      {navi2 && <Header/>}
      {navi2 && <Category/>}
      {navi3 && <Header/>}
      {navi3 && <Category/>}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Office" element={<Office/>} />
        <Route path="/Membersearch" element={<Membersearch/>} />

      </Routes>

      
    </>
  );
};

export default App;
