import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCards from "./components/ProductCards";
import "./styles/style.scss"

export const ThemeContext = createContext("light");
const ThemeApp = () => {

  const [theme, setTheme] = useState("light");
  const themeClassName = theme === 'dark' ? 'dark' : '';
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`main-container ${themeClassName}`} >
            <Navbar />
            <HeroSection />
            <ProductCards />
        </div>
    </ThemeContext.Provider>
  );
};

export default ThemeApp;
