import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Sender from './pages/Sender'
import Reciever from './pages/Reciever'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/send/:roomid' element={<Sender/>}/>
        <Route path='/recieve/:roomid' element={<Reciever/>} />
      </Routes>
    </div>
  )
}

export default App
