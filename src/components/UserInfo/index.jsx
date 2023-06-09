import styles from './usericon.module.css'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useUserInfo } from "../../react-query";
import { useNavigate } from 'react-router-dom';
import { theme } from 'antd';
import { Logo, Menu, Search, Basket, User } from '../Icons';


export default function UserInfo() {

    const { data: userInfo } = useUserInfo();
    const navigate = useNavigate();

    const {
        token: { colorPrimary }
    } = theme.useToken();

    const goToProfile = () => {
        if (userInfo?.name)
            navigate("/auth/profile")
        else
            navigate("/auth/login?redirect=/auth/profile");
    };

    return (
        <>
            {userInfo?.photoUrl
                ? (<Avatar shape='circle' size={{
                    xs: 28,
                    sm: 28,
                    md: 28,
                    lg: 28,
                    xl: 28,
                }} className={styles.user} src={userInfo.photoUrl} onClick={goToProfile} />)
                : (<div className={styles.icon}  onClick={goToProfile} >
                    <User color={colorPrimary}/>
                </div>
                )
            }
        </>

    )
}