import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import logoRetoFood from "../assets/logo-retofood.png";

function Login() {
  const navigate = useNavigate();

  const [mostrarPassword, setMostrarPassword] = useState(false);

  return (
    <main className="login-page">

      <div className="login-layout">

        {/* =====================================
            PARTE IZQUIERDA - SOLO COMPUTADORA
        ====================================== */}

        <section className="login-presentation">

          <img
            src={logoRetoFood}
            alt="RetoFood"
            className="login-desktop-logo"
          />

          <div className="login-presentation-content">

            <span>Bienvenido de nuevo</span>

            <h2>
              Sigue descubriendo
              <br />
              nuevos sabores.
            </h2>

            <p>
              Explora lugares económicos, completa retos,
              gana experiencia y comparte tus lugares
              favoritos con la comunidad de RetoFood.
            </p>

          </div>

          <div className="login-presentation-badge">
            🍔 Descubre · ⭐ Comparte · 🏆 Completa retos
          </div>

        </section>


        {/* =====================================
            FORMULARIO
        ====================================== */}

        <section className="login-form-section">

          {/* Logo móvil/tablet */}

          <div className="login-mobile-logo">
            <img
              src={logoRetoFood}
              alt="RetoFood"
            />
          </div>


          {/* Título */}

          <header className="login-header">

            <h1>¡Qué gusto verte!</h1>

            <p>
              Inicia sesión para continuar tu aventura
              gastronómica.
            </p>

          </header>


          {/* Formulario */}

          <form
            className="login-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* Correo */}

            <div className="login-field">

              <label htmlFor="login-correo">
                Correo electrónico o usuario
              </label>

              <input
                id="login-correo"
                name="correo"
                type="text"
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
              />

            </div>


            {/* Contraseña */}

            <div className="login-field">

              <label htmlFor="login-password">
                Contraseña
              </label>

              <div className="login-password-field">

                <input
                  id="login-password"
                  name="password"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setMostrarPassword(!mostrarPassword)
                  }
                  aria-label={
                    mostrarPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {mostrarPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* Olvidaste contraseña */}

            <div className="forgot-password">

              <button type="button">
                ¿Olvidaste tu contraseña?
              </button>

            </div>


            {/* Iniciar sesión */}

            <button
              type="submit"
              className="login-submit"
            >
              Iniciar Sesión
            </button>

          </form>


          {/* Separador */}

          <div className="login-divider">

            <span></span>

            <p>o continúa con</p>

            <span></span>

          </div>


          {/* Google */}

          <button
            type="button"
            className="google-button"
          >
            <span className="google-letter">G</span>

            <span>
              Continuar con Google
            </span>
          </button>


          {/* Registro */}

          <p className="login-register-text">

            ¿No tienes cuenta?{" "}

            <button
              type="button"
              onClick={() => navigate("/registro")}
            >
              Regístrate aquí
            </button>

          </p>


          {/* Volver */}

          <button
            type="button"
            className="login-back"
            onClick={() => navigate("/")}
          >
            ← Volver al inicio
          </button>

        </section>

      </div>

    </main>
  );
}

export default Login;