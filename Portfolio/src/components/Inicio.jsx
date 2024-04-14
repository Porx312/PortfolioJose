import me from "../assets/perfil.jpg"
import linkedin from "../assets/correo.png"
import correo from "../assets/linke.png"
import github from "../assets/xd.png"
import "./inicio.css"
const Inicio = () => {
  return (
    <section id="inicio" className="about-presentation">
    <div className="presentation-text">
            <h2 className="presentation-h2">Soy <span>Jose Blanco</span></h2>
            <h1>Desarrollador Web</h1>
            <div className="presentation-btn-container">
             <a   className="btn-presentation" target="_blank" rel="noopener noreferrer" href="mailto:joseblancodev@gmail.com?Subject=he%20mirado%20tu%20portfolio%20" > <img src={correo} alt="contacto"/> </a>
         <a  className="btn-presentation"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jos%C3%A9-blanco-83a12a254/"><img src={linkedin} alt="linkedin"/> </a>
                <a  className="btn-presentation" target="_blank" rel="noopener noreferrer" href="https://github.com/Porx312"><img src={github} alt="github"/></a>
            </div>
    </div>
    <div className="presentation-picture">
        <img src={me} alt="jose blanc" />
    </div>
</section>
  )}

export default Inicio
