import ThumbNail from "./ui/ThumbNail";
export default function Results({products}) {
    return (
        <div className="results">
            {products.map((product, index) => (
                <ThumbNail key={index} product={product} />
            ))}
        </div>
    )
}