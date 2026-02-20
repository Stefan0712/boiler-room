import { ArrowRight, Clock, Facebook, Inbox, Info, Instagram, Link, Mail, Map, MapPin, Phone } from 'lucide-react';
import { OPEN_HOURS, translations } from '../../translations';
import styles from './Home.module.css';
import HeroBg from '../../assets/hero-bg.jpg';
import MapPreview from '../../assets/map.png';

const Home = ({ changePage, lang }) => {
    const t = (key) => translations[lang][key] || key;
    const content = translations[lang];

    return (
        <div className={`${styles.home} page-enter`}>
            {/* Hero Section */}
            <section 
                className={styles.hero} 
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HeroBg})` }}
            >
                <div className={`${styles.heroContent} container text-center`}>
                    <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
                    <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
                    
                    <div className={styles.heroActions}>
                        <a 
                            href="tel:02671910561" 
                            className={`btn btn-primary ${styles.heroBtn} ${styles.callHuge} ${styles.btnPulse}`}
                        >
                            <Phone size={24} />
                            <p>{t('heroCTO')}</p>
                        </a>
                        <button 
                            onClick={() => changePage('menu')} 
                            className={`btn btn-outline ${styles.heroBtn}`}
                        >
                            <p>{t('heroMenuBtn')}</p>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Features/Highlights Section */}
            <section className="section-padding container">
                <div className={styles.featuresGrid}>
                    {content.categories.map((cat, index) => (
                        <div key={index} className={`card ${styles.featureCard}`}>
                            <h3>{cat.title}</h3>
                            <p className="text-muted">{cat.description}</p>
                            <button 
                                className={`text-accent ${styles.featureLink} btn-link`} 
                                onClick={() => changePage('menu')}
                            >
                                {cat.linkText} <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Details Section */}
            <div className={`${styles.details} container section-padding`}>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.65454621561!2d7.148111943752155!3d50.12986226926551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47be478714c127f7%3A0xdb4827fb24ea184b!2sIndustriering%206%2C%2056812%20Cochem!5e0!3m2!1sen!2sde!4v1771592514972!5m2!1sen!2sde"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* width="600" height="450" */}
                <div className={styles.rightSide}>
                    <div className={styles.info}>
                        <div className={styles.location}>
                            <div className={styles.sectionTitle}>
                                <MapPin size={25} />
                                <h4>{t('address')}</h4>
                            </div>
                            <a href='https://maps.app.goo.gl/H1d6mReN9378hg5j7' target='_blank' className={styles.addressText}><Link  size={16}/> Industriering 6, 56812 Cochem </a>
                        </div>

                        <div className={`${styles.openHours}`}>
                            <div className={styles.sectionTitle}>
                                <Clock size={25} />
                                <h4>{t('openHoursTitle')}</h4>
                            </div>
                            <div className={styles.openHoursText}>
                                {OPEN_HOURS.map(day=><div key={day.id} className={styles.hoursContainer}>
                                    <b>{day[lang]}:</b>
                                    <p>{day.hours ?? (lang === 'en' ? 'CLOSED' : 'GESCHLOSSEN')}</p>
                                </div>)}
                                
                            </div>
                        </div>

                        <div className={`${styles.contact}`}>
                            <div className={styles.sectionTitle}>
                                <Inbox size={25} />
                                <h4>{t('contact')}</h4>
                            </div>
                            <div className={styles.contactRow}>
                                <Phone size={16} />
                                <a href="tel:02671910561" >02671-910561</a>
                            </div>
                            <div className={styles.contactRow}>
                                <Mail size={16} />
                                <p >mail@gmail.com</p>
                            </div>
                            <div className={styles.contactRow}>
                                <Instagram size={16} />
                                <a href="https://www.instagram.com/boiler_room_imbiss_and_more/" target="_blank" rel="noreferrer">Instagram</a>
                            </div>
                            <div className={styles.contactRow}>
                                <Facebook size={16} />
                                <a href="https://www.facebook.com/profile.php?id=100073110564810" target="_blank" rel="noreferrer">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

