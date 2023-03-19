import React from "react";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
