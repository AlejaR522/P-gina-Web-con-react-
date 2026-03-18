export default function ThumbNail({product}) {
    return (
        <a className="thumbnail" href={product.link} target="_blank" rel="noopener noreferrer">
            <img src={product.thumbnail} alt={product.title} />
        </a>
    );
}