import styles from "./productdetail.module.css"
import '../../App.css';
import PaymentAndShipping from "../PaymentAndShipping";
import { Row, Col, InputNumber, Button, Image, Tabs } from "antd";

export default function ProductDetail() {
    const onChange = (value, key) => {
        console.log('changed', value);
        console.log(key);
    };
    


    /*這是一個包含「單一」商品的所有資訊的元件
        1.麵包屑導覽(現在先用h1代替)
        2.圖片
        3.商品標題
        4.價格
        5.庫存數量
        6.數量
        7.加入購物車
        8.付款、配送方式
        9.商品介紹&下單須知

     */
    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 9 }}>
                    <Image src="https://www.look-in.com.tw/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNjBaQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dbcfd4f6065a50120149157bf369ea34a57c44d2/%E5%BE%AC%E5%BE%A8%E4%B9%8B%E5%88%83.jpg" className={styles.img} />
                </Col>

                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 15 }} >

                    <h1 className={styles.title}>商品名稱</h1>
                    <h2 className={styles.price}>NT 350</h2>
                    <h3 className={styles.countInstock}>在庫數量：5</h3>
                    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} style={{ marginTop: '2%', marginBottom: '2%' }} />
                    <Button type="primary" block size="large" style={{ display: 'block', marginTop: '2%', marginBottom: '2%' }}>加入購物車</Button>
                    <PaymentAndShipping />
                </Col>
            </Row>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 24 }}>
                    <Tabs
                        onChange={onChange}
                        type="card"
                        className={styles.tab}
                        items={[
                            {
                                label: "商品資訊",
                                key: "1",
                                children: (
                                    <>
                                        <h1>This is Tab 1</h1>
                                        <p>   作者：ChatGPT
   出版社：我家
    
 《ABC》故事背景發生在一個充滿魔法和冒險的世界中，故事的主角是一位名叫愛麗絲的少女，她擁有操控風的能力，但是卻無法控制自己的力量。在一次突發事件中，愛麗絲被一群搶劫者綁架，卻意外發現自己能力的釋放。在逃離危險後，愛麗絲遇見了一位神秘男子亞當，他邀請愛麗絲加入一個神秘的組織，進行各種神秘的任務，協助他們找到其他擁有神秘能力的人。

   隨著愛麗絲加入組織，她與其他成員一起面對了各種危險，包括邪惡的巫師、詭異的怪物，甚至是其他擁有神秘能力的敵人。然而，這些任務背後似乎隱藏著更加神秘的真相，一步步引導著愛麗絲走向真相的深處。

  現在，最新一集的《ABC》已經上市，隨著故事的發展，更多的謎團將逐漸揭開。</p>
                                    </>
                                ),
                            },
                            {
                                label: "下單須知",
                                key: "2",
                                children: (
                                    <>
                                        <h1>This is Tab 2</h1>
                                        <p>Enter your content for Tab 2 here</p>
                                    </>
                                ),
                            },
                        ]}
                    />

                </Col>
            </Row>
        </div>



    )
}