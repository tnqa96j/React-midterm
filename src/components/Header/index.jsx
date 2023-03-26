import '../../App.css';
import styles from "./header.module.css";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined ,MenuOutlined } from '@ant-design/icons';
import Banner from "../Banner";
import { Link } from 'react-router-dom';

function Header() {
    /*header區塊 切成(1)logo區、
                    
                    (2)文字導覽區(nav)、--->用Link連至其他固定頁面(在App.jsx裡設定路徑)
                    
                    (3)icon區 */
    
    const isHome = window.location.pathname === "/"; //判斷目前是否在首頁

    return (
        <div className={styles.header}>
        <div className={styles.bar}>
            <div className={styles.logo}>
                <Link to="/" style={{ textDecoration: 'none' ,color:'#fff'}}>
                    logo
                </Link>
            </div>

            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <Link to="/About" style={{ textDecoration: 'none' ,color:'#fff'}}>
                        <li className={styles.li}>網站介紹</li>
                    </Link>

                    <Link to="/ProductsTotal" style={{ textDecoration: 'none' ,color:'#fff'}}>
                        <li className={styles.li}>商品總覽</li>
                    </Link>

                    <Link to="/Qa" style={{ textDecoration: 'none' ,color:'#fff'}}>
                        <li className={styles.li}>常見Q&A</li>
                    </Link>
                </ul>
            </div>

            <div className={styles.icongroup}>
                <SearchOutlined className={styles.icon}/>
                <UserOutlined className={styles.icon}/>
                <ShoppingCartOutlined className={styles.icon}/>
                <MenuOutlined className={styles.icon}/>
            </div>

        </div>
        {isHome && <Banner />}
        </div>

    );
}
export default Header;