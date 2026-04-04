import { createContext, useContext, useState } from "react";
import fa from "../../locales/lang/fa";
import ps from "../../locales/lang/ps";
import en from "../../locales/lang/en";


const LangContext = createContext();

const translations = { fa, ps, en };

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("fa");

  const t = (key) => translations[lang][key] || key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
