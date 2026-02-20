import { translations } from '../../translations';
import styles from './Menu.module.css';
import { englishMenu, germanMenu } from '../../menu';

const Menu = ({lang}) => {

    const menuData = lang === 'en' ? englishMenu : germanMenu;

    return (
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
    )
};

export default Menu;