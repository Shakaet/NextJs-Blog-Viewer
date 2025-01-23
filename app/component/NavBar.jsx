
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import Link from 'next/link';
// import React from 'react';

// const NavBar = async() => {

//   let {getUser}= getKindeServerSession()



//   let user= await getUser()

//     return (
// //         <div>
// //              <div className="navbar bg-base-100">
// //   <div className="flex-1">
// //     <a className="btn btn-ghost text-xl">Next Js</a>
// //   </div>
// //   <div className="flex-none">
// //     <ul className="menu menu-horizontal px-1">
// //     <li><Link href={"/"}>Home</Link></li>
// //       <li><Link href={"/profile"}>Profile</Link></li>
// //       {
// //         user ? 
// //         <li>
        
// //         <Link href={"/api/auth/logout"}>Logout</Link>
      
// //        </li>
// //       :
// //         <li>
        
// //           <Link href={"/api/auth/login"}>Login</Link>
        
// //       </li>
// //       }
// //     </ul>
// //   </div>
// // </div>
// //         </div>

// //  <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
// //   <div className="flex-1">
// //     <a className="text-2xl font-bold px-4 py-2 tracking-wide">NextJs Blog Viewer</a>
// //   </div>
// //   <div className="flex-none">
// //     <ul className="menu md:menu-horizontal space-x-4 px-4">
// //       <li>
// //         <Link
// //           href="/"
// //           className="text-lg font-medium hover:text-gray-200 transition duration-200"
// //         >
// //           Home
// //         </Link>
// //       </li>
// //       {/* <li>
// //         <Link
// //           href="/profile"
// //           className="text-lg font-medium hover:text-gray-200 transition duration-200"
// //         >
// //           Profile
// //         </Link>
// //       </li> */}
// //       {user ? (
// //         <li>
// //           <Link
// //           href="/profile"
// //           className="text-lg font-medium hover:text-gray-200 transition duration-200"
// //         >
// //           Profile
// //         </Link>
// //         </li>
// //         <li>
// //           <Link
// //             href="/api/auth/logout"
// //             className="text-lg font-medium hover:text-gray-200 transition duration-200"
// //           >
// //             Logout
// //           </Link>
// //         </li>
// //       ) : (
// //         <li>
// //           <Link
// //             href="/api/auth/login"
// //             className="text-lg font-medium hover:text-gray-200 transition duration-200"
// //           >
// //             Login
// //           </Link>
// //         </li>
// //       )}
// //     </ul>
// //   </div>
// // </div> 

// <nav className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg w-full">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <div>
//           <a className="text-2xl font-bold tracking-wide">NextJs Blog Viewer</a>
//         </div>

//         {/* Hamburger Menu for Small Devices */}
//         <div className="dropdown md:hidden mr-5">
//           <label tabIndex={0} className="btn btn-ghost">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-500 rounded-box overflow-x-hidden"
//           >
//             <li>
//               <Link href="/" className="text-lg font-medium hover:text-gray-200">
//                 Home
//               </Link>
//             </li>
//             {user ? (
//               <>
//                 <li>
//                   <Link
//                     href="/profile"
//                     className="text-lg font-medium hover:text-gray-200"
//                   >
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/api/auth/logout"
//                     className="text-lg font-medium hover:text-gray-200"
//                   >
//                     Logout
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   href="/api/auth/login"
//                   className="text-lg font-medium hover:text-gray-200"
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>

//         {/* Horizontal Menu for Larger Devices */}
//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <Link
//               href="/"
//               className="text-lg font-medium hover:text-gray-200 transition duration-200"
//             >
//               Home
//             </Link>
//           </li>
//           {user ? (
//             <>
//               <li>
//                 <Link
//                   href="/profile"
//                   className="text-lg font-medium hover:text-gray-200 transition duration-200"
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/api/auth/logout"
//                   className="text-lg font-medium hover:text-gray-200 transition duration-200"
//                 >
//                   Logout
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link
//                 href="/api/auth/login"
//                 className="text-lg font-medium hover:text-gray-200 transition duration-200"
//               >
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>








//     );
// };

// export default NavBar;









//


import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-base-100 rounded-box p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        {/* Brand Name */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Blog Viewer
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {/* Authentication Buttons */}
        {(await isAuthenticated()) ? (
          <>
            <span className="hidden lg:inline-block text-sm text-gray-500">
              Welcome, {user?.given_name || "User"}!
            </span>
            <LogoutLink>
              <button className="btn btn-error text-white">Logout</button>
            </LogoutLink>
          </>
        ) : (
          <div className="flex items-center space-x-3">
            <LoginLink postLoginRedirectURL="/">
              <button className="btn btn-primary">Login</button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/">
              <button className="btn btn-secondary">Register</button>
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;