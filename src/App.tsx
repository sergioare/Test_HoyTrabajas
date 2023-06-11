import {Routes, Route} from 'react-router-dom'
import { Catalog, Films, Landing } from './views'

function App() {

  return (
    <div className='pb-[70px]'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/movies' element={<Catalog type='movie'/>}/>
        <Route path='/series' element={<Catalog type='serie'/>}/>
        <Route path='/search' element={<Catalog type='search'/>}/>

        <Route path='/movie/:id' element={<Films mediaType='movie'/>}/>
        <Route path='/serie/:id' element={<Films mediaType='serie'/>}/>
      </Routes>
    </div>
  )
}

export default App
