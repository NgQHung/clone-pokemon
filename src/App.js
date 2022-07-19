import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import StyleGlobal from "./components/StyleGlobal/StyleGlobal";
import Header from "./components/Layout/Header";
import { useSelector } from "react-redux/es/exports";
import Form from "./components/Form/Form";

function App() {
    const openModal = useSelector((state) => state.actionModalSlice.isOpen);
    return (
        <div className="App">
            <StyleGlobal>
                <Header />
                {openModal && <Form />}
                <SearchBar />
            </StyleGlobal>
        </div>
    );
}

export default App;
