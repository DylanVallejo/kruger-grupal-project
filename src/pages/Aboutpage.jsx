import Author from "../components/Author";
import Layout from "../components/Layout";
// import dylan from "../images/team1.jpg";
// import edwin from "../images/team2.jpg";
// import jorge from "../images/team3.jpg";
import styles from "../styles/About.module.css";

const Aboutpage = () => {
  const team = [
    {
      name: "Dylan Vallejo",
      // image: dylan,
      activities: "👀 Jefe de equipo, testing, estilos y estructura html",
      github: "https://github.com/DylanVallejo",
    },
    {
      name: "Edwin Cacuango",
      // image: edwin,
      activities: "🔐 Autenticacion, redux, routing, deploy, responsive design",
      github: "https://github.com/EdwinCacuango",
    },
    {
      name: "Jorge Castro",
      // image: jorge,
      activities:
        "🎨 Co-creador de las paginas about y contacto. Documentación del proyecto",
      github: "https://github.com/jeici21",
    },
  ];
  return (
    <Layout aditionalStyles="text-white min-h-screen">
      <h1 className="text-center my-4 text-3xl md:my-6 md:text-5xl">
        Acerca de nosotros
      </h1>
      <p className="text-center text-base mx-3 md:text-lg">
        Este website fue realizado con mucho cariño por nosotros, de forma
        totalmente remota. Esperamos que su paseo por este website haya sido de
        su agrado.
      </p>

      <h2 className="text-center my-5 text-2xl md:text-3xl">Nuestro Equipo</h2>
      <div className={styles.grid}>
        {team.map((item) => (
          <Author key={item.name} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Aboutpage;
