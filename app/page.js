
"use client"
import Link from "next/link";
import { useState } from "react";




export default function Home() {


  let [post,setpost] = useState([])

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json())
  .then(data=>setpost(data))


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-10">
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
      All Blog Posts
    </h1>
    <ul className="space-y-4">
      {post.map((post) => (
        <li
          key={post.id}
          className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 shadow-md"
        >
          <span className="text-xl font-bold text-gray-700">{post.id}.</span>
          <Link
            href={`/blog/${post.id}`}
            className="ml-4 text-lg font-medium text-blue-600 underline hover:text-blue-800"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>



  );
}
