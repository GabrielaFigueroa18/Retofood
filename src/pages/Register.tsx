import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import logoRetoFood from "../assets/logo-retofood.png";

function Register() {
  const navigate = useNavigate();

  const [mostrarPassword, setMostrarPassword] =
    useState(false);

  return (
    <main className="register-page">

      <div className="register-layout">

        {/* ==================================
            PRESENTACIÓN - PC
        =================================== */}

        <section className="register-presentation">

          <img
            src={logoRetoFood}
            alt="RetoFood"
            className="register-desktop-logo"
          />

          <div className="presentation-content">

            <span>
              Únete a RetoFood
            </span>

            <h2>
              Descubre nuevos
              <br />
              sabores y lugares.
            </h2>

            <p>
              Encuentra opciones económicas,
              completa retos y gana experiencia
              mientras descubres nuevos lugares
              para comer.
            </p>

          </div>

          <div className="presentation-badge">
            🍔 Explora · ⭐ Califica · 🏆 Compite
          </div>

        </section>


        {/* ==================================
            FORMULARIO
        =================================== */}

        <section className="register-form-section">

          {/* Solo aparece en móvil */}

          <div className="register-mobile-logo">
            <img
              src={logoRetoFood}
              alt="RetoFood"
            />
          </div>


          <header className="register-header">

            <h1>Crea tu cuenta</h1>

            <p>
              Empieza a coleccionar sabores, lugares y retos.
            </p>

          </header>


          <form
            className="register-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* Primera fila */}

            <div className="register-row">

              <div className="register-field">

                <label htmlFor="nombre">
                  Nombre de usuario
                </label>

                <input
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu nombre o apodo"
                  autoComplete="name"
                />

              </div>


              <div className="register-field">

                <label htmlFor="correo">
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  type="email"
                  placeholder="estudiante@ejemplo.com"
                  autoComplete="email"
                />

              </div>

            </div>


            {/* Contraseña */}

            <div className="register-field">

              <label htmlFor="password">
                Contraseña
              </label>

              <div className="password-field">

                <input
                  id="password"
                  type={
                    mostrarPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Mínimo 6 caracteres"
                  minLength={6}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setMostrarPassword(!mostrarPassword)
                  }
                  aria-label="Mostrar u ocultar contraseña"
                >
                  {mostrarPassword ? "●" : "○"}
                </button>

              </div>

            </div>


            {/* Institución */}

            <div className="register-field">

              <label htmlFor="institucion">
                Institución Educativa
              </label>

              <select
                id="institucion"
                defaultValue=""
              >

                <option
                  value=""
                  disabled
                >
                  Selecciona tu Universidad / Colegio
                </option>

                <option value="udb">
                  Universidad Don Bosco
                </option>

                <option value="ues">
                  Universidad de El Salvador
                </option>

                <option value="uca">
                  Universidad Centroamericana José Simeón Cañas
                </option>

                <option value="utec">
                  Universidad Tecnológica de El Salvador
                </option>

                <option value="otra">
                  Otra institución
                </option>

              </select>

            </div>


            {/* Sede y municipio */}

            <div className="register-row">

              <div className="register-field">

                <label htmlFor="sede">
                  Sede / Campus
                </label>

                <select
                  id="sede"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Selecciona la sede
                  </option>

                  <option value="soyapango">
                    Soyapango
                  </option>

                  <option value="antiguo-cuscatlan">
                    Antiguo Cuscatlán
                  </option>

                  <option value="otra">
                    Otra sede
                  </option>

                </select>

              </div>


              <div className="register-field">

                <label htmlFor="municipio">
                  Ciudad / Municipio
                </label>

                <select
                  id="municipio"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Selecciona tu municipio
                  </option>

                  <option value="san-salvador">
                    San Salvador
                  </option>

                  <option value="soyapango">
                    Soyapango
                  </option>

                  <option value="santa-tecla">
                    Santa Tecla
                  </option>

                  <option value="antiguo-cuscatlan">
                    Antiguo Cuscatlán
                  </option>

                  <option value="mejicanos">
                    Mejicanos
                  </option>

                  <option value="apopa">
                    Apopa
                  </option>

                </select>

              </div>

            </div>


            {/* Términos */}

            <label className="register-terms">

              <input type="checkbox" />

              <span>
                Acepto los{" "}
                <strong>
                  Términos y Condiciones
                </strong>
              </span>

            </label>


            <button
              type="submit"
              className="create-account-button"
            >
              Crear Cuenta
            </button>

          </form>

            <p className="register-login">

            ¿Ya tienes cuenta?{" "}

            <button
                type="button"
                onClick={() => navigate("/Login")}
            >
                Inicia Sesión
            </button>

            </p>


          <button
            type="button"
            className="register-back"
            onClick={() => navigate("/")}
          >
            ← Volver al inicio
          </button>

        </section>

      </div>

    </main>
  );
}

export default Register;