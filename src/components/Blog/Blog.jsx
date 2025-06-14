import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    // posted_date,
    reading_time,
    hashtags,
  } = blog;

  // console.log(id, posted_date, reading_time);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-60 w-full object-cover" src={cover} alt="Blogs" />
      </figure>
      <div className="card-body bg-gray-100">
        <div className="author flex justify-around items-center ">
          <h3 className="text-xl text-gray-400">{author}</h3>
          <img className="w-16" src={author_img} alt="" />
          <button onClick={() => handleBookmark(blog)}>
            <FaBookmark size={25} />
          </button>
        </div>
        <h2 className="card-title h-20">{title}</h2>

        <div className="flex rounded-sm text-black mb-4">
          {hashtags.map((hashtag) => (
            <p key={hashtag} className="bg-gray-200 w-[10%]">
              {hashtag}
            </p>
          ))}
        </div>

        <div className="card-actions justify-between">
          <div>
            {/* <h3 className="text-xl"></h3> */}
            <button className="btn cursor-default">
              Read Time : {reading_time}
            </button>
          </div>
          <button
            onClick={() => handleRead(reading_time, id)}
            className="btn btn-primary"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
