import { useEffect, useState } from "react";
import "../Portafolio.css"

export default function Main_header(){
    // const [matchQueryTablet, setMatchQueryTablet] = useState(false)

    /********************** MENU QUERY AREA ********************/

    // useEffect(()=>{

    //     function handlerTableChange(e){
    //         if(e.matches)setMatchQueryTablet(e.matches)
    //         else setMatchQueryTablet(e.matches)
    //     }

    //     let queryTablet = window.matchMedia(`(max-width:992px)`)
    //     queryTablet.addEventListener("change",handlerTableChange)

    //     if(window.innerWidth > 992) setMatchQueryTablet(false) 
    //     else setMatchQueryTablet(true)

    //     return () =>{
    //         queryTablet.removeEventListener("change", handlerTableChange)
    //     }
    // },[])


    /********************** COLOR THEME AREA ********************/

    let root = document.documentElement

    // for add default color 
    useEffect(()=>{
        if(!localStorage.getItem("theme")){
            localStorage.setItem("theme","--background-color1")
        }

        root.style.setProperty("--color-change",`var(${localStorage.getItem("theme")})`)
    }, [])

    function handlerShowContainerTheme(e){
        document.querySelector(".container-theme_color").classList.toggle("container-theme_color_active")
    }
    function handlerTheme(e){

        switch (parseInt(e.target.dataset.theme)){
            case 1:
                localStorage.setItem("theme","--background-color1")
                root.style.setProperty("--color-change",`var(--background-color1)`)
                break;
            case 2:
                localStorage.setItem("theme","--background-color2")
                root.style.setProperty("--color-change",`var(--background-color2)`)
                break;
            case 3:
                localStorage.setItem("theme","--background-color3")
                root.style.setProperty("--color-change",`var(--background-color3)`)
                break;
            case 4:
                localStorage.setItem("theme","--background-color4")
                root.style.setProperty("--color-change",`var(--background-color4)`)
                break;
            case 5:
                localStorage.setItem("theme","--background-color5")
                root.style.setProperty("--color-change",`var(--background-color5)`)
                break;
            default:
                break;
        }
    } 

    /********************** SHOW AND HIDE MENU AREA ********************/
    
    function handlerMenu(e){
        if(e.target.matches(".icon-close_menu")){
            e.target.classList.add("none")    
            document.querySelector(".icon-menu").classList.remove("none")    
            document.querySelector(".menu").classList.remove("menu_active")    
        }
        if(e.target.matches(".icon-menu")){
            e.target.classList.add("none")    
            document.querySelector(".icon-close_menu").classList.remove("none")
            document.querySelector(".menu").classList.add("menu_active")
        }   
    }

    return(
        <header className="main_header">
        <div className="content_header">
        <div className="container_icon_menu" onClick={handlerMenu}>
            <i className="bi bi-x-lg icon-close_menu none"></i>
            <i className="bi bi-list icon-menu"></i>
        </div>
        <div className="container-theme_color" onClick={handlerTheme}>
            <button  className="theme_1" data-theme={1}></button>
            <button  className="theme_2" data-theme={2}></button>
            <button  className="theme_3" data-theme={3}></button>
            <button  className="theme_4" data-theme={4}></button>
            <button  className="theme_5" data-theme={5}></button>
        </div>
        <i className="bi bi-palette-fill icon_theme" onClick={handlerShowContainerTheme}></i>
            <nav className="menu">
                <div className="ancle_container">
                    <a className="bottom-font" href="#about_me">Sobre mi</a>
                    <a className="bottom-font" href="#pages">Paginas de Terceros</a>
                    <a className="bottom-font" href="#proyects">Mis Proyectos</a>
                    <a className="bottom-font" href="#contact">Contactos</a>
                </div>
            </nav>
            <div className="container_presentation">
                <div className="container_img_jowi">
                    <img src="./assets/escudo.jpg" alt="jowi medina" className="img_jowi"/>
                </div>
                <div className="container_main_title">
                    <h1 className="principal_title">Jowi Medina</h1>
                </div>
            </div>
            <div className="container_description">
                    <h2 className="description_text_header">Desarrollador Junior Frontend Developert</h2>
            </div>
        </div>
    </header>
)
}