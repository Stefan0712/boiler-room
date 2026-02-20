import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navigation.module.css';
import { translations } from '../../translations';
import Logo from '../../assets/logo.png'

const Navbar = ({toggleLang, lang, changePage}) => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            path: 'home',
            name: translations[lang].home
        },
        {
            path: 'menu',
            name: translations[lang].menu
        },
        {
            path: 'gallery',
            name: translations[lang].gallery
        },
    ]


    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navContainer} container`}>
                <h2 className={styles.navLogo} onClick={()=>changePage('home')}>
                    <img src={Logo} alt='Boiler Room' />
                    Boiler Room
                </h2>

                {/* Desktop Navigation */}
                <div className={`${styles.navLinks} ${styles.desktopOnly}`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            onClick={()=>changePage(link.path)}
                            className={`${styles.navLink} ${({ isActive }) => (isActive ? styles.active : '')}`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button className={styles.langToggle} onClick={toggleLang}>
                        {lang === 'en' ? 'DE' : 'EN'}
                    </button>
                    <a href="tel:02671910561" className={`btn btn-primary bg-call`}>
                        <Phone size={16} />
                        {translations[lang].heroCTO}
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className={styles.mobileOnly}>
                    <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            className={`${styles.mobileLink} ${({ isActive }) => (isActive ? styles.active : '')}`}
                            onClick={() => (
                                setIsOpen(false),
                                changePage(link.path)
                            )}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button className={styles.mobileLangToggle} onClick={() => { toggleLang() }}>
                        <p>{translations[lang].language}: </p>
                        <p className={lang === 'en' ? styles.activeLang : ''}>EN</p>
                        <p className={lang === 'de' ? styles.activeLang : ''}>DE</p>
                    </button>
                    <a href="tel:02671910561" className={`btn btn-primary ${styles.mobileCall}`} onClick={() => setIsOpen(false)}>
                        <Phone size={16} />
                        {translations[lang].heroCTO}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
