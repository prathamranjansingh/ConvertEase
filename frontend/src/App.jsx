import {BrowserRouter as Router,  Route,  Routes } from "react-router-dom"
import Home from "./pages/Home"
import ImageConverterForm from "./pages/Convert"
import CompressImagePage from "./pages/CompressPage"
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compress' element={<CompressImagePage/>}/>
        <Route path='/convert' element={<ImageConverterForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
