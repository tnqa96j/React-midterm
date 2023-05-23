import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styles from "./uploadavatar.module.css";
import { useUserInfo } from '../../react-query';

export default function UploadAvatar({ setFile }) {
    const [imageSrc, setImageSrc] = useState('');
    const { data: userInfo, isLoading } = useUserInfo() || {};

    userInfo
        ? (console.log('userInfo exist'))
        : (console.log('userInfo nonexist'))

    userInfo.photoUrl
        ? (console.log('userInfo.photoUrl exist'))
        : (console.log('userInfo.photoUrl nonexist'))

        useEffect(() => {
            if (!userInfo) return;
          
            setImageSrc(userInfo.photoUrl);
          
            return () => {
              setImageSrc('');
            };
          }, [userInfo]);


    const handleOnPreview = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            setImageSrc(reader.result); // 加上時間戳
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className={styles.block}>

            {
                isLoading
                    ? (<Avatar size={{
                        xs: 120,
                        sm: 120,
                        md: 80,
                        lg: 100,
                        xl: 120,
                        xxl: 200,
                    }} icon={<LoadingOutlined />} />)
                    : imageSrc
                        ? (<Avatar size={{
                            xs: 120,
                            sm: 120,
                            md: 80,
                            lg: 100,
                            xl: 120,
                            xxl: 200,
                        }} src={imageSrc} />)
                        : (<Avatar size={{
                            xs: 120,
                            sm: 120,
                            md: 80,
                            lg: 120,
                            xl: 150,
                            xxl: 200,
                        }} src={userInfo.photoUrl} />)

            }
            <input type="file" onChange={handleOnPreview} accept="image/*" style={{ display: 'none' }} id="post-image" />
            <button type="button" className={styles.btn} style={{ borderWidth: '0px' }}>
                <label htmlFor="post-image">選擇圖片</label>
            </button>

        </div>
    );
};

