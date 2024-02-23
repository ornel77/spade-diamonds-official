import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import MusicScreen from './pages/MusicScreen'
import VideoScreen from './pages/VideoScreen'
import Footer from './components/Footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/musics' element={<MusicScreen />} />
        <Route path='/videos' element={<VideoScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
