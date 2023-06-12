import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DivGlobalContext, Navbar } from './components/'
import { Footer } from './views/'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <DivGlobalContext>
      <Navbar/>
      <App />
      <Footer/>

  </DivGlobalContext>
  </BrowserRouter>,
)
