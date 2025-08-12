import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes,useLocation} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars/>} />
        <Route path='/my-bookings' element={<MyBookings />} />
        {/* Example: <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
