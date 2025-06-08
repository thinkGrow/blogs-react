import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleRead = (time) => {
    // console.log("mark as read", blog.reading_time);
    // const newReadTime = readTime + blog.reading_time;

    setReadTime(readTime + time);
  };

  return (
    <>
      <div className="bg-gray-200 pb-10">
        <div className="w-11/12 mx-auto mb-10">
          <Navbar></Navbar>
        </div>

        <div className="main flex justify-between w-11/12 mx-auto text-center">
          <div className="left-container w-[70%]">
            <Blogs
              handleBookmark={handleBookmark}
              handleRead={handleRead}
            ></Blogs>
          </div>
          <div className="right-container w-[30%]">
            <h1>Reading time: {readTime}</h1>
            <h1>Bookmarked count: {bookmarks.length}</h1>

            {bookmarks.map((marked) => (
              <p>{marked.title}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
