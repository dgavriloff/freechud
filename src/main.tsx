import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

const reveal = () => document.documentElement.classList.add('is-ready')
if (document.readyState === 'complete') {
  reveal()
} else {
  window.addEventListener('load', reveal, { once: true })
  window.setTimeout(reveal, 2000)
}
