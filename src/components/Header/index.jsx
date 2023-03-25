import '../../App.css';
import styles from "./header.module.css";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined ,MenuOutlined } from '@ant-design/icons';
import Banner from "../Banner";

function Header() {
    /*header區塊 切成(1)logo區、(2)文字導覽區(nav)、(3)icon區 */
    return (
        <div className={styles.header}>
        <div className={styles.bar}>
            <div className={styles.logo}>
                logo
            </div>

            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>網站介紹</li>
                    <li className={styles.li}>商品總覽</li>
                    <li className={styles.li}>常見Q&A</li>
                </ul>
            </div>

            <div className={styles.icongroup}>
                <SearchOutlined className={styles.icon}/>
                <UserOutlined className={styles.icon}/>
                <ShoppingCartOutlined className={styles.icon}/>
                <MenuOutlined className={styles.icon}/>
            </div>

        </div>
        <Banner/>
        </div>

    );
}
export default Header;