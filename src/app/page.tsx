// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bem-vinda ao ecoCircle 🌱</h1>

      <form className="d-flex mb-4" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar materiais..."
          aria-label="Search"
        />
        <button className="btn btn-success" type="submit">
          Enviar
        </button>
      </form>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Papel reciclável</h5>
              <p className="card-text">
                Material limpo e seco, pronto para reutilização.
              </p>
              <button className="btn btn-outline-success btn-sm">
                Detalhes
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Garrafa PET</h5>
              <p className="card-text">
                Garrafa transparente e limpa para reciclagem.
              </p>
              <button className="btn btn-outline-success btn-sm">
                Detalhes
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Latas de alumínio</h5>
              <p className="card-text">
                Compactadas e prontas para transporte.
              </p>
              <button className="btn btn-outline-success btn-sm">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
