import React from "react";
const Home = ({setLoginUser}) => {
  return (
    <div className="homepage">
      <h1>Buy Something</h1>
      <div className="button" onClick={()=>setLoginUser({})}>logout</div>
    </div>
  );
};

export default Home;
