import React from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Posts = () => {
  let location=useLocation();
  
  console.log(queryString.parse(location.search))
  
 
  
  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
    </div>
  );
};

export default Posts;
