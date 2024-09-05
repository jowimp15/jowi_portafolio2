import ProyectContent from "./ProyectContent.jsx"

export default function ArrayProyects(){

    /* the sintaxis for add a new proyect is <ProyectContent title="titulo" img="" description="" url="">
        icon element be here <i className="icon _wathever_class"></i>
    </ProyectContent>

    */
    return(
    <>
        <ProyectContent title="GaleryImage" img="assets/MyProyects/Galery_Vacation.jpg" description="(Aún no está completa), su función es administrar una serie de imágenes vacacionales por el usuario divididas por carpeta donde habrá un campo de búsqueda de carpeta." url="https://jowimp15.github.io/galery_img_vacations/">
        </ProyectContent>

        {/* ---- */}

        <ProyectContent title="Lista de Tareas" img="assets/MyProyects/lista_de_tareas.jpg" description={`
        Es un proyecto donde el usuario puede hacer una lista de tareas que se guardarán en su navegador, la especialidad de esta lista es que puede añadirle combinaciones de colores diferentes.
                
        Esta página tiene un apartado donde podrás hacer combinaciones de dos colores y si quieres más te redirigirá a una página donde podrás crear más colores. Le podrás poner nombre para poder buscarlo en la página.
                
        Este proyecto mayormente lo hice para poder practicar la API del DOM IndexedDB.`} url="https://jowimp15.github.io/tasklist_color/"></ProyectContent>

        {/* ---- */}

        <ProyectContent title="MyBooks" img="assets/MyProyects/MyBooks.jpg" description={`
        Desarrollo de una Aplicación de Lista de Libros (Prueba técnica de Midudev)
        Es una lista de libros con función de filtrado y método de guardado.

        Características:
        1. Visualización de libros disponibles.
        2. Creación de lista de lectura y posibilidad de mover libros entre listas.
        3. Filtrado de libros por género con contador de libros disponibles y en lista de lectura.
        4. Sincronización del estado global entre libros disponibles y en lista de lectura.
        5. Persistencia de datos en almacenamiento local del navegador.
        6. Sincronización entre pestañas sin necesidad de Backend.
        7. Despliegue en servicio de hosting gratuito con URL pública.
        8. Al menos un test implementado.

        Hecho con ReactTs + Vite`} url="https://jowimp15.github.io/mybooks/"></ProyectContent>

        {/* ---- */}


        <ProyectContent title="Subcripciones" img="assets/MyProyects/suscripciones.jpg" description={`
        Sirve para hacer suscripciones de estudiantes o maestros. La mecánica que utilizapermite que el estudiante se pueda suscribir a una materia siempre y cuando exista.Para que haya materias, tiene que haber maestros. Los maestros podrán apuntarse,elegir una foto opcional y hacer una breve descripción de su asignatura y de ellosmismos. De esta manera, cuando aparezca la tarjeta del maestro, los estudiantespodrán ver su descripción.`} url="https://jowimp15.github.io/susbcribers/"></ProyectContent>

        {/* ---- */}

        <ProyectContent title="TVshow" img="assets/MyProyects/TVshow.jpg" description={`Es donde puedes buscar series de televisión, también tiene un mecanismo de guardado. Este proyecto lo hice principalmente para pulir mi conocimiento con las API. Está conectado a la API de la página de TVmaze.`} url="https://jowimp15.github.io/tvshow/"></ProyectContent>

        {/* ---- */}

        <ProyectContent title="Primer Portafolio" img="assets/MyProyects/portafolio.jpg" description={`Este fue mi primer portafolio; aún no está terminado porque le faltan muchos detalles, como la opción de desactivar las animaciones, redimensionar las imágenes de las páginas de terceros y adaptar su contenedor a su tamaño, entre otras cosas. Me desanimé, así que decidí crear otro portafolio más sencillo de leer y entender, que es el actual que estoy usando. Sin embargo, eso no significa que lo dejaré ahí, ya que lo retomaré después, al igual que todos mis proyectos pendientes. Decidí dejar mi primer portafolio como un proyecto, ya que me costó mucho hacerlo.`} url="https://jowimp15.github.io/jowi_portafolio/"></ProyectContent>
    </>)
}