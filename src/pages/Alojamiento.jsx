import { useState } from 'react'

function Alojamiento() {
  const [imagenGrande, setImagenGrande] = useState(null)

  const imagenesCabania = [
    "/IMG-20250213-WA0130.jpg",
    "/IMG-20250213-WA0106.jpg",
    "/IMG-20250213-WA0114.jpg",
    "/IMG-20250213-WA0116.jpg",
    "/IMG-20250213-WA0118.jpg",
    "/IMG-20250213-WA0120.jpg",
    "/IMG-20250213-WA0122.jpg",
    "/IMG-20250213-WA0124.jpg",
    "/IMG-20250213-WA0126.jpg",
    "/IMG-20250213-WA0132.jpg",
    "/IMG-20250213-WA0134.jpg",
    "/IMG-20250213-WA0136.jpg",
    "/IMG-20250213-WA0140.jpg",
    "/IMG-20250213-WA0142.jpg",
    "/IMG-20250213-WA0098.jpg",
    "/IMG-20250213-WA0100.jpg",
    "/IMG-20250213-WA0096.jpg"
  ]

  return (
      <main className="alojamiento-page">
        <section className="alojamientos">
          <article className="alojamiento-card">
            <div className="alojamiento-header">
              <h3>La Pausa</h3>
              <p className="alojamiento-precio">$50.000 por noche</p>
            </div>

            <p className="alojamiento-descripcion">
              Alojamiento frente al río Paraná, en Posadas, Misiones. Un espacio cómodo, amplio y rodeado de naturaleza, ideal para familias y grupos de amigos.
            </p>

            <h4>Servicios incluidos</h4>
            <ul className="servicios">
              <li>6/7 personas</li>
              <li>2 dormitorios</li>
              <li>Cochera</li>
              <li>Cocina completa</li>
              <li>2 baños</li>
              <li>Smart TV</li>
              <li>Balcón</li>
              <li>Parlante</li>
              <li>Parrilla</li>
              <li>WI-FI</li>
              <li>130m²</li>
              <li>Otra cosita</li>
            </ul>

            <h4>Galería</h4>
            <div className="galeria">
              {imagenesCabania.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`La Pausa ${index + 1}`}
                  onClick={() => setImagenGrande(src)}
                />
              ))}
            </div>

            <a 
              href="https://wa.me/5493764738830?text=Hola!%20Estoy%20interesado%20en%20alquilar%20La%20Pausa%20en%20Posadas.%20¿Está%20disponible?" 
              className="boton-contacto"
              target='_blank'
              rel="noopener noreferrer"
            >
                Consultar disponibilidad
            </a>
          </article>
        </section>

        {imagenGrande && (
          <div className="modal" onClick={() => setImagenGrande(null)}>
            <div className="modal-contenido">
              <img src={imagenGrande} alt="Vista ampliada" />
            </div>
          </div>
        )}
      </main>
    )
}
export default Alojamiento