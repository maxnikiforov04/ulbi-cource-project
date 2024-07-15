import { AppRouter } from "app/providers/router";
import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
