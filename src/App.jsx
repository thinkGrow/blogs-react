// import { useState } from 'react'
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-200 pb-10">
        <div className="w-11/12 mx-auto mb-10">
          <Navbar></Navbar>
        </div>

        <div className="main flex justify-between w-11/12 mx-auto text-center">
          <div className="left-container w-[70%]">
            <Blogs></Blogs>
          </div>
          <div className="right-container w-[30%]">
            <h1>Reading time: 0</h1>
            <h1>Bookmarked count: 0</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
