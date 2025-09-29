export default function Home() {
    return (
      <div>
        {/* HERO */}
        <section className="bg-fresh py-24 px-6 text-center">
          <h1 className="title-xl mb-6">
            Impulsa tu empresa con tecnología inteligente
          </h1>
          <p className="paragraph mb-8">
            En <span className="font-bold text-vermilion">TechSolutions</span> desarrollamos software a la medida, con enfoque moderno, diseño eficiente y soporte continuo.
          </p>
          <button className="btn-primary">Contáctanos</button>
        </section>
  
        {/* DESCRIPCIÓN */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="title-md mb-4">¿Quiénes somos?</h2>
          <p className="paragraph">
            Somos una compañía con visión de futuro. Desde 2025 ayudamos a empresas a mejorar sus procesos con herramientas digitales personalizadas. Nuestra meta es que cada solución que creamos sea escalable, moderna y visualmente atractiva.
          </p>
        </section>
      </div>
    );
  }
  