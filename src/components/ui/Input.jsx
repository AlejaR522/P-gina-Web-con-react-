// Declara el componente reutilizable del campo de texto.
export default function Input({ type, placeholder, setTerm, searchTerm }) {
    // Crea el manejador que actualiza el término escrito.
    const handledChange = (e) => {
        // Guarda el valor nuevo dentro del estado compartido.
        setTerm(e.target.value);
    };

    // Retorna el input estilizado.
    return (
        // Dibuja el campo central de la barra de búsqueda.
        <input
            // Define el tipo del input.
            type={type}
            // Muestra un texto guía cuando no hay contenido.
            placeholder={placeholder}
            // Escucha los cambios del campo.
            onChange={handledChange}
            // Mantiene el valor sincronizado con React.
            value={searchTerm}
            // Aplica estilos similares al input del mockup.
            className="min-w-0 flex-1 px-4 text-lg text-slate-800 outline-none placeholder:text-slate-500"
        />
    );
}
