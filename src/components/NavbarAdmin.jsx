// import React, { useState } from "react";
// import styled from "styled-components";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose } from "react-icons/md";
// import Button from "./Button";
// import Logo from './Logo.png';
// import { Link } from "react-router-dom";
// import avatar from '../components/img/avatar.png'

// export default function Navbar() {
//   const links = ["Log Out"];
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const html = document.querySelector("html");
//   html.addEventListener("click", (e) => setIsNavOpen(false));
  
//     return (
//       <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center">
//         <div className="brand">
//           <img src={Logo} alt="Logo"  style={{ maxWidth: '100%', maxHeight: '100px' }}/>
//           <h1>Data User</h1>
//         </div>
        
        
//       </Nav>
//     );
//   }
  
//   const Nav = styled.nav`
//     text-decoration: none;
//     background-color: #fcc9e4; /* Light pink background */
//     .brand {
//       h2 {
//         font-size: 2.5rem;
//       }
//     }
//     .toggle {
//       display: none;
//     }
//     .user-con{
//       height: 70px;
//       display: center;
//       align-items: center;
//       gap: 1rem;
//       img{
//           width: 70px;
//           height: 70px;
//           border-radius: 50%;
//           object-fit: cover;
//           background: #fcf6f9;
//           border: 3px solid #B06161;
//           padding: .2rem;
//           box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
//       }
//     .links {
//       ul {
//         font-weight: bolder;
//         li {
//           cursor: pointer;
//           &:first-of-type {
//             a {
//               opacity: 1;
//             }
//           }
//           a {
//             opacity: 0.7;
//             transition: 0.5s ease-in-out;
//             &:hover {
//               opacity: initial;
//             }
//           }
//         }
//       }
//     }
  
//     @media screen and (min-width: 280px) and (max-width: 1080px) {

//       position: relative;
//       z-index: 5;
//       flex-direction: row;
//       .brand {
//         h2 {
//           font-size: 2rem;
//         }
//       }
//       .toggle {
//         padding-right: 1rem;
//         display: block;
//         z-index: 51;
        
//       }
//       .show {
//         opacity: 1 !important;
//         visibility: visible !important;
//       }
//       .links {
//         z-index: 10;
//         position: fixed;
//         overflow-x: hidden;
//         top: 0;
//         right: 0;
//         width: ${({ state }) => (state ? "60%" : "0%")};
//         height: 100vh;
//         background-color: #fcc9e4; /* Light pink background */
//         opacity: 0;
//         visibility: hidden;
//         transition: 0.7s ease-in-out;
//         ul {
//           flex-direction: column;
//           text-align: center;
//           height: 100%;
//           justify-content: center;
//           li {
//             a {
//               color: #B06161;
             
//             }
//           }
//         }
//       }
//       .auth {
//         display: none;
//       }
//     }
//   `;
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import Logo from './Logo.png';
import { Link } from "react-router-dom";
import avatar from '../components/img/avatar.png';

export default function Navbar() {
  const links = ["Log Out"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center">
      <div className="brand">
        <img src={Logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
        <h1>Data User</h1>
      </div>
      <div className="toggle" onClick={(e) => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? <MdClose size={30} color="#B06161" /> : <GiHamburgerMenu size={30} color="#B06161" />}
      </div>
      <div className={`links ${isNavOpen ? 'show' : ''}`}>
        <ul>
              <a href="/Signup">
              </a>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  text-decoration: none;
  background-color: #fcc9e4; /* Light pink background */
  padding: 1rem;

  .brand {
    display: flex;
    align-items: center;

    h1 {
      font-size: 2rem;
      color: #B06161;
      margin-left: 1rem;
    }
  }

  .toggle {
    display: none;
    cursor: pointer;
  }

  .links {
    ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin-right: 1rem;

        a {
          text-decoration: none;
          color: #B06161;
          font-weight: bold;
          font-size: 1.2rem;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .toggle {
      display: block;
    }

    .links {
      position: absolute;
      top: 70px;
      left: 0;
      background-color: #fcc9e4; /* Light pink background */
      width: 100%;
      text-align: center;
      opacity: ${({ state }) => (state ? '1' : '0')};
      visibility: ${({ state }) => (state ? 'visible' : 'hidden')};
      transition: opacity 0.5s, visibility 0.5s;

      ul {
        flex-direction: column;
        padding: 1rem;

        li {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;
