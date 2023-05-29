import styles from './addtofavoritebtn.module.css'
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { theme } from "antd";
import { useUserInfo } from "../../react-query";
import { useState,useEffect } from 'react';
import { Like } from '../Icons';

export default function AddToFavoriteBtn({ productId }) {

    const [isFilled, setIsFilled] = useState(false);



    const { data: userInfo } = useUserInfo() || {};
    const favorites = userInfo.favorites || [];

    useEffect(() => {
        // 判斷商品ID是否在興趣清單中
        const hasFavorite = favorites.includes(productId);
        setIsFilled(hasFavorite);
      }, [favorites, productId]);
      
    const count = favorites.length;
    const toggleOpen = () => {
        setIsFilled(!isFilled);
    };

    const {
        token: { colorPrimary,badgeColor }
    } = theme.useToken();

    return (
        <div onClick={toggleOpen} className={styles.favorite}>
            {isFilled ? <Like color={"#DFAEF0"} fillColor={"#DFAEF0"}/> : <Like color={colorPrimary} fillColor={"transparent"}/>}
        </div>
    )
}