import React , {useState} from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Homepage , Card } from './components/layout'

function App( ) {
  const [color , setColor] = useState("light")

  const themeChange = ()=>{
    const newColor = color === "light"? "dark" : "light";
    document.body.style.backgroundColor = newColor === "light" ? "white" : "black";
    setColor(newColor)
  }

  return (
    <>
      <Navbar color = {color} themeChange = {themeChange} />
      <Homepage color={color} />
      <Card color={color} />
      <Footer color={color}/>
    </>
  )
}

export default App


