import { translations } from '../../translations';
import styles from './Menu.module.css';
import { englishMenu, germanMenu } from '../../menu';
import { Helmet } from 'react-helmet-async';

const Menu = ({lang}) => {

    const menuData = lang === 'en' ? englishMenu : germanMenu;

    return (
        <>
        <Helmet>
            <title>
                {lang === 'en' 
                    ? 'Menu | Boiler Room Cochem - Burgers, Snacks & More' 
                    : 'Speisekarte | Boiler Room Cochem - Burger, Imbiss & mehr'}
            </title>
            <meta 
                name="description" 
                content={lang === 'en' 
                    ? 'Explore our full menu: from juicy burgers to classic German snacks. See our prices and current offers at Boiler Room Cochem.' 
                    : 'Entdecken Sie unsere Speisekarte: von saftigen Burgern bis zu klassischen Imbiss-Spezialitäten. Alle Preise und Angebote im Boiler Room Cochem.'} 
            />
        </Helmet>
            <div className={`${styles.menu} section-padding page-enter`}>
                <div className={styles.menuHeader}>
                    <h1>{translations[lang].menuTitle}</h1>
                    <div div className={styles.menuDivider} />
                </div>

                <div className={styles.menuGrid}>
                    {menuData.map((categoryData, idx) => (
                        <div key={idx} className={`${styles.menuCategory} card`}>
                            <h2>{categoryData.category}</h2>
                            <ul className={styles.menuItems}>
                                {categoryData.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className={styles.menuItem}>
                                        <div className={styles.itemName}>{item.name}</div>
                                        <div className={styles.itemPrice}>€{item.price.toFixed(2)}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Menu;