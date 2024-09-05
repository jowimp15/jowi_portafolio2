import "./Pages.css";
import ArrayPages from "./ArrayPages";
import { useEffect, useState } from "react";

 export default function Pages(){
    const [description, setDescription] = useState("")
    const [titleText, setTitleText] = useState("")
    const [URLpage, setURLpage] = useState("")
    const [elementNow, setElementNow] = useState(0)
    const [isPositionSlayerChange,setIsPositionSlayerChange] = useState(false)

    let firstPagesDescription ="Anteriormente conocida como Adobe Kuler, es una herramienta en línea que permite a los usuarios crear, explorar y compartir paletas de colores. Permite generar esquemas de colores utilizando diferentes métodos como reglas de color, rueda de color y muestras de imágenes. Los usuarios pueden ajustar y personalizar los colores según sus preferencias y luego descargar las paletas para su uso en proyectos de diseño gráfico, desarrollo web, ilustración y más. Adobe Color ofrece una plataforma comunitaria donde los usuarios pueden explorar paletas creadas por otros, compartir sus propias creaciones y obtener inspiración para sus proyectos creativos. Es una herramienta valiosa para diseñadores y artistas que buscan experimentar con el color y crear armonías visuales impactantes."
    let firstPagesTitle = "Adobe Color"
    let firstPagesURL = "https://color.adobe.com/es/"

    function getDescription(text){
        setDescription(text)
    }
    function getTitleText(title){
        if(titleText !== title)
        document.querySelector(".pages-animation_container").classList.toggle("pages-animation")

        setTitleText(title)
    }
    function getUrlPage(url){
        setURLpage(url)
    }

    // intersection observer
    useEffect(()=>{
        const pageObserver = document.querySelector(".pages-container_principal")
        const textDescriptionPrincipal = document.querySelector(".pages-description")
        const textDescriptionPage = document.querySelector(".pages-description_pages")
        const pagesSlayerPages = document.querySelector(".pages-slayer_pages")

        const optionObserver = {
            root:null,
            rootMargin:"0px",
            threshold:0.4,
        }
    
        function observerCallback(entries, watch){
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    console.log()
                    textDescriptionPrincipal.classList.add("text-description-principal")                
                    textDescriptionPage.classList.add("text-description-page")                
                    pagesSlayerPages.classList.add("pages-slayer-pages")                
                }
            })
        }
        
        let watch = new IntersectionObserver(observerCallback,optionObserver)
        watch.observe(pageObserver)
    })
    

// load the first elemento of the slayer
let slayer

    useEffect(()=>{
        slayer = document.querySelector(".pages-slayer_container") 
        if(!isPositionSlayerChange){
            if(slayer.children.length >= 1)
            // document.querySelector(".pages-slayer_button_down").classList.add("invisible")

        document.querySelector(".pages-slayer_button_up").classList.add("invisible")
        if(slayer.children[elementNow]) slayer.children[elementNow].firstChild.classList.add("change_position_title")
        if(slayer.children[elementNow]) slayer.children[elementNow].lastChild.classList.add("change_position_img")
        if(slayer.children[elementNow]) slayer.children[elementNow].classList.remove("invisible")
        if(slayer.children[elementNow+1]) slayer.children[elementNow+1].classList.remove("invisible")

        if(slayer.children[elementNow]) slayer.children[elementNow].classList.remove("down-element")
        if(slayer.children[elementNow]) slayer.children[elementNow].classList.add("center-element")
        setIsPositionSlayerChange(true)
    }
    })

    // slayer buttom up
    function downButton(){ 
        setElementNow(prevElementNow =>{
            const newElementNow = (slayer.children[elementNow+1]) ? prevElementNow+1 : prevElementNow;

            // logic btn visible fo the limit
            if(slayer.children[newElementNow-1]){
                document.querySelector(".pages-slayer_button_up").classList.remove("invisible")
            } else{
                document.querySelector(".pages-slayer_button_up").classList.add("invisible")
            }

            if(slayer.children[newElementNow+1]){

                document.querySelector(".pages-slayer_button_down").classList.remove("invisible")
            }else{
                document.querySelector(".pages-slayer_button_down").classList.add("invisible")
            } 
        
            if(slayer.children[newElementNow-2]) slayer.children[newElementNow-2].classList.add("invisible")
            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.add("up-element")
            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.remove("center-element")

            if(slayer.children[newElementNow]) slayer.children[newElementNow].classList.remove("down-element")
            if(slayer.children[newElementNow]) slayer.children[newElementNow].classList.add("center-element")

            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.remove("invisible")

            return newElementNow
        })
    }

    // slayer buttom down
    function upButton(){
         setElementNow( prevElementNow =>{
             const newElementNow = (slayer.children[elementNow-1]) ? prevElementNow-1 : prevElementNow;

             // logic btn visible fo the limit
             if(slayer.children[newElementNow-1]){
                 document.querySelector(".pages-slayer_button_up").classList.remove("invisible")
             }else{
                 document.querySelector(".pages-slayer_button_up").classList.add("invisible")
             } 

             if(slayer.children[newElementNow+1]){
                document.querySelector(".pages-slayer_button_down").classList.remove("invisible")
             }else{
                document.querySelector(".pages-slayer_button_down").classList.add("invisible")
             } 



            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.remove("invisible")

            if(slayer.children[newElementNow]) slayer.children[newElementNow].classList.remove("up-element")
            if(slayer.children[newElementNow]) slayer.children[newElementNow].classList.add("center-element")
    
            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.remove("center-element")
            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.add("down-element")
            if(slayer.children[newElementNow+2]) slayer.children[newElementNow+2].classList.add("invisible")

            return newElementNow
         })
    }

    return(
    <article className="pages-container_principal">
        <div className="container_observer">
            <p className="pages-description text_info">He utilizado diversas herramientas en línea que me han proporcionado recursos esenciales para el desarrollo de mis sitios web.  Estas páginas me han permitido acceder a paletas de colores, tipografías elegantes y otros recursos visuales que han sido fundamentales para diseñar interfaces atractivas y funcionales. Gracias a estas herramientas, he podido asegurarme de que mis proyectos cumplan con los estándares de diseño modernos y ofrezcan una excelente experiencia de usuario.</p>
                <div className="pages-description_and_pages_slayer">
                    <article className="pages-description_pages">
                        <div className="pages-animation_container">
                            <h3 className="pages-title_text">{titleText === ""? firstPagesTitle:titleText}</h3>
                            <p className="pages-description_Text">
                                {description === ""? firstPagesDescription:description}
                            </p>
                            <a href={URLpage === "" ? firstPagesURL:URLpage } className="page-url" target="_blank">visitar la página</a>
                        </div>
                    </article>
                    <article className="pages-slayer_pages">
                            <button className="pages-slayer_button_up" onClick={upButton} ><i className="bi bi-chevron-up"></i></button>
                        <div className="pages-slayer_container">
                            <ArrayPages getDescription={getDescription} getTitleText={getTitleText} getUrlPage={getUrlPage}/>
                        </div>
                            <button className="pages-slayer_button_down" onClick={downButton} ><i className="bi bi-chevron-down"></i></button>
                </article>
            </div>
        </div>
    </article>)
}
