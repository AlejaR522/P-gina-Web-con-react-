// Importa la tarjeta que representa cada producto.
import ThumbNail from "./ui/ThumbNail";

// Declara la sección donde aparecen los resultados.
export default function Results({ products, searchTerm }) {
    // Calcula si ya existen productos cargados.
    const hasProducts = products.length > 0;

    // Retorna el contenido de la zona principal.
    return (
        // Crea un área flexible con espacio interior amplio.
        <section className="flex-1 px-6 py-10 sm:px-10 sm:py-12">
            {/* Evalúa si se deben mostrar resultados o el estado vacío. */}
            {!hasProducts ? (
                // Centra el bloque de bienvenida mientras no haya resultados.
                <div className="flex h-full min-h-[420px] items-center justify-center">
                    {/* Muestra una tarjeta informativa simple y elegante. */}
                    <div className="max-w-xl rounded-[1.5rem] border border-stone-200 bg-stone-50 px-8 py-10 text-center shadow-sm">
                        {/* Dibuja un pequeño rótulo descriptivo. */}
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                            Product Search
                        </p>
                        {/* Explica qué hará el panel una vez se busque algo. */}
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-800">
                            Busca productos y llenaremos la vitrina.
                        </h2>
                        {/* Indica el término actual listo para consultar. */}
                        <p className="mt-3 text-base leading-7 text-stone-600">
                            Usa el buscador superior para consultar en Amazon. El término actual es
                            <span className="font-semibold text-stone-900"> {searchTerm}</span>.
                        </p>
                    </div>
                </div>
            ) : (
                // Dibuja una grilla con espacios amplios entre tarjetas.
                <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Recorre el arreglo y crea una tarjeta por producto. */}
                    {products.map((product, index) => (
                        // Renderiza la tarjeta individual de cada elemento.
                        <ThumbNail key={index} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
}
