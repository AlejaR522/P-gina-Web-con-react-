import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setTerm] = useState('Airpords')
  const generateProps = { products, setProducts, searchTerm,  setTerm}

  return (
    <>
      <Navbar {...generateProps} />
    </>
  )
}

export default App
