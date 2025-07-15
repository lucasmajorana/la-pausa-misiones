import logo from '/src/assets/logo.png';
import texto from '/src/assets/texto.png';

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="Logo La Pausa" />
        <img src={texto} alt="Texto La Pausa" />
        <span className="sr-only">La Pausa - Posadas</span>
      </h1>
    </header>
  );
}

export default Header