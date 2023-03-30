import React from "react";

const Input = (props) => {
  return (
    <input {...props} className={`bg-[color:var(--input-color)] rounded-[30px] ${(props.className ? " " + props.className : "")}`} style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}/>
  )
};

export default Input;
