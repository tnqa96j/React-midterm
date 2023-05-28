import styles from './topnavbar.module.css'
import { Link } from 'react-router-dom'
import { theme } from 'antd'
import '../../App.css';
import { useMediaQuery } from '@material-ui/core';

export default function TopNavBar() {

    const {
        token: { colorTopNavBar },
    } = theme.useToken();

    const isMobile2 = useMediaQuery(`(max-width:575.98px)`);

    return (
        <>
            {
                (isMobile2)
                    ? null
                    : (
                        <div className={styles.bar}>
                            <div className='container'>
                                <ul className={styles.ul}>
                                    <li className={styles.li} >
                                        <Link to="/" style={{ textDecoration: 'none', color: colorTopNavBar }}>
                                            首頁
                                        </Link>
                                    </li>
                                    <li className={styles.li}>
                                        <Link to="/About" style={{ textDecoration: 'none', color: colorTopNavBar }}>
                                            網站介紹
                                        </Link>
                                    </li>

                                    <li className={styles.li}>
                                        <Link to="/AllProducts/1" style={{ textDecoration: 'none', color: colorTopNavBar }}>
                                            商品總覽
                                        </Link>
                                    </li>

                                    <li className={styles.li}>
                                        <Link to="/Qa" style={{ textDecoration: 'none', color: colorTopNavBar }}>
                                            常見Q&A
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }
        </>
    )
}