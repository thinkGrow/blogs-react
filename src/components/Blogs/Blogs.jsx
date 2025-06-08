import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);



  return (
    <div>
      <h1 className="text-3xl">Available blogs: {blogs.length}</h1>

      <div className="grid grid-cols-2 gap-8 my-10">
        {blogs.map((blog) => (
          <Blog
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
