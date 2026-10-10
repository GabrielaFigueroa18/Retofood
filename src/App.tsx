import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Bienvenida */}
        <Route
          path="/"
          element={<Welcome />}
        />

        {/* Registro */}
        <Route
          path="/registro"
          element={<Register />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Por si escribes /Login */}
        <Route
          path="/Login"
          element={<Navigate to="/login" replace />}
        />

        {/* Si escribes una dirección que no existe */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;