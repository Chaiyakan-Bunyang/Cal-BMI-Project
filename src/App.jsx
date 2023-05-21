import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Display_Bmi from './components/Display_Bmi'


function App() {

  const[theme,setTheme] =useState('light');

  function change_theme(){
    if(theme==="light"){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
    console.log(theme);
  }

  return (
  <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} change_theme={change_theme}/>
      <div className='container'>
      <Main/>
      </div>
      <Footer/>
      
  </div>
   
  );
}

export default App
