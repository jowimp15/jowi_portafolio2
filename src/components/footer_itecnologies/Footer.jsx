import "./Footer.css";

export default function Footer(){
    return(
    <footer className="footer-main">
        <div className="footer-content">
            <div className="footer-contacts_container">
                <a href="https://github.com/jowimp15" target="_blank" className="icon-github"></a>
                <a href="mailto:jowimp15@gmail.com?subject=Asunto%20del%20Correo" target="_blank" className="icon-gmail"></a>
                <a href="https://www.linkedin.com/in/jowi-medina-peralta-2092292b8/" target="_blank" className="icon-linkedin"></a>
            </div>
            {/* <form action="" className="footer-form">
                <textarea name="send_gmail" className="footer-textarea_message" title="insertar un texto para enviar"></textarea>
                <input type="submit" className="footer-submit" value="enviar"/>
            </form> */}
            <a href="assets/CV_Tecnico.pdf" target="_blank" className="CV">Curriculum Tecnico</a>
            <a href="assets/jowi_CV.pdf" target="_blank" className="CV">Curriculum Nolmal </a>
            <p className="copiright_text">©jowi Medina 2024 - Todos los derechos reservados</p>
        </div>
    </footer>)
}