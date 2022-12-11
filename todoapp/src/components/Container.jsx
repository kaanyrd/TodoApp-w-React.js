// THERE ARE OTHER COMPONENTS IN IT. SO WE CAN USE CONTEXT.API

import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import ContentFooter from './ContentFooter/ContentFooter'
import Footer from './Footer/Footer'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Container() {

  const { theme, setTheme } = useContext(ThemeContext)



  return (
    <div>
      <section className={`todoapp ${theme}`}>
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <button className="button-80" role="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
      <Footer />



    </div>
  )
}

export default Container