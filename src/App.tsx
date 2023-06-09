import {Routes, Route} from 'react-router-dom'
import { Catalog,  Error404, Films, Landing } from './views'




function App() {
  
  return (
    <div>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/movies' element={<Catalog type='movie'/>}/>
          <Route path='/series' element={<Error404/>}/>
          <Route path='/search' element={<Catalog type='search'/>}/>

          <Route path='/movie/:id' element={<Films mediaType='movie'/>}/>
          <Route path='/serie/:id' element={<Films mediaType='tv'/>}/>
        </Routes>
    </div>
  )
}

export default App
