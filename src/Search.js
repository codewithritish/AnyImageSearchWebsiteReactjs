import React, { useState } from "react";
import "./styles.css";
import Sresult from "./Sresult";
export default function Search() {
  const [img, setImg] = useState("");

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search anything"
          value={img}
          onChange={(event) => {
            const data = event.target.value;
            setImg(data);
          }}
        />

        {img === "" ? null : <Sresult name={img} />}
      </div>
    </>
  );
}
