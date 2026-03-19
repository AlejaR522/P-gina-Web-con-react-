// Declara el botón que consulta el backend local.
export default function Button({ setProducts, searchTerm, TextChild }) {
    // Define la función que ejecuta la búsqueda.
    const handleclick = () => {
        // Llama al endpoint del servidor con el término actual.
        fetch(`http://localhost:3000/products?k=${searchTerm}`)
            // Convierte la respuesta a formato JSON.
            .then(res => res.json())
            // Guarda los productos recibidos en el estado principal.
            .then(data => setProducts(data));
    };

    // Retorna el botón visual del buscador.
    return (
        // Crea un botón naranja cuadrado con interacción hover.
        <button
            // Ejecuta la búsqueda cuando se hace clic.
            onClick={handleclick}
            // Aplica el estilo visual inspirado en la referencia.
            className="grid w-16 place-items-center bg-[#f6b254] text-slate-900 transition hover:bg-[#eda63f]"
            // Declara un nombre accesible para tecnologías asistivas.
            aria-label={TextChild}
            // Define el tipo del botón para evitar submits implícitos.
            type="button"
        >
            {/* Inserta una lupa dibujada con SVG inline. */}
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                {/* Dibuja el círculo principal de la lupa. */}
                <circle cx="11" cy="11" r="6"></circle>
                {/* Dibuja el mango de la lupa. */}
                <path d="m20 20-4.35-4.35"></path>
            </svg>
        </button>
    );
}
