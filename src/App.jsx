import { useState } from 'react'
import Navbar from './components/Navbar'
import Results from './components/Results'


function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setTerm] = useState('Airpords')
  const generateProps = { products, setProducts, searchTerm,  setTerm}

  return (
    <>
      <Navbar {...generateProps} />
      <Results products={products} />
    </>
  )
}

export default App
