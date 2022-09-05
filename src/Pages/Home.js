import React, { useState, useEffect } from "react";
import ListPost from "../Components/ListPost";
import axios from "axios";
import Comment from "../Components/Comment";

const Home = ({ user }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const res = axios
      .get("http://localhost:8000/post/getAllPost")
      .then((res) => {
        setList(res.data.data);
        // console.log(res.data.data);
      });
  }, []);
  return (
    <div className=" rounded-xl bg-primary flex-1 h-[620px]  scrollbar-thin scrollbar-thumb-Secondary scrollbar-track-Tertairy overflow-hidden overflow-y-scroll mb-5 ">
      <div className="">
        <div className="rounded-xl h-fit bg-Secondary flex-1 mx-4 mt-4">
          <Comment user={user} />
        </div>
        {list.map((item) => (
          <ListPost item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
