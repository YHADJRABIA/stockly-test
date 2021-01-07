import React, { useContext } from "react";
import {
  reverseString,
  fizzBuzz,
  perfectSquares,
  camelToKebab,
} from "./Exercises";
import logo from "../img/logo.png";
import Exercise from "./Exercise";

import { DataContext } from "./Context";
import { useTranslation } from "react-i18next";

const Main = () => {
  const exercises = useContext(DataContext).exercises;
  const fncs = [reverseString, fizzBuzz, perfectSquares, camelToKebab];
  const { t, i18n } = useTranslation();
  return (
    <main>
      <hgroup>
        <img
          className="stockly"
          alt="Stockly logo"
          title="Stockly"
          src={logo}
          width="320"
        ></img>
        <h1>{i18n.t("exercises.title")}</h1>
        <h3>{i18n.t("exercises.content")}</h3>
      </hgroup>
      <section className="exercises">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            title={exercise.name}
            content={exercise.content}
            name={exercise.handler}
            input={exercise.input}
            fcn={fncs[exercise.id - 1]}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
