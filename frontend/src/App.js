import "./App.css";
import DaftarBarang from "./components/DaftarBarang";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TambahBarang from "./components/TambahBarang.js";
import EditBarang from "./components/EditBarang.js";

function App() {
  return (
    <div className="App">
      <div className="menubar">
        <NavbarComponent />
      </div>

      <div className="isi">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DaftarBarang />}></Route>
            <Route path="/tambahbarang" element={<TambahBarang />}></Route>
            <Route path="/editbarang/:id" element={<EditBarang />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
