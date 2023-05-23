import styles from './usericon.module.css'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useUserInfo } from "../../react-query";
import { useNavigate } from 'react-router-dom';


export default function UserInfo({ colorTopNavBar, avatarStyle }) {

    const { data: userInfo } = useUserInfo();
    const navigate = useNavigate();

    const goToProfile = () => {
        if (userInfo?.name)
            navigate("/auth/profile")
        else
            navigate("/auth/login?redirect=/auth/profile");
    };

    return (
        <div onClick={goToProfile}>
            {userInfo?.photoUrl
                ? (<Avatar shape='circle' size={{
                    xs: 32,
                    sm: 32,
                    md: 40,
                    lg: 40,
                    xl: 45,
                }} className={styles.user} src={userInfo.photoUrl}/>)
                : (<Avatar shape="square" size={{
                    xs: 32,
                    sm: 32,
                    md: 40,
                    lg: 40,
                    xl: 45,
                }} className={styles.user} icon={<UserOutlined className={styles.icon} style={{ color: colorTopNavBar }} />} style={avatarStyle} >

                </Avatar>)
            }

        </div>
    )
}