import React, { useContext } from 'react'
import model from "../imgs/Hero_Model 1.png"
import "../styles/hero.scss"
import { ThemeContext } from '..'







const HeroSection = () => {
  const {theme, settheme} = useContext(ThemeContext);
  const themeClassName = theme === 'dark' ? 'dark' : '';
  return (
    <div className='hero-container'>
        {/* <LeftPart/> */}
        <div className='leftPart'>
        <h1 className={themeClassName}>Let's Dive in <br/> <span className='musicTxt'>Music</span> World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse fermentum </p>
        <div>
            <button className='shopBtn'>Shop now</button>
            <button className='cartBtn'>Add to cart</button>
        </div>
    </div>
        {/* <RightPart/> */}
        <div className='rightPart'>
        <img className='model' src ={model} alt='model'/>
      </div>
    </div>
  )
}

export default HeroSection
