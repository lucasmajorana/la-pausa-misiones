import { useState } from 'react'

function Home() {
  const [mostrarVideo, setMostrarVideo] = useState(false)

  const cambiarContenido = () => {
    setMostrarVideo(!mostrarVideo)
  }

  return (
    <main>
      <section className="mision-container">
        <div className="mision-box">
          <h3>Visión</h3>
          <p>
            Ser una marca sólida en el mercado turístico regional, reconocida por ofrecer
            experiencias integradas con la identidad local.
          </p>
        </div>
        <div className="mision-box">
          <h3>Propósito</h3>
          <p>
            Ofrecer alojamientos temporarios que combinen descanso, estética y hospitalidad.
            Generando vínculos duraderos con los huéspedes.
          </p>
        </div>
        <div className="mision-box">
          <h3>Valores</h3>
          <p>
            Creamos espacios que invitan a pausar, valorando las necesidades y preferencias de
            los invitados. Facilitamos el acceso rápido a lugares de interés para aprovechar al
            máximo la estadía.
          </p>
        </div>
      </section>

      <section className="mision-container">
        <div className="mision-box">
          <h2>Bienvenidos a La Pausa</h2>
          <p>
            Ubicado en la ciudad de Posadas, Misiones, a metros del río Paraná, <em>La Pausa</em> es un alojamiento pensado para quienes buscan tranquilidad, comodidad y conexión con la naturaleza sin alejarse de la ciudad.<br /><br />
            Nuestro alojamiento esta ubicado a pocos metros de la Costanera de posadas, ofrecemos un entorno amplio y sereno, ideal para disfrutar en familia o con amigos. Contamos con espacios abiertos para descansar, juegos para los más chicos y todo lo necesario para que tu estadía sea cómoda y memorable.<br /><br />
            A solo minutos del centro de Posadas y con rápido acceso a lugares de interés turístico, cultural y gastronómico, en <em>La Pausa</em> combinamos lo esencial del descanso con la calidez del entorno misionero.<br /><br />
            Te invitamos a frenar el ritmo, respirar profundo y disfrutar de una experiencia simple, natural y auténtica.
          </p>
        </div>
        <div className="mision-box multimedia-box">
          {mostrarVideo ? (
            <video width="600" autoPlay muted loop>
              <source src="public\VID-20250209-WA0036.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          ) : (
            <img src="/IMG-20250213-WA0130.jpg" alt="Vista del alojamiento" width="600" />
          )}

          <button className="cambiar-btn" onClick={cambiarContenido}>
            {mostrarVideo ? '← Imagen' : 'Video →'}
          </button>
        </div>
      </section>
    </main>
  )
}
export default Home
