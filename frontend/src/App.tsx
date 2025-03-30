import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h1 className="text-3xl font-bold">404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
