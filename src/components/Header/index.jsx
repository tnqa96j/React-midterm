import '../../App.css';
import styles from "./header.module.css";
import { SearchOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Banner from "../Banner";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer, Space } from 'antd';
import { useMediaQuery } from '@material-ui/core';
import SideMenuForMobile from '../SideMenuForMobile';
import CartSummary from '../CartSummary';
import DayNightSwitcher from '../DayNightSwitcher';
import { theme } from 'antd';
import Searching from '../Searching';
import UserInfo from '../UserInfo';
import { Logo, Menu, Search, Logo2 } from '../Icons';


function Header() {
    /*header區塊 切成(1)logo區、
                    
                    (2)文字導覽區(nav)、--->用Link連至其他固定頁面(在App.jsx裡設定路徑)
                    
                    (3)icon區 */

    const isHome = window.location.pathname === "/"; //判斷目前是否在首頁 在首頁的話顯示banner 反之則不顯示

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const toggleInput = () => {
        setIsSeachInputOpen(!isSearchInputOpen)
    }

    const onClose = () => {
        setIsDrawerOpen(false);
    };

    const isMobile = useMediaQuery(`(max-width:766.98px)`);
    const isMobile2 = useMediaQuery(`(max-width:575.98px)`);


    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchInputOpen, setIsSeachInputOpen] = useState(false); //搜尋欄打開關閉

    const navigate = useNavigate();
    const goToProfile = () => {
        navigate("/auth/login?redirect=/auth/profile");
    };

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
        token: { colorLogo, colorBgContainer, colorPrimary },
    } = theme.useToken();

    /*
    1.menu
    2.logo
    3.search
    4.shopcart
    5.user
    */



    return (
        <div className={styles.header} >
            <div className={styles.bar}>

                <div className={styles.menu} onClick={toggleDrawer}>
                    <Menu color={colorPrimary} />
                </div>

                <div className={styles.logo}>
                    <Link to="/">
                        {
                            isMobile ? (<Logo2 color={colorLogo} />)
                                : (<Logo color={colorLogo} />)
                        }

                    </Link>
                </div>



                {
                    isMobile2 ? (<div></div>) : (
                        <div className={styles.search}>
                            {isSearchInputOpen
                                ? (<>
                                    <Searching />
                                    <div className={styles.searchicon} onClick={toggleInput}>
                                        <Search color={colorPrimary} />
                                    </div>
                                </>
                                )
                                : (<div className={styles.searchicon} onClick={toggleInput}>
                                    <Search color={colorPrimary} />
                                </div>)
                            }
                        </div>)
                }

                <div className={styles.icongroup}>
                    <Space size="large">
                        <CartSummary />

                        <UserInfo />
                    </Space>
                </div>
            </div>






            <Drawer
                open={isDrawerOpen}
                onClose={onClose}
                placement="left"
                width={'60%'}
                style={{ backgroundColor: colorBgContainer }}
            >
                <SideMenuForMobile onClose={onClose} />
                {(isMobile) &&
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '1em' }}>
                        <DayNightSwitcher />
                    </div>}
            </Drawer>



        </div>





    );
}
export default Header;