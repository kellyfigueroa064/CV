import "./App.scss";
import Competencies from "./components/Competencies/Competencies";
import Languages from "./components/Lenguages/Languages";
import Personal from "./components/Personal/Personal";

function App() {
  return (
    <main class="main-container">
      <aside class="sidebar">
        <div class="circle"></div>
        <h1 class="name">Kelly Alexandra Figueroa Curiel</h1>
        <h3 class="profesion">Ingeniera de Sistemas</h3>
        <div class="avatar"></div>
        <div class="features">
          <Personal />

          <Competencies />

          <Languages />
        </div>
      </aside>

      <div class="content">
        <div class="profile">
          <h3>Perfil</h3>
          <p>
            Mi aspiración es poder desarrollar mis habilidades dentro de la
            industria tecnológica para crecer como profesional y mantenerme en
            constante aprendizaje.
          </p>
        </div>
        <div class="education padding-1point5rem ">
          <h3>Formación</h3>
          <div class="title">
            <h4>Ingeniera de Sistemas</h4>
            <h4>oct 2014 - dic 2020</h4>
          </div>
          <a href="https://virtualunexpo.com" target="_blank" rel="noreferrer">
            Universidad Nacional Experimental Politécnica "Antonio José de
            Sucre"
          </a>
        </div>
        <div class="experience">
          <h3>Experiencia</h3>
          <ul class="jobs">
            <li class="padding-1point5rem">
              <div class="title">
                <h4>Consultor Junior</h4>
                <h4>ago 2021 - presente</h4>
              </div>
              <a
                href="https://www.linkedin.com/company/corporacion-sybven/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                Corporación Sybven, C.A.
              </a>
              <p>
                Desarrollo ágil de aplicaciones móviles y web en lenguaje
                Javascript implementando una cultura de innovación, colaboración
                y creatividad utilizando la herramienta Kony Visualizer.
              </p>
            </li>
            <li class="padding-1point5rem">
              <div class="title">
                <h4>Analista de Gestión tecnológica</h4>
                <h4>jun 2020 - ago 2021</h4>
              </div>
              <a
                href="https://www.linkedin.com/company/banco-mercantil/"
                target="_blank"
                rel="noreferrer"
              >
                Mercantil Banco, C.A.
              </a>
              <p>
                Business Intelligence Analyst capaz de analizar, desarollar,
                implantar y mantener la ejecución permanente de la Solución de
                Auditoría Continua diseñada para la Unidad de Auditoría Interna
                con tecnología robusta y flexible que integra la Analítica de
                Datos (Big Data) y la Inteligencia Artificial, acorde a los
                procedimientos establecidos en la institución y los entes
                regulatorios.
              </p>
            </li>
            <li class="padding-1point5rem">
              <div class="title">
                <h4>Estudiante de Reserva Estratégica</h4>
                <h4>jun 2019 - may 2020</h4>
              </div>
              <a
                href="https://www.linkedin.com/company/banco-mercantil/"
                target="_blank"
                rel="noreferrer"
              >
                Mercantil Banco, C.A.
              </a>
              <p>
                Desarrollo del proyecto de pasantías titulado "Sistema de
                Auditoría Continua basado en Inteligencia Artificial para la
                empresa Mercantil C.A., Banco Universal" desarrollado en
                lenguaje PHP con los frameworks Laravel 5.8 y Bootstrap 4, con
                PostgreSQL como SGBD.
              </p>
            </li>
          </ul>
        </div>
        <div class="certificates">
          <h3>Certificaciones</h3>
          <div class="title">
            <h4>Scrum Fundamentals Certified</h4>
            <h4>jul 2021 - sin vencimiento</h4>
          </div>
          <a
            href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-KellyAlexandraFigueroaCuriel.-861371.pdf"
            target="_blank"
            rel="noreferrer"
          >
            SCRUMstudy - Accreditation Body for Scrum and Agile
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
