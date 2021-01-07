import React, { useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

//Holds the data to be provided. To be imported by App.js.
export const DataProvider = (props) => {
  // Translations
  const { t, i18n } = useTranslation();

  const content = {
    // Nav
    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.fr"), code: "fr", flag: "fr", id: 2 },
    ],
    exercises: [
      {
        name: `🔄 ${i18n.t("exercise1.name")} 🔄`,
        content: i18n.t("exercise1.content"),
        handler: "reverseString",
        input: i18n.t("exercise1.default"),
        id: 1,
      },
      {
        name: `🍾 ${i18n.t("exercise2.name")} 🐝`,
        content: i18n.t("exercise2.content"),
        handler: "fuzzBuzz",
        input: i18n.t("exercise2.default"),
        id: 2,
      },
      {
        name: `√ ${i18n.t("exercise3.name")} √`,
        content: i18n.t("exercise3.content"),
        handler: "perfectSquares",
        input: i18n.t("exercise3.default"),
        id: 3,
      },
      {
        name: `🐫 ${i18n.t("exercise4.name")} 🥙`,
        content: i18n.t("exercise4.content"),
        handler: "camelToKebab",
        input: i18n.t("exercise4.default"),
        id: 4,
      },
    ],
    // Footer
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={content}>
      {props.children}
    </DataContext.Provider>
  );
};
