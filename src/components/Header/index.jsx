import '../../App.css';
import styles from "./header.module.css";
import { SearchOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Banner from "../Banner";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Avatar  } from 'antd';
import { useMediaQuery } from '@material-ui/core';
import SideMenuForMobile from '../SideMenuForMobile';
import CartSummary from '../CartSummary';
import DayNightSwitcher from '../DayNightSwitcher';
import { theme } from 'antd';


function Header({ category, setCategory, subCategory, setSubCategory, breadcrumbCategory, setBreadcrumbCategory, breadcrumbSubCategory, setBreadcrumbSubCategory }) {
    /*header區塊 切成(1)logo區、
                    
                    (2)文字導覽區(nav)、--->用Link連至其他固定頁面(在App.jsx裡設定路徑)
                    
                    (3)icon區 */

    const isHome = window.location.pathname === "/"; //判斷目前是否在首頁 在首頁的話顯示banner 反之則不顯示

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const onClose = () => {
        setIsDrawerOpen(false);
    };

    const isMobile = useMediaQuery(`(max-width:766.98px)`);

    const CategoryClick = (category, subCategory, breadcrumbCategory, breadcrumbSubCategory) => {
        setCategory(category);
        setSubCategory(subCategory);
        setBreadcrumbCategory(breadcrumbCategory);
        setBreadcrumbSubCategory(breadcrumbSubCategory);
        console.log(category + subCategory + breadcrumbCategory + breadcrumbSubCategory)
    };
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const {
        token: { colorBgHeader, colorBgHeader2, colorAvatar, colorTopNavBar, logoImgBar1, logoImgBar2, textShadowTopNavBar,colorBgContainer },
    } = theme.useToken();

    const headerClassName = ((!isScrolled) && isHome) ? styles.bar : `${styles.bar2} `;
    const headerStyle = ((!isScrolled) && isHome) ? { background: colorBgHeader } : { backgroundColor: colorBgHeader2 }
    const avatarStyle = ((!isScrolled) && isHome) ?  { backgroundColor: 'transparent' } :{ backgroundColor: colorAvatar }
    const logoImg = ((!isScrolled) && isHome) ? logoImgBar1 : logoImgBar2

    return (
        <div className={styles.header}>
            <div className={headerClassName} style={headerStyle}>
                <div className={styles.logo}>
                    <Link to="/" className={styles.a}>
                        <img src={logoImg} className={styles.img} />
                    </Link>
                </div>

                <div className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link to="/About" style={{ textDecoration: 'none', color: colorTopNavBar, textShadow: textShadowTopNavBar }}>
                                網站介紹
                            </Link>
                        </li>

                        <li className={styles.li}>
                            <Link to="/AllProducts" style={{ textDecoration: 'none', color: colorTopNavBar, textShadow: textShadowTopNavBar }}>
                                商品總覽
                            </Link>
                        </li>

                        <li className={styles.li}>
                        <Link to="/Qa" style={{ textDecoration: 'none', color: colorTopNavBar, textShadow: textShadowTopNavBar }}>
                           常見Q&A
                        </Link>
                        </li>
                    </ul>
                </div>



                <div className={styles.icongroup}>

                    <CartSummary avatarStyle={avatarStyle} />

                    <Avatar shape="square" size={{
                        xs: 32,
                        sm: 32,
                        md: 40,
                        lg: 40,
                        xl: 45,

                    }} className={styles.search} icon={<SearchOutlined className={styles.icon} style={{ color: colorTopNavBar }} />} style={avatarStyle} />

                    <Avatar shape="square" size={{
                        xs:32,
                        sm: 32,
                        md: 40,
                        lg: 40,
                        xl: 45,
                    }} className={styles.user} icon={<UserOutlined className={styles.icon} style={{ color: colorTopNavBar }} />} style={avatarStyle} />

                    <Avatar shape="square" size={{
                        xs: 32,
                        sm: 32,
                        md: 40,
                        lg: 40,
                        xl: 45,
                    }} className={styles.menu} icon={<MenuOutlined className={styles.icon} style={{ color: colorTopNavBar }} onClick={toggleDrawer} />} style={avatarStyle} />
                </div>

                <Drawer
                    open={isDrawerOpen}
                    onClose={onClose}
                    placement="right"
                    width={'60%'}
                    style={{backgroundColor:colorBgContainer}}
                >
                    <SideMenuForMobile onClose={onClose} CategoryClick={CategoryClick} />
                    {(isMobile) && 
                    <div style={{display:'flex',flexDirection:'row-reverse',marginTop:'1em'}}>
                    <DayNightSwitcher />
                    </div>}
                </Drawer>






            </div>
            {isHome && <Banner />}
            <div className={styles.switcher}>
                {(!isMobile) && <DayNightSwitcher />}
            </div>


        </div>


    );
}
export default Header;