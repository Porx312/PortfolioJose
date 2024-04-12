import { useContext } from "react"
import aboutmeimg from "../assets/sobremiPIcture.jpg"
import "./sobremi.css"
import { isDarkOrLight } from "../DarkModeContext"
const SobreMi = () => {
  const {isLight} = useContext(isDarkOrLight)
  return (
    <section id="sobremi" className={isLight ? "about-me lightmode" : "about-me"  }>
    <h2 className="about-me-text">Sobre Mi</h2>
    <article className="card-about-me">
        <div className="card-aboutmetext">
            <p> ¡Hola! Soy Jose Blanco, <span>un apasionado desarrollador web con más de un año y medio de experiencia en el mundo de la programación</span>. Actualmente, trabajo en Subway, pero mi verdadera pasión se encuentra en el desarrollo web, donde paso mis momentos libres explorando documentación, participando en cursos y resolviendo desafiantes ejercicios de programación.</p>
            <p>
            <span> Mi enfoque principal ha sido construir bases sólidas en JavaScript, HTML y CSS</span>. Aunque aún estoy perfeccionando mis habilidades, encuentro fascinante ver cómo cobra vida cada proyecto. React también es parte fundamental de mi arsenal, ya que me encanta trabajar con esta biblioteca.</p>

             <p>
                 Mi lenguaje de elección es CSS, un desafío que abrazo con entusiasmo para dominarlo al 100%. La idea de ver cómo mis estilos dan vida a mis proyectos me inspira constantemente.</p>
             
            <p> Además de mi amor por el código, disfruto de la lectura sobre desarrollo personal, <span>buscando siempre maneras de mejorar y crecer</span>. En mi tiempo libre, me sumerjo en el mundo del anime, siendo fanático de series como Vinland Saga, Jujutsu Kaisen, Hunter x Hunter y One Piece, las cuales considero fuentes valiosas de enseñanzas.</p>
           <p>  
             Antes de sumergirme en el desarrollo web,<span> me pregunté qué pasaría si aplicara la misma atención y deseo de excelencia que tengo en los juegos, como CODM (donde destaco como francotirador), a otras áreas de mi vida.</span> Fue entonces cuando decidí aventurarme en el fascinante mundo de la programación, con el firme propósito de ser excelente y dedicarme por completo a esta apasionante disciplina.</p>
             
         <p>¡Gracias por visitar mi portfolio! Estoy emocionado por lo que el futuro tiene reservado y por las oportunidades que me permitirán seguir creciendo como desarrollador.</p>
         </div>
         <div className="aboutme-picture">
                <img src={aboutmeimg} alt="jose"/>
         </div>
    </article>
</section>
  )
}

export default SobreMi
