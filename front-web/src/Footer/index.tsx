import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new"> 
                {/*'_new' serve para quando for clicado, abrir em uma nova janela*/}
                    <YoutubeIcon /> {/*chamando o ícone*/}
                </a>

                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinIcon />
                </a>

                <a href="https://www.instagram.com/devsuperior.ig/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer