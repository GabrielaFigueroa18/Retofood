import { useNavigate } from "react-router-dom";

import "./Welcome.css";
import logoRetoFood from "../assets/logo-retofood.png";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="welcome-page">

      <div className="welcome-layout">

        {/* =========================
            ZONA DEL LOGO
        ========================== */}

        <section className="welcome-brand">

          <div className="welcome-logo-circle">
            <img
              src={logoRetoFood}
              alt="Logo RetoFood"
              className="welcome-logo"
            />
          </div>

        </section>


        {/* =========================
            INFORMACIÓN
        ========================== */}

        <section className="welcome-info">

          <span className="welcome-small-title">
            Bienvenido a RetoFood
          </span>

          <h1>
            Descubre, come y
            <br />
            completa el reto
          </h1>

          {/* Solo se muestra en PC */}
          <p className="welcome-description">
            Encuentra lugares económicos para comer,
            descubre nuevos sabores y completa retos
            mientras ganas experiencia.
          </p>


          <div className="welcome-actions">

            <button
            type="button"
            className="welcome-button primary"
            onClick={() => navigate("/Login")}
            >
            Iniciar Sesión
            </button>

            <button
              type="button"
              className="welcome-button secondary"
              onClick={() => navigate("/registro")}
            >
              Registrarse
            </button>

          </div>

        </section>

      </div>


      <p className="welcome-footer">
        Tu próxima comida favorita está a un reto de distancia.
      </p>

    </main>
  );
}

export default Welcome;