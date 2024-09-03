import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Carritoapp } from './Carritoapp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
    <Carritoapp />
  </StrictMode>
  </BrowserRouter >
)
