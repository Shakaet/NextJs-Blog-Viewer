// import React from 'react';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// const page = async() => {
//     let {getUser}= getKindeServerSession()
    
//       let user= await getUser()
//     return (
//         <div>
//             <h2>Welcome to your profile!</h2>
//         </div>
//     );
// };

// export default page;

// import React from 'react';
// import { redirect } from 'next/navigation';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// const ProfilePage = async () => {
//   try {
//     // Retrieve user session details
//     const { getUser } = getKindeServerSession();
//     const user = await getUser();

//     if (!user) {
//       // Redirect to login if no user is found
//       redirect('/api/auth/login'); // Server-side redirection
//     }

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-pink-500">
//         <div className="p-8 bg-white shadow-lg rounded-lg text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Welcome to your profile!
//           </h2>
         
//         </div>
//       </div>
      
//     );
//   } 
//   catch (error) {
//     // Redirect to login if any error occurs
//     redirect('/api/auth/login'); // Server-side redirection
//     return null;
//   }
// };

// export default ProfilePage;


import React from 'react';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const ProfilePage =  () => {
 
    // // Retrieve user session details
    // const { getUser } = getKindeServerSession();
    // const user = await getUser();
    


    // if (!user) {
    //   // Redirect to login if no user is found
    //   redirect('/api/auth/login'); // Server-side redirection
    // }

    return (
        <div>
          {/* {
            user &&  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-pink-500">
            <div className="p-8 bg-white shadow-lg rounded-lg text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to your profile!
              </h2>
             
            </div>
          </div>
          } */}

            <div className="p-8 bg-white shadow-lg rounded-lg text-center mt-44">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to your profile!
              </h2>
             
            </div>
        
        </div>
      
    );
  } 



export default ProfilePage;
