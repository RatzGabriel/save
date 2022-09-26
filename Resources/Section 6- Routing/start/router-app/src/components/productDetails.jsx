import React from 'react';
import{useParams,useNavigate} from "react-router-dom";


const Productdetails = () => {
  let paramsId=useParams();
  let navigate=useNavigate()
  console.log(paramsId);

  const handleSave=()=>{
  console.log('test');
  navigate("../")
  }

  return (
    <div>
      test
      <button onClick={()=>handleSave()}>Save</button>
    </div>
  );
}

export default Productdetails;
