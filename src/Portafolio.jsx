import './components/Main_header.css';
import Presentation from './components/Presentation.jsx';
import Main_header from "./components/Main_header.jsx";
import TopicsComponent from "./mini_component/TopicsComponent.jsx";
import Pages from './components/pages/Pages.jsx';
import Proyects from './components/proyects/Proyects.jsx';
import Technologies from './components/footer_itecnologies/Technologies.jsx';
import Footer from './components/footer_itecnologies/Footer.jsx';

function App() {

return (
<>
  <Main_header/>
  <TopicsComponent textTopics="Sobre mi" IDSection="about_me"/>
  <Presentation/>
  <TopicsComponent textTopics="Página de tercero" IDSection="pages"/>
  <Pages/>
  <TopicsComponent textTopics="Mis Proyectos" IDSection="proyects"/>
  <Proyects/>
  <TopicsComponent textTopics="Contactos" IDSection="contact"/>
  <Technologies/>
  <Footer/>
  </>
  )}

export default App
