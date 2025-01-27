import './App.css'

import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout';
import WhyChooseUs from './pages/why-choose-us/why-choose-us'
import Package from './pages/package/package'
import Location from './pages/location/location'
import ContactUs from './pages/contact-us/contact-us'
import './output.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="package" element={<Package />} />
          <Route path="location" element={<Location />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
