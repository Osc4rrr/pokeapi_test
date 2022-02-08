import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePokemon from "./pages/SinglePokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
