import React, { Component, createContext, useState } from "react";
import {Route,NavLink,BrowserRouter,Routes, Form} from "react-router-dom";
import Home from "./Home";
import FetchButton from "./Fetch Button";
import Fetchpost from "./Fetch post";
import Fetch from "./Fetch";
import Form2 from "./form2";
import Stopwatch from "./stopwatch";
import ToDo from "./todo";
import App12 from "./swap";
import Search from "./search";
import App2 from "./Gallery/Gallery2";
import './index.css'
const value1=createContext();
function Main1() {
  
    const[loggedin,setloggedin]=useState(true);
    
    
      
      const name1="User";
      return (
        loggedin?(
          <div style={{marginLeft:"250px"}}>
        <div >
        <p>Usename:"user"</p><input ></input>
        <p>Password:"password"</p><input type={"password"} onChange={(e)=>{(e.target.value=="password")?setloggedin(false):null}}></input>
        
        </div>
        
        </div>
      ):(
        <BrowserRouter>
        <h1 style={{width:"670px"}}>React Projects</h1>
          <div >
             <ul className="header" >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
              <li><NavLink to="/swap">Swap</NavLink></li>
              <li><NavLink to="/FtechButton">FtechButton</NavLink></li>
              <li><NavLink to="/todo">ToDo list</NavLink></li>
              <li><NavLink to="/stopwatch">Stopwatch</NavLink></li>
              <li><NavLink to="/Form">Form</NavLink></li>
            </ul>

            <div className="content">
             <value1.Provider value={name1}>
              <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/swap" element={<App12 />}/>
              <Route path="/FtechButton" element={<FetchButton />}/>
              <Route path="/todo" element={<ToDo />}/>
              <Route path="/stopwatch" element={<Stopwatch />}/>
              <Route path="/Form" element={<Form2 />}/>
              </Routes>
              </value1.Provider>
            </div>
          </div>
          </BrowserRouter>
      ));
    
  }
export default Main1;
export { value1 };