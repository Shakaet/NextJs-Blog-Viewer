
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React from 'react';

const NavBar = async() => {

  let {getUser}= getKindeServerSession()

  let user= await getUser()
    return (
//         <div>
//              <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">Next Js</a>
//   </div>
//   <div className="flex-none">
//     <ul className="menu menu-horizontal px-1">
//     <li><Link href={"/"}>Home</Link></li>
//       <li><Link href={"/profile"}>Profile</Link></li>
//       {
//         user ? 
//         <li>
        
//         <Link href={"/api/auth/logout"}>Logout</Link>
      
//        </li>
//       :
//         <li>
        
//           <Link href={"/api/auth/login"}>Login</Link>
        
//       </li>
//       }
//     </ul>
//   </div>
// </div>
//         </div>

 <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
  <div className="flex-1">
    <a className="text-2xl font-bold px-4 py-2 tracking-wide">NextJs Blog Viewer</a>
  </div>
  <div className="flex-none">
    <ul className="menu md:menu-horizontal space-x-4 px-4">
      <li>
        <Link
          href="/"
          className="text-lg font-medium hover:text-gray-200 transition duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className="text-lg font-medium hover:text-gray-200 transition duration-200"
        >
          Profile
        </Link>
      </li>
      {user ? (
        <li>
          <Link
            href="/api/auth/logout"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Logout
          </Link>
        </li>
      ) : (
        <li>
          <Link
            href="/api/auth/login"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  </div>
</div> 








    );
};

export default NavBar;