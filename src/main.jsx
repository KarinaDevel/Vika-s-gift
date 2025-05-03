import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SideBar from './SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBar />
  </StrictMode>,
)
