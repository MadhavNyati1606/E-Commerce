
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <div className='overflow-hidden'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
        <SideBar/>
        <Footer/>
      </Router>
    </div>  
  )
}

export default App
