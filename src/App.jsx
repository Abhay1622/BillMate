import React, { useState } from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Homepage, Card } from './components/layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Generate from './components/generate'
import InvoicePreview from './components/InvoicePreview'

function App() {
  const [color, setColor] = useState("light")

  const themeChange = () => {
    const newColor = color === "light" ? "dark" : "light";
    document.body.style.backgroundColor = newColor === "light" ? "white" : "black";
    setColor(newColor)
  }

  return (
    <Router >
      <Navbar color={color} themeChange={themeChange} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Homepage color={color} />
              <Card color={color} />
            </div>
          }
        />
        <Route path='/generate' element={<Generate color={color} />} />
        <Route path='/generate/invoicepreview' element={<InvoicePreview  color={color}/> }></Route>
      </Routes>
      <Footer color={color} />
    </Router>
  )
}

export default App


