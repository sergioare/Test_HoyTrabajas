import {Routes, Route} from 'react-router-dom'
import { Catalog, Landing } from './views'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/movies' element={<Catalog type='movie'/>}/>
        <Route path='/series' element={<Catalog type='series'/>}/>
        <Route path='/search' element={<Catalog type='search'/>}/>
      </Routes>
    </>
  )
}

export default App
