import { Facebook, Instagram, Phone } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '../../assets/logo.png';

const Footer = ({ lang }) => {
    const year = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <img className={styles.footerLogo} src={Logo} />
                        <div className={styles.brandText}>
                            <h3>BOILER ROOM</h3>
                            <p>{lang === 'en' ? 'All prices include VAT' : 'Alle Preise inkl. MwSt.'}</p>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <a href="tel:02671910561">
                            <Phone size={20} />
                        </a>
                        <a href="https://www.instagram.com/boiler_room_imbiss_and_more/" target="_blank" rel="noreferrer">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100073110564810" target="_blank" rel="noreferrer">
                            <Facebook size={20} />
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a href="#impressum">Impressum</a>
                        <a href="#privacy">Datenschutz</a>
                    </div>
                </div>
                
                <div className={styles.copyright}>
                    <p>&copy; {year} BOILER ROOM. {lang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;