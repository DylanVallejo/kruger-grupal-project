import dylan from '../images/team1.jpg';
import edwin from '../images/team2.jpg';
import jorge from '../images/team3.jpg';
import style from './styles/About.module.css';

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutSection}>
                <h1>Acerca de nosotros</h1>
                <p>Este website fue realizado con mucho cariño por nosotros, de forma totalmente remota.
                    Esperamos que su paseo por este website haya sido de su agrado.
                </p>
            </div>
            <h2>Nuestro Equipo</h2>
            <div className={style.row}>
                <div className={style.column}>
                    <div className={style.card}>
                        <img src={dylan} alt="Dylan" className={style.image1} />
                        <div className={style.container}>
                            <h2>Dylan Vallejo</h2>
                            <p className={style.title}>Programador</p>
                            <p>Encargado del funcionamiento de la página y de los estilos.</p>
                            <div><a href='https://github.com/DylanVallejo'>Github</a></div>
                        </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.card}>
                        <img src={edwin} alt="Edwin" className={style.image2} />
                        <div className={style.container}>
                            <h2>Edwin Cacuango</h2>
                            <p className={style.title}>Programador</p>
                            <p>Encargado de los procedimientos CRUD y de la implementación de Redux.</p>
                            <div><a href='https://github.com/EdwinCacuango'>Github</a></div>
                        </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.card}>
                        <img src={jorge} alt="Jorge" className={style.image3} />
                        <div className={style.container}>
                            <h2>Jorge Castro</h2>
                            <p className={style.title}>Programador</p>
                            <p>Encargado del diseño de determinadas páginas del sitio web.</p>
                            <div><a href='https://github.com/jeici21'>Github</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;