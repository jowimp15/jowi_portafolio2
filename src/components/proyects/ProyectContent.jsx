import "./ProyectContent.css"

export default function ProyectContent({title, description, img, children, url}){

return(
<a href={url} target="_blank" className="proyect_ancle">
    <article className="proyect-container_content">
        <div className="proyect-img_container">
            <h3 className="proyect-title">{title}</h3>
            <img src={img} alt={title} className="proyect-img"/>
            <div className="proyect-container_icon">{children}</div>
        </div>
        <div className="proyect-description_container">
            <p className="proyect-description">{description}</p>
        </div>
    </article>
</a>)
}