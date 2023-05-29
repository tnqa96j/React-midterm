import styles from './category.module.css'
import { Link, useParams } from "react-router-dom";
import '../../App.css';

export default function CategoryBanner() {
    const { categoryName, subCategoryName } = useParams();
    let backgroundImage = '';
    let title ='';
    let descript = '';



    if (categoryName) {
        if (subCategoryName) {
            if (subCategoryName.toUpperCase() === 'HORROR') {  /*小說副類別 */
                backgroundImage = "url('/images/horror.jpg')";
                title = '驚悚恐怖小說';
            } else if (subCategoryName.toUpperCase() === 'SUSPENSE') {
                backgroundImage = "url('/images/suspense.jpg')";
                title = '懸疑推理小說';
            } else if (subCategoryName.toUpperCase() === 'SF') {
                backgroundImage = "url('/images/sf.jpg')";
                title = '奇幻科幻小說';
            } else if (subCategoryName.toUpperCase() === 'ROMANCE') {
                backgroundImage = "url('/images/love.jpg')";
                title = '浪漫愛情小說';
            } else if (subCategoryName.toUpperCase() === 'NL') {   /*漫畫富類別 */
                backgroundImage = "url('/images/male.jpg')";
                title = '男性向漫畫';
            } else if (subCategoryName.toUpperCase() === 'TL') {
                backgroundImage = "url('/images/female.jpg')";
                title = '女性向漫畫';
                descript = '女性向漫畫是專為女性讀者打造的漫畫類型，以浪漫、感性和成長為主題，深入探索女性角色的情感和內心世界。'
            } else if (subCategoryName.toUpperCase() === 'BL') {
                backgroundImage = "url('/images/bl.jpg')";
                title = '耽美漫畫';
            } else if (subCategoryName.toUpperCase() === 'GL') {
                backgroundImage = "url('/images/gl.jpg')";
                title = '百合漫畫';
            } else if (subCategoryName.toUpperCase() === 'ANIMATE') {  /*pvc富類別 */
                backgroundImage = "url('/images/animate.jpg')";
                title = '動畫角色公仔';
            } else if (subCategoryName.toUpperCase() === 'VTUBER') {
                backgroundImage = "url('/images/vtuber.jpg')";
                title = 'Vtuber公仔';
            } else if (subCategoryName.toUpperCase() === 'ITEM') {
                backgroundImage = "url('/images/item.jpg')";
                title = '生活小物';
            }
        } else {
            if (categoryName.toUpperCase() === 'NOVEL') {
                backgroundImage = "url('/images/novel02.png')";
                title = '小說';
            } else if (categoryName.toUpperCase() === 'MANGA') {
                backgroundImage = "url('/images/manga01.png')";
                title = '漫畫';
            } else if (categoryName.toUpperCase() === 'PVC') {
                backgroundImage = "url('/images/figure01.png')";
                title = '公仔';
            } else if (categoryName.toUpperCase() === 'MERCH') {
                backgroundImage = "url('/images/item.jpg')";
                title = '周邊小物';
            }
        }
    } else {
        // Handle categoryName not found
        backgroundImage = "url('/images/allproduct.jpg')";
        title = '商品總覽';
    }




    const bannerStyle = {
        backgroundImage: backgroundImage,
        // 其他背景屬性
    };

    return (
        <>
            <div className={styles.bg} style={bannerStyle}>
                <div className='container'>
                    <h1 className={styles.h1}>{title}</h1>
                    <p className={styles.p}>{descript}</p>
                </div>
            </div>
        </>

    )

}