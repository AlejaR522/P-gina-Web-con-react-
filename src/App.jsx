// Importa el hook que nos permite guardar datos locales en el componente.
import { useState } from 'react'
// Importa la barra superior con el logo y el buscador.
import Navbar from './components/Navbar'
// Importa la sección que dibuja la grilla de productos.
import Results from './components/Results'

// Declara el componente principal de la aplicación.
function App() {
  // Guarda la lista de productos obtenidos desde el backend.
  const [products, setProducts] = useState([])
  // Guarda el texto actual escrito en la barra de búsqueda.
  const [searchTerm, setTerm] = useState('Coffee')
  // Agrupa las props necesarias para la barra de navegación.
  const navbarProps = { setProducts, searchTerm, setTerm }

  // Retorna toda la interfaz principal.
  return (
    // Crea el fondo general de la página y centra el contenedor principal.
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8f6f0,_#efebe1_55%,_#dfd8cb)] px-4 py-6 text-slate-900 sm:px-6">
      {/* Dibuja el marco redondeado que envuelve toda la experiencia. */}
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border-[4px] border-stone-800 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
        {/* Inserta la barra superior con buscador y logo. */}
        <Navbar {...navbarProps} />
        {/* Inserta la grilla o el estado vacío de resultados. */}
        <Results products={products} searchTerm={searchTerm} />
      </section>
    </main>
  )
}

// Exporta el componente para que pueda usarse en main.jsx.
export default App
