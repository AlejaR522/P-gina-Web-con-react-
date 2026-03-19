// Importa el campo de texto reutilizable del buscador.
import Input from "./ui/Input";
// Importa el botón que ejecuta la búsqueda.
import Button from "./ui/Button";

//setProducts → función para actualizar productos
//searchTerm → lo que el usuario escribe
//setTerm → función para cambiar el texto del input
export default function Navbar({ setProducts, searchTerm, setTerm }) {
    // Agrupa las props del input para simplificar el JSX.
    const propsInput = {
        // Define que el campo será de texto.
        type: "text",
        // Texto que aparece dentro del input..
        placeholder: "Coffee",

        //Le pasas al Input:
        //la función para cambiar el valor el valor actual
        //Esto permite que el Input sea controlado (React style)
        setTerm: setTerm,
        searchTerm: searchTerm
    };

    // Agrupa las props del botón para mantener el mismo patrón.
    const propsButton = {
        // Pasa la función que guardará los productos recibidos.
        setProducts: setProducts,
        // Pasa el término actual que se consultará.
        searchTerm: searchTerm,
        // Texto que se mostrará dentro del botón.
        TextChild: "Search"
    };

    // Renderiza la franja superior.
    return (
        // Crea el fondo oscuro redondeado del encabezado.
        <nav className=" bg-[linear-gradient(180deg,_#000,_#000)] px-5 py-5 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)] sm:px-8">
            {/* Organiza el logo y el buscador de forma adaptable. */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Dibuja un bloque oscuro que recuerda al logo del ejemplo. */}
                <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-sm bg-[#131921] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    {/* Posiciona las piezas del logo artesanal. */}
                    <div className="relative">
                        {/* Muestra el texto principal del logo. */}
                        <span className="block text-3xl font-black leading-none tracking-[-0.08em] text-white">
                            amazon
                        </span>
                        {/* Dibuja la sonrisa naranja debajo del logo. */}
                        <span className="absolute left-3 top-7 h-2.5 w-12 rounded-full border-b-[3px] border-[#f59e0b]"></span>
                        {/* Agrega la punta de flecha al final de la sonrisa. */}
                        <span className="absolute left-[3.7rem] top-[1.62rem] h-2.5 w-2.5 rotate-45 border-r-[3px] border-t-[3px] border-[#f59e0b]"></span>
                    </div>
                </div>
                {/* Construye la barra de búsqueda como una sola pieza. */}
                <div className="flex min-h-12 flex-1 overflow-hidden rounded-sm border-[3px] border-[#20242b] bg-white">
                    {/* Simula el selector izquierdo tipo "All". */}
                    <div className="flex items-center gap-2 border-r border-slate-300 bg-slate-100 px-4 text-sm font-semibold text-slate-600">
                        {/* Muestra el texto del selector. */}
                        <span>All</span>
                        {/* Dibuja un indicador de desplegable. */}
                        <span className="text-[10px]">▼</span>
                    </div>
                    {/* Inserta el campo donde se escribe la consulta. */}
                    <Input {...propsInput} />
                    {/* Inserta el botón naranja de búsqueda. */}
                    <Button {...propsButton} />
                </div>
            </div>
        </nav>
    );
}
