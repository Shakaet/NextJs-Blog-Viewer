"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {

    let {postId}= useParams()

    let [postDetails,setpostDetails] = useState([])
    
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res=>res.json())
      .then(data=>setpostDetails(data))

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-10">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
       Blog Posts Details
    </h1>
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
      {postDetails.title}
    </h1>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      {postDetails.body}
    </p>
  </div>
</div>

    );
};

export default page;