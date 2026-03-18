import Input from "./ui/Input";
import Button from "./ui/Button";

export default function Navbar({setProducts, searchTerm, setTerm}) {
    const propsInput = {
        type: "text",
        placeholder: "Search products...",
        setTerm: setTerm,
        searchTerm: searchTerm
    }

    const propsButton = {
        setProducts: setProducts,
        searchTerm: searchTerm,
        TextChild: "Search"
    }

    return (
        <nav className="navbar">
            <h1>AMAZON</h1>
            <Input {...propsInput} />
            <Button {...propsButton} />

        </nav>
    )
}