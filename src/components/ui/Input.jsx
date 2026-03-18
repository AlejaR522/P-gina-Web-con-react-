export default function Input({ type, placeholder, setTerm, searchTerm }) {
    const handledChange = (e) => {
        setTerm(e.target.value)
    }
    return (
        <input type={type} placeholder={placeholder} onChange={handledChange} value={searchTerm} />

    )

}
