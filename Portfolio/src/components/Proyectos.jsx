import githubima from "../assets/xd.png"
import linkimg from "../assets/link.png"
import proyectimg from "../assets/roadmapproject.png"
import "./proyectos.css"
const Proyectos = () => {
  return (
    <section id="proyectos" className="projects">
    <h2 className="projects-text">Proyectos</h2>
    <article className="projects-card">
       <div className="img">
        <img className="img-project" src={proyectimg} alt="colorproject"/>
       </div>
       <div className="content-project-card">
        <h2 className="name-proyect">RoadmapFull Stack</h2>
        <div className="tegnology"></div>
        <p className="description-project">RoadmapFull Stack: Tu guía completa para dominar el desarrollo Full Stack. Desde los conceptos básicos hasta las tecnologías avanzadas, te llevamos paso a paso hacia el éxito en la creación de aplicaciones web</p>
        <div className="container-btn-projects">
            <a target="_blank" href="https://roadmapfullstack.netlify.app/" className="btn-proyects"> <img src={githubima} alt="github"/> Code</a>
            <a href="https://github.com/Porx312/RoadmapFullStack" target="_blank" className="btn-proyects"> <img src={linkimg} alt="link"/> Preview</a>
        </div>
       </div>
    </article>
    <button className="more-project">Mas Proyectos..</button>
</section>
  )}

export default Proyectos
