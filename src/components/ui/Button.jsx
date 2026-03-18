export default function Button({setProducts, searchTerm, TextChild}) {
    const handleclick = ( ) => {
        fetch(`http://localhost:3000/products?k=${searchTerm}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    return (
        <button onClick={handleclick} >
            {TextChild}
        </button>
    )}