import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/'
import { Footer } from './views/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
  </BrowserRouter>,
)
