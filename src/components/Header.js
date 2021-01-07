import React, { useContext } from "react";
import { DataContext } from "./Context";
import { useTranslation } from "react-i18next";

const Header = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <header>
      <nav>
        <div className="flags">
          {content.languages.map((lang) => (
            <img
              className="flag"
              onClick={changeLanguage(lang.code)}
              src={`https://flagcdn.com/w80/${lang.flag}.png`}
              srcSet={`https://flagcdn.com/w160/${lang.flag}.png 2x`}
              width="80"
              alt={lang.name}
              title={lang.name}
              key={lang.id}
            ></img>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
