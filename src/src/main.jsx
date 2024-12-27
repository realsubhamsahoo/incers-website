import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from './components/App'
import Events from './components/Events'
import Landingbe from './components/Landingbe'
// import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <Events/>
    <Landingbe/>
    {/* <Footer/> */}
  </StrictMode>,
)
