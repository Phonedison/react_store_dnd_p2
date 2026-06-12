export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="titulo-cabecalho">
          <div className="titulo">MINHA FICHA .COM</div>
        </div>

        <div className="container-botoes">
          <button className="button navigation">INÍCIO</button>
          <button className="button navigation">PERFIL</button>
          <button className="button navigation" disabled>
            BÔNUS
          </button>
        </div>

        <div className="container-botoes">
          <button className="button cancel">SAIR</button>
        </div>
      </div>
    </nav>
  );
};
