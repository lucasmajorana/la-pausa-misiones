function Resenas() {
  const reseñas = [
    {
      nombre: 'María G.',
      texto: '¡Hermoso lugar para descansar! La atención fue excelente y el entorno es muy tranquilo.'
    },
    {
      nombre: 'Juan P.',
      texto: 'Nos encantó nuestra estadía, super cómodo y cerca de todo. ¡Recomendado!'
    },
    {
      nombre: 'Sofía L.',
      texto: 'Ideal para desconectar unos días. Muy limpio y con todos los servicios necesarios.'
    }
  ];

  return (
    <main className="resenas-page">
      <h2>Reseñas de Huéspedes</h2>
      <section className="resenas-lista">
        {reseñas.map((resena, index) => (
          <article key={index} className="resena-card">
            <h3>{resena.nombre}</h3>
            <p>"{resena.texto}"</p>
          </article>
        ))}
      </section>
    </main>
  );
}
export default Resenas;
