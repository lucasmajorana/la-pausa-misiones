import { useState, useEffect, useRef } from 'react';

function Turismo() {
  const [imagenGrande, setImagenGrande] = useState(null);
  const [indexInicio, setIndexInicio] = useState(0);

  const imagenesTurismo = [
    '/misi1.jpg',
    '/misi2.jpg',
    '/misi3.jpg',
    '/misi4.jpg',
    '/misi5.jpg',
    '/misi6.jpg',
    '/misi7.jpg',
    '/misi8.jpg',
    '/misi9.jpg',
    '/misi10.jpg'
  ];

  const total = imagenesTurismo.length;
  const visible = 5;

  const intervaloRef = useRef(null);

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setIndexInicio((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(intervaloRef.current);
  }, [total]);

  const obtenerImagenesVisibles = () => {
    const imagenes = [];
    for (let i = 0; i < visible; i++) {
      imagenes.push(imagenesTurismo[(indexInicio + i) % total]);
    }
    return imagenes;
  };

  return (
    <main className="turismo-page">
      <h2>Turismo en Misiones</h2>
      <p>Explora naturaleza, cultura y tranquilidad cerca de La Pausa.</p>
      <div className="carrusel-galeria">
        {obtenerImagenesVisibles().map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Turismo ${index + 1}`}
            onClick={() => setImagenGrande(src)}
          />
        ))}
      </div>

      {imagenGrande && (
        <div className="modal" onClick={() => setImagenGrande(null)}>
          <div className="modal-contenido">
            <img src={imagenGrande} alt="Vista ampliada" />
          </div>
        </div>
      )}
    </main>
  );
}

export default Turismo;
