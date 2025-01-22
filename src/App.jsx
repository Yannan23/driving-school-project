// import './App.css'

import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WhyChooseUs from './pages/why-choose-us/why-choose-us'
import Package from './pages/package/package'
import Location from './pages/location/location'
import ContactUs from './pages/contact-us/contact-us';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="package" element={<Package />} />
        <Route path="location" element={<Location />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
