import logo from '/src/assets/logo.png';
import texto from '/src/assets/texto.png';

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="Logo La Pausa" />
        <img src={texto} alt="Texto La Pausa" />
      </h1>
    </header>
  );
}

export default Header