import '../../App.css';
import styles from "./header.module.css";
import { SearchOutlined , UserOutlined, MenuOutlined } from '@ant-design/icons';
import Banner from "../Banner";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer,  Avatar } from 'antd';
import { useMediaQuery } from '@material-ui/core';
import SideMenuForMobile from '../SideMenuForMobile';
import CartSummary from '../CartSummary';


function Header({category,setCategory,subCategory,setSubCategory,breadcrumbCategory,setBreadcrumbCategory,breadcrumbSubCategory,setBreadcrumbSubCategory}) {
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

    const CategoryClick = (category,subCategory,breadcrumbCategory,breadcrumbSubCategory) => {
        setCategory(category);
        setSubCategory(subCategory);
        setBreadcrumbCategory(breadcrumbCategory);
        setBreadcrumbSubCategory(breadcrumbSubCategory);
        console.log(category + subCategory + breadcrumbCategory + breadcrumbSubCategory)
      };



    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <div className={styles.logo}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                        logo
                    </Link>
                </div>

                <div className={styles.nav}>
                    <ul className={styles.ul}>
                        <Link to="/About" style={{ textDecoration: 'none', color: '#fff' }}>
                            <li className={styles.li}>網站介紹</li>
                        </Link>

                        <Link to="/AllProducts" style={{ textDecoration: 'none', color: '#fff' }}>
                            <li className={styles.li}>商品總覽</li>
                        </Link>

                        <Link to="/Qa" style={{ textDecoration: 'none', color: '#fff' }}>
                            <li className={styles.li}>常見Q&A</li>
                        </Link>
                    </ul>
                </div>

                <div className={styles.icongroup}>
                <CartSummary />
                    <Avatar shape="square" className={styles.search} icon={<SearchOutlined className={styles.icon} />} />

                    

                    <Avatar shape="square" className={styles.user} icon={<UserOutlined className={styles.icon} />} />

                   

                    <Avatar shape="square" className={styles.menu} icon={<MenuOutlined className={styles.icon} onClick={toggleDrawer} />} />
                </div>

                <Drawer
                    open={isDrawerOpen}
                    onClose={onClose}
                    placement="right"
                    width={'60%'}
                >
                    <SideMenuForMobile onClose={onClose} CategoryClick={CategoryClick}/>
                </Drawer>
    





            </div>
            {isHome && <Banner />}

        </div>


    );
}
export default Header;