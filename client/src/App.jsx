import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Post } from './pages/Post'
import { Home } from './pages/Home'
import { AddPost } from './pages/AddPost'
import { SearchPost } from './pages/SearchPost'

const App= () => {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Post/>}/>
        <Route path="/search" element={<SearchPost/>}/>
        <Route path="/add" element={<AddPost/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
