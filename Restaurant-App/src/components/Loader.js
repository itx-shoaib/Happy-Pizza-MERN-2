import React, { useState, CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    margin:"300px"
  };
  

  return (
    <div>
      <div className="sweet-loading">
      {/* <ClipLoader color={color} loading={loading} cssOverride={override} size={150} /> */}
      <SyncLoader
  cssOverride={override}
  color={color}
  loading={loading}
  margin={50}
  size={100}
  speedMultiplier={1}
/>
      </div>
    </div>
  );
}

export default Loader;