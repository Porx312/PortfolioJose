import githubima from "../assets/xd.png"
import linkimg from "../assets/link.png"
import proyectimg from "../assets/IUCOLOR.png"
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
        <h2 className="name-proyect">SVGL - A Beatutiful libary with svg logos</h2>
        <div className="tegnology"></div>
        <p className="description-project">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam iste accusantium eligendi praesentium architecto itaque possimus soluta ea! Perspiciatis odit eum officiis delectus eligendi ratione vel ipsum dolor possimus temporibus!</p>
        <div className="container-btn-projects">
            <button className="btn-proyects"> <img src={githubima} alt="github"/> Code</button>
            <button className="btn-proyects"> <img src={linkimg} alt="link"/> Preview</button>
        </div>
       </div>
    </article>
    <button className="more-project">Mas Proyectos..</button>
</section>
  )}

export default Proyectos
