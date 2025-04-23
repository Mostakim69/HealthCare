import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Blogs</h1>
      
      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs available.</p>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{blog.question}</h2>
              <p className="text-gray-700">{blog.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;