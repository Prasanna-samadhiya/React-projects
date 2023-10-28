import React, { Component, createContext } from "react";
import {Route,NavLink,BrowserRouter,Routes, Form} from "react-router-dom";
import Galley from "./Galley";
import Wishlist from "./wishlist";
import Others from "./others";
class ManageGallery extends Component {
    
    render() 
    {
        
      return (
        <BrowserRouter>
          <div>
            <h1>Gallery</h1>
            <ul className="header">
              <li><NavLink to="/">Gallery</NavLink></li>
              <li><NavLink to="/Whishlist">Whishlist</NavLink></li>
              <li><NavLink to="/Others">Others</NavLink></li>
            </ul>

            <div className="content">
        
              <Routes>
              <Route path="/" element={<Galley />}/>
              <Route path="/Wishlist" element={<Wishlist />}/>
              <Route path="/Others" element={<Others />}/>
              </Routes>
        
            </div>
          </div>
          </BrowserRouter>
      );
    }
  }
export default ManageGallery;