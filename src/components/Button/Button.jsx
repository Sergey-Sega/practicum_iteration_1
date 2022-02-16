import React from "react";
import "./style.scss";
export default function Button({ title, type }) {
  return (
    <button type="button" className={"button " + type}>
      {title}
    </button>
  );
}
