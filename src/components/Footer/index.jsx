import styles from './footer.module.css'
import '../../App.css';
import { FacebookFilled, TwitterOutlined, InstagramFilled } from '@ant-design/icons';
import { theme } from 'antd';

export default function Footer() {

    const {
        token: { colorBgHeader2, colorTopNavBar, logoImgBar2,colorBgFooter }
    } = theme.useToken();
    return (
        <div className={styles.footer} style={{backgroundColor:colorBgHeader2}}>
            <div className={styles.logo}>
                <img src={logoImgBar2} className={styles.img} />
                <div className={styles.icon}>
                    <FacebookFilled />
                    <InstagramFilled />
                    <TwitterOutlined />
                </div>
            </div>
            <div className={styles.nav}>
                <h2>網站導覽</h2>
                <ul className={styles.ul}>
                    <li className={styles.li}>網站介紹</li>
                    <li className={styles.li}>商品總覽</li>
                    <li className={styles.li}>常見Q&A</li>
                </ul>
            </div>
            <div className={styles.member}>
                <h2>會員專區</h2>
                <ul className={styles.ul}>
                    <li className={styles.li}>會員註冊</li>
                    <li className={styles.li}>訂單查詢</li>
                    <li className={styles.li}>隱私權政策</li>
                    <li className={styles.li}>使用條款</li>
                </ul>
            </div>
            <div className={styles.contact}>
                <h2>聯繫我們</h2>
                <ul className={styles.ul}>
                    <li className={styles.li}>IG</li>
                    <li className={styles.li}>FACEBOOK</li>
                    <li className={styles.li}>TWITTER</li>
                </ul>
            </div>
            <div className={styles.copyright} style={{backgroundColor:colorBgFooter}}>© 1995-2022 台灣股份有限公司 版權所有</div>
        </div>
    );
}