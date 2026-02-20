import { translations } from '../../translations';
import styles from './Gallery.module.css';
import Image1 from '../../assets/gallery1.jpg';
import Image2 from '../../assets/gallery2.jpg';
import { Helmet } from 'react-helmet-async';

const Gallery = ({lang}) => {

    const images = [
        {
            url: Image1,
            alt: 'Juicy Burger'
        },
        {
            url: Image2,
            alt: 'Fries and Sides'
        },
        {
            url: 'https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            alt: 'Schnitzel Dish'
        },
        {
            url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            alt: 'Meatballs'
        },
        {
            url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            alt: 'Sausage Currywurst'
        },
        {
            url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            alt: 'Rustic Interior'
        }
    ];

    return (
        <>
            <Helmet>
                <title>
                    {lang === 'en' 
                        ? 'Gallery | Photos of Boiler Room Cochem' 
                        : 'Galerie | Fotos vom Boiler Room Cochem'}
                </title>
                <meta 
                    name="description" 
                    content={lang === 'en' 
                        ? 'Take a look inside the Boiler Room. Browse photos of our legendary burgers, industrial interior, and our team in Cochem.' 
                        : 'Ein Blick in den Boiler Room. Sehen Sie Fotos unserer legendären Burger, des industriellen Ambientes und unseres Teams in Cochem.'} 
                />
            </Helmet>
            <div className={`${styles.galleryPage} container section-padding page-enter`}>
                <div className={styles.galleryHeader}>
                    <h1 className={styles.galleryTitle}>{translations[lang].galleryTitle}</h1>
                    <div className={styles.galleryDivider}></div>
                </div>

                <div className={styles.galleryGrid}>
                    {images.map((img, idx) => (
                        <div key={idx} className={styles.galleryItem}>
                            <img src={img.url} alt={img.alt} loading="lazy" />
                            <div className={styles.galleryOverlay}>
                                <span>{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
