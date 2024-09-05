import { useEffect } from "react"
import ArrayProyects from "./ArrayProyects.jsx"
import "./Proyects.css"

export default function Proyects(){

    useEffect(()=>{
        let pageObserver = document.querySelectorAll(".proyect_ancle")
        let arrayProyects = Array.from(document.querySelector(".proyect-container_proyects").children)

        arrayProyects.forEach((el, index)=>{
            el.setAttribute("id",`is_observer_${index}`)
        })

        const optionObserver = {
            root:null,
            rootMargin:"0px",
            threshold:0.2,
        }
    
        function observerCallback(entries, watch){
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    document.getElementById(entry.target.id).classList.add("is_observer")
                }
            })
        }
        
        let watch = new IntersectionObserver(observerCallback,optionObserver)

        pageObserver.forEach((el)=>{
            watch.observe(el)
        })
    })

    return(
    <section className="proyect-section">
        <p className="proyect-info_about_proyect text_info">Todos los proyectos que están presentes aún no están terminados, así que pueden contener algunos fallos. Con el tiempo seguiré haciéndoles mejoras y corrigiendo sus errores. Por el momento están pausados debido a que sigo estudiando más tecnologías o estoy en proceso de otro proyecto. Todos estos proyectos fueron creados solo con frontend, así que lo único que se verá es cómo funciona su mecanismo. En el futuro les añadiré la función de poder guardar datos.</p>
        <div className="proyect-container_proyects">
            <ArrayProyects/>
        </div>
    </section>)

}