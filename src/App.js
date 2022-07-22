import "./App.css";
import SearchBar from "./components/Layout/SearchBar/SearchBar";
import StyleGlobal from "./components/StyleGlobal/StyleGlobal";
import Header from "./components/Layout/Header";
import { useSelector } from "react-redux";
import Form from "./components/Form/Form";
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
    const openModal = useSelector((state) => state.actions.isOpen);
    return (
        <div className="App">
            <StyleGlobal>
                <Header />
                {openModal && <Form />}
                <SearchBar />
                <Pokemons />
            </StyleGlobal>
        </div>
    );
}

export default App;
