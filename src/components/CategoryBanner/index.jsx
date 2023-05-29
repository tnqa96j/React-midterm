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
                descript ='以鬼怪故事、血腥、刺激為主題，多為虛構故事，在炎炎夏日為喜好恐怖類的讀者提供一絲清涼。'
            } else if (subCategoryName.toUpperCase() === 'SUSPENSE') {
                backgroundImage = "url('/images/suspense.jpg')";
                title = '懸疑推理小說';
                descript ='以不明事件為主題，跟隨文字步步揭開謎題，懸疑推理被用來作為偵探小說或部分驚悚小說等的代名詞。'
            } else if (subCategoryName.toUpperCase() === 'SF') {
                backgroundImage = "url('/images/sf.jpg')";
                title = '奇幻科幻小說';
                descript ='源於fantasy一詞，在現實地球中加入超自然因素。以獨特的世界觀聞名，在架空世界中尋找屬於你的魔法。'
            } else if (subCategoryName.toUpperCase() === 'ROMANCE') {
                backgroundImage = "url('/images/love.jpg')";
                title = '浪漫愛情小說';
                descript ='浪漫—定義：富有情趣的，充满幻想的。專門為渴望體驗粉色泡泡、酸甜戀愛的讀者提供的夢幻故事區。'
            } else if (subCategoryName.toUpperCase() === 'NL') {   /*漫畫富類別 */
                backgroundImage = "url('/images/male.jpg')";
                title = '男性向漫畫';
                descript ='男性向漫畫是專為男性讀者打造的漫畫類型，著重熱血、友情、美少女等為主題，以男性讀者的視角進行故事的漫畫。'
            } else if (subCategoryName.toUpperCase() === 'TL') {
                backgroundImage = "url('/images/female.jpg')";
                title = '女性向漫畫';
                descript = '女性向漫畫是專為女性讀者打造的漫畫類型，以浪漫、感性和成長為主題，深入探索女性角色的情感和內心世界。'
            } else if (subCategoryName.toUpperCase() === 'BL') {
                backgroundImage = "url('/images/bl.jpg')";
                title = '耽美漫畫';
                descript ='美形的男性，以及兩名男性之間的戀愛感情，又稱男孩間的戀愛等於boys love，簡稱為BL。'
            } else if (subCategoryName.toUpperCase() === 'GL') {
                backgroundImage = "url('/images/gl.jpg')";
                title = '百合漫畫';
                descript ='可愛又美麗的女孩們的互動，以及女孩間的戀愛，百合指女性之間戀愛的隱語等於girls love，簡稱為GL。'
            } else if (subCategoryName.toUpperCase() === 'ANIMATE') {  /*pvc富類別 */
                backgroundImage = "url('/images/animate.jpg')";
                title = '動畫角色公仔';
                descript ='將各種動畫角色，等比例縮小製作成有不同動作表情的精緻人偶，讓大家可以收藏自己喜愛的角色'
            } else if (subCategoryName.toUpperCase() === 'VTUBER') {
                backgroundImage = "url('/images/vtuber.jpg')";
                title = 'Vtuber公仔';
                descript ='為虛擬實況主，是真人以操控虛擬的形象直播或影片製作。目前較知名的vtuber 事務所有Hololive，Nijisanji, Vsojo等等'
            } else if (subCategoryName.toUpperCase() === 'ITEM') {
                backgroundImage = "url('/images/item.jpg')";
                title = '生活小物';
                descript ='將各種生活中的物品製成小巧的模型，不管是汽車，桌椅，牙刷，時鐘等等生活中的物品都是能在這裡找到，為自己的空間或是蒐藏的公仔增添更多小確幸吧。'
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
                descript = '動畫，遊戲，vtuber等的作品形象做成商品，這裡有各式扭蛋，徽章，立牌，或吊飾等等。快來蒐藏自己喜愛的作品和角色的周邊商品吧'
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