import { BrowserRouter, Routes, Route } from "react-router-dom";
/*components*/
import Navbar from "./components/Navbar";
/*views*/
import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
