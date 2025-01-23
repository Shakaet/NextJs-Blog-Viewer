// // import React from 'react';
// // import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// // const page = async() => {
// //     let {getUser}= getKindeServerSession()
    
// //       let user= await getUser()
// //     return (
// //         <div>
// //             <h2>Welcome to your profile!</h2>
// //         </div>
// //     );
// // };

// // export default page;

// // import React from 'react';
// // import { redirect } from 'next/navigation';
// // import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// // const ProfilePage = async () => {
// //   try {
// //     // Retrieve user session details
// //     const { getUser } = getKindeServerSession();
// //     const user = await getUser();

// //     if (!user) {
// //       // Redirect to login if no user is found
// //       redirect('/api/auth/login'); // Server-side redirection
// //     }

// //     return (
// //         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-pink-500">
// //         <div className="p-8 bg-white shadow-lg rounded-lg text-center">
// //           <h2 className="text-4xl font-bold text-gray-800 mb-4">
// //             Welcome to your profile!
// //           </h2>
         
// //         </div>
// //       </div>
      
// //     );
// //   } 
// //   catch (error) {
// //     // Redirect to login if any error occurs
// //     redirect('/api/auth/login'); // Server-side redirection
// //     return null;
// //   }
// // };

// // export default ProfilePage;


// import React from 'react';
// import { redirect } from 'next/navigation';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// // // Ensure SSR for Vercel
// // export const dynamic = 'force-dynamic';

// const ProfilePage =  () => {
 
//     // Retrieve user session details
//     // const { getUser } = getKindeServerSession();
//     // const user = await getUser();
    


//     // if (!user) {
//     //   // Redirect to login if no user is found
//     //   redirect('/api/auth/login'); // Server-side redirection
//     // }

//     return (
//         <div>
//           {/* {
//             user &&  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-pink-500">
//             <div className="p-8 bg-white shadow-lg rounded-lg text-center">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Welcome to your profile!
//               </h2>
             
//             </div>
//           </div>
//           } */}

//             <div className="p-8 bg-white shadow-lg rounded-lg text-center mt-44">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Welcome to your profile!
//               </h2>
             
//             </div>
        
//         </div>
      
//     );
//   } 



// export default ProfilePage;

import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 text-center">
        {/* {user?.picture ? (
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-500"
          />
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-2xl">No Image</span>
          </div>
        )} */}
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          Welcome to your profile, {user?.given_name || "User"}!
        </h1>
        <p className="mt-2 text-gray-600">
          {user?.email || "No email provided"}
        </p>
        <p className="mt-6 text-sm text-gray-500">
          Thank you for being part of our platform!!!
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
