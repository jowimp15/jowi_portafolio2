import { useState } from "react";
import "./ContentPages.css";

export default function ContentPages({img, title, description, getDescription, getTitleText, getUrlPage, url}){
    const [parentElement, setParentElement] = useState("")

    function handlerGetElements(e){
        setParentElement(e.currentTarget)
        getDescription(description)
        getTitleText(title)
        getUrlPage(url)

        let arrayImage = Array.from(document.querySelectorAll(".content-page_img"))
        let arrayTitle = Array.from(document.querySelectorAll(".content-page_title"))

        for (const el of arrayImage) {
            el.classList.remove("change_position_img")
        }
        for (const el of arrayTitle) {
            el.classList.remove("change_position_title")
        }
    }

    function changeImgPosition(e){
        let title = parentElement.querySelector(".content-page_title")
        title.classList.add("change_position_title")
        e.currentTarget.classList.add("change_position_img")
    }

    function changeTitlePosition(e){
        let image = parentElement.querySelector(".content-page_img")
        image.classList.remove("change_position_img")
        e.currentTarget.classList.remove("change_position_title")
    }

return(<div className="content-page invisible down-element" onClickCapture={(e)=>handlerGetElements(e)}>
    <div className="content-page_title" onClick={(e)=>changeTitlePosition(e)} >
        <h3 className="text_info">{title}</h3>
    </div>

    <div className="content-page_img" onClick={(e)=>changeImgPosition(e)}>
        <img src={img} alt={`imagen de ${title}`}/>
    </div>
</div>)
}