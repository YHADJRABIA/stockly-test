import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next"; // Translation module

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <small>{i18n.t("madeWith")}</small>
      <small>
        &copy;2021 {i18n.t("firstName")} {i18n.t("lastName")}
      </small>
    </footer>
  );
};

export default Footer;
