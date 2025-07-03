import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Alojamiento from './pages/Alojamiento'
import Contacto from './pages/Contacto'
import Turismo from './pages/Turismo';
import Resenas from './pages/Resenas';

function App() {
  const [seccion, setSeccion] = useState("home")

  let contenido;
  if (seccion === "alojamiento") contenido = <Alojamiento />;
  else if (seccion === "contacto") contenido = <Contacto />;
  else if (seccion === "turismo") contenido = <Turismo />;
  else if (seccion === "resenas") contenido = <Resenas />;
  else contenido = <Home />;


  return (
    <div className="container">
      <Header />
      <Nav setSeccion={setSeccion} />
      {contenido}
      <Footer />
    </div>
  )
}

export default App
