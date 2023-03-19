import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.List}>
      {options.map((item) => (
        <li key={item}>
          <button
            className={s.Button}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
