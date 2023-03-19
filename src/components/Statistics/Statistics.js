import React from "react";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.List}>
      <li>Good: {good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad: {bad} </li>
      <li>total: {total} </li>
      <li>positive feedback: {positivePercentage} % </li>
    </ul>
  );
};

export default Statistics;
