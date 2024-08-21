import "./Pages.css";
import ArrayPages from "./ArrayPages";
import { useEffect, useState } from "react";

export default function Pages(){
    const [description, setDescription] = useState("")
    const [titleText, setTitleText] = useState("")
    const [elementNow, setElementNow] = useState(0)
    const [isPositionSlayerChange,setIsPositionSlayerChange] = useState(false)

    function getDescription(text){
        setDescription(text)
    }
    function getTitleText(title){
        if(titleText !== title)
        document.querySelector(".pages-animation_container").classList.toggle("pages-animation")

        setTitleText(title)
    }

    let slayer

// load the first elemento of the slayer
    useEffect(()=>{
        slayer = document.querySelector(".pages-slayer_container") 
        if(!isPositionSlayerChange){   
        slayer.children[elementNow].classList.remove("invisible")
        slayer.children[elementNow+1].classList.remove("invisible")

        slayer.children[elementNow].classList.remove("down-element")
        slayer.children[elementNow].classList.add("center-element")
        setIsPositionSlayerChange(true)
    }
    })

    // slayer buttom up
    function downButton(){ 
        setElementNow(prevElementNow =>{
            const newElementNow = (slayer.children[elementNow+1]) ? prevElementNow+1 : prevElementNow;
        
            if(slayer.children[newElementNow-2]) slayer.children[newElementNow-2].classList.add("invisible")
            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.add("up-element")
            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.remove("center-element")

            slayer.children[newElementNow].classList.remove("down-element")
            slayer.children[newElementNow].classList.add("center-element")

            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.remove("invisible")

            return newElementNow
        })
    }

    // slayer buttom down
    function upButton(){
         setElementNow( prevElementNow =>{
            const newElementNow = (slayer.children[elementNow-1]) ? prevElementNow-1 : prevElementNow;

            if(slayer.children[newElementNow-1]) slayer.children[newElementNow-1].classList.remove("invisible")

            slayer.children[newElementNow].classList.remove("up-element")
            slayer.children[newElementNow].classList.add("center-element")
    
            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.remove("center-element")
            if(slayer.children[newElementNow+1]) slayer.children[newElementNow+1].classList.add("down-element")
            if(slayer.children[newElementNow+2]) slayer.children[newElementNow+2].classList.add("invisible")

            return newElementNow
         })
    }

    return(
    <article className="pages-container_principal">
        <p className="pages-description text_info">He utilizado diversas herramientas en línea que me han proporcionado recursos esenciales para el desarrollo de mis sitios web. Estas páginas me han permitido acceder a paletas de colores, tipografías elegantes y otros recursos visuales que han sido fundamentales para diseñar interfaces atractivas y funcionales. Gracias a estas herramientas, he podido asegurarme de que mis proyectos cumplan con los estándares de diseño modernos y ofrezcan una excelente experiencia de usuario.</p>

        <div className="pages-description_and_pages_slayer">
            <article className="pages-description_pages">
                <div className="pages-animation_container">
                    <h3 className="pages-title_text">{titleText}</h3>
                    <p className="pages-description_Text">
                        {description}
                    </p>
                </div>
            </article>
            <article className="pages-slayer_pages">
                    <button className="pages-slayer_button_up" onClick={upButton} ><i className="bi bi-chevron-up"></i></button>
                <div className="pages-slayer_container">
                    <ArrayPages getDescription={getDescription} getTitleText={getTitleText}/>
                </div>
                    <button className="pages-slayer_button_down" onClick={downButton} ><i className="bi bi-chevron-down"></i></button>
            </article>
        </div>

    </article>)
}
