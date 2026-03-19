// Declara la tarjeta que muestra un producto individual.
export default function ThumbNail({ product }) {
    // Guarda la URL de la imagen o usa una cadena vacía como respaldo.
    const image = product.thumbnail || "";
    // Guarda el título o usa un texto por defecto.
    const title = product.title || "Producto sin título";
    // Calcula el precio visible si la API entrega precio numérico o texto.
    const price = product.extracted_price
        ? `$${product.extracted_price}`
        : product.price || "Ver detalles";
    // Obtiene la fuente del resultado.
    const source = product.source || "Amazon";
    // Construye el texto del rating cuando existe.
    const rating = product.rating ? `${product.rating} estrellas` : null;
    // Construye el texto de reseñas cuando existe.
    const reviews = product.reviews ? `${product.reviews} reseñas` : null;
    // Obtiene un detalle adicional cuando viene en extensiones.
    const detail = Array.isArray(product.extensions) && product.extensions.length > 0
        ? product.extensions[0]
        : null;

    // Retorna la tarjeta completa.
    return (
        // Usa un enlace para llevar al producto original.
        <a
            // Aplica el layout vertical y el ancho máximo de la tarjeta.
            className="group mx-auto flex w-full max-w-[18rem] flex-col items-start text-left"
            // Coloca el enlace del producto.
            href={product.link}
            // Abre el resultado en una nueva pestaña.
            target="_blank"
            // Protege la navegación externa.
            rel="noopener noreferrer"
        >
            {/* Crea el contenedor visual de la imagen. */}
            <div className="flex h-56 w-full items-center justify-center bg-stone-50 p-4 transition duration-200 group-hover:bg-stone-100">
                {/* Dibuja la miniatura del producto. */}
                <img
                    // Usa la URL de la miniatura.
                    src={image}
                    // Usa el título como texto alternativo.
                    alt={title}
                    // Ajusta la imagen para que no se deforme.
                    className="max-h-full w-auto object-contain"
                />
            </div>
            {/* Coloca la información textual debajo de la imagen. */}
            <div className="pt-3">
                {/* Muestra la fuente del resultado. */}
                <p className="text-[10px] uppercase tracking-wide text-stone-400">
                    {source}
                </p>
                {/* Muestra el título del producto en varias líneas. */}
                <h3 className="mt-1 line-clamp-4 text-[15px] leading-5 text-slate-900">
                    {title}
                </h3>
                {/* Muestra el precio o un llamado a la acción. */}
                <p className="mt-2 text-[15px] font-semibold text-slate-900">
                    {price}
                </p>
                {/* Muestra rating y reseñas solo si existe alguno de los dos. */}
                {(rating || reviews) && (
                    // Agrupa la información secundaria en una sola línea.
                    <p className="mt-1 text-sm text-stone-500">
                        {[rating, reviews].filter(Boolean).join(" · ")}
                    </p>
                )}
                {/* Muestra un detalle adicional cuando esté disponible. */}
                {detail && (
                    // Presenta la primera extensión relevante.
                    <p className="mt-1 text-sm text-stone-600">
                        {detail}
                    </p>
                )}
            </div>
        </a>
    );
}
