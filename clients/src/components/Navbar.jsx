import React, { useState,useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../ContextApi/TokenApi";
import Cart from "../pages/Cart";
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {

 const { isLoggedIn,cartCount} = useAuth();
 const {showMenu} =useAuth()
  console.log("login or not ", isLoggedIn);
  // const {user} = useAuth()
 
  return (
    <>
      <div className="header-1">
      <a href="" className="logo">
          <i className="fa-solid fa-basket-shopping"></i>Grocery
        </a>
        <form action="" className="search-box-container">
          <input type="search" id="search-box" placeholder="Search-here" />
          
        </form>
      </div>
     <div>
      
   <nav  className="header-2">
        
<div className="nav-links" id="navlinks">
              <ul>
                <li>
                  <NavLink to="/" > Home </NavLink>
                </li>
                <li>
                  <NavLink to="/about" > About </NavLink>
                </li>
                <li>
                  <NavLink to="/product" > Product </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/service"> Service </NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact" > Contact </NavLink>
                </li>
                <li>
                  <NavLink to="/deal" > Deal </NavLink>
                </li>
           
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" >Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
              
                </ul>
            </div>
          
            <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i> 
          {/* </nav> */}
          <div className="icons">
         
        <NavLink to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </NavLink>
          <a href="" className="fa-solid fa-heart"></a>
          <a href="" className="fa-solid fa-user"></a>
      
        </div>
        </nav>
</div>
    
    </>
  );
};


export default Navbar;


// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { useAuth } from "../ContextApi/TokenApi";
//  import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

// export const Navbar = () => {
//   const { isLoggedIn,cartCount } = useAuth();
//   console.log("login or not ", isLoggedIn);
//   const {user} = useAuth()
//   const {showMenu} = useAuth()

//   return (
//     <>
//       <header>
//       <div className="header-1">
//       <a href="" className="logo">
//           <i className="fa-solid fa-basket-shopping"></i>Grocery
//         </a>
//         <form action="" className="search-box-container">
//           <input type="search" id="search-box" placeholder="Search-here" />
        
//         </form>
//       </div>
//     <div className="headers-2">
//           <nav>

//             <div className="nav-links" id="navlinks">
//               <ul>
//                 <li>
//                   <NavLink to="/"> Home </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/about"> About </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/service"> Services </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact"> Contact </NavLink>
//                 </li>
               
//               {isLoggedIn ? (
//                 <li>
//                   <NavLink to="/logout">Logout</NavLink>
//                 </li>
//               ) : (
//                 <>
//                   <li>
//                     <NavLink to="/register"> Register </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login"> Login </NavLink>
//                   </li>
// </>
//               )}
              
//                 </ul>
//             </div>
          
//             <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i>   
//           </nav>
//           <div className="header-icons">
         
//            <NavLink to="/cart" className="cart-icon">
//                    <FaShoppingCart />
//                    <span className="cart-count">{cartCount}</span>
//                  </NavLink>
//                   <a href="" className="fa-solid fa-heart"></a>
//                    <a href="" className="fa-solid fa-user"></a>
               
//               </div>
//               </div>
              
           
//       </header>
//     </>
//   );
// };


// export default Navbar

