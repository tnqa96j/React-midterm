import styles from './about.module.css'
import '../../App.css';
import { Row, Col} from "antd"
import { Card, Space } from 'antd';
// import '../../../public/images/novel.png';
// import '../../../public/images/manga.png';
// import '../../../public/images/figure.png';
// import '../../../public/images/other.png';


export default function Aboutus(){

    return(

        <Row>

            <Col
                span={24}>
                <Space
                    direction="vertical"
                    size="large"
                    style={{
                    display: 'flex'
                    }}
                >
                    <Card className='card'>
                        <h1 className={styles.h1}> 關於我們</h1>
                        <p className={styles.p}>  「宅小物」自2023年架站以來，目的是為了提供所有ACGN愛好者們一個專門販售二次元相關商品為主的網站。我們致力於和各大出版商和代理商合作，以取得最新最優質的二次元商品，並提供給我們的客戶。我們的商品範圍包括小說、漫畫、公仔PVC、周邊商品等，並且我們將不斷擴展我們的商品種類和選擇，以滿足不同客戶的需求。</p>
                    </Card>


                    <Card>
                        <h1 className={styles.h1}>在這裡，你能找到</h1>
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <img src= '../../../public/images/novel.png' 
                                style={{marginBottom:'5vh'}}
                                />
                                <p className={styles.p}>小說</p>
                            </Col>
                            <Col span={6}>
                                <img src= '../../../public/images/manga.png' 
                                style={{marginBottom:'5vh'}}
                                />
                                <p className={styles.p}>漫畫</p>
                            </Col>
                            <Col span={6}>
                                <img src= '../../../public/images/figure.png'
                                style={{marginBottom:'5vh'}}
                                />
                                <p className={styles.p}>公仔</p>
                            </Col>
                            <Col span={6}>
                                <img src= '../../../public/images/other.png' 
                                style={{marginBottom:'5vh'}}
                                />
                                <p className={styles.p}>周邊商品</p>
                            </Col>
                        </Row>
                    </Card>

                    
                    <Card>
                        <h1 className={styles.h1}>實體據點</h1>
                        <Row>
                            <Col flex={3}>
                                <p className={styles.p}>
                                    北部據點：台北市大安區忠孝東路七段666巷99號
                                </p>
                                <p className={styles.p}> 
                                    中部據點：台灣台中市南區建國南路一段123號
                                </p>
                                <p className={styles.p}>
                                    南部據點：台灣高雄市前鎮區中山二路567號
                                </p>
                            </Col>
                            <Col flex={2}>
                                <img src='../../../public/images/place.jpg'
                                style={{display:'flex',
                                 width:'420px',
                                borderRadius:'15px'
                                }}
                                />
                            </Col>
                        </Row>
                    </Card>

                    
                    <Card>
                        <h1 className={styles.h1}>聯繫方式</h1>
                        <p className={styles.p}>如果您有任何關於我們的商品或服務的問題或建議，請隨時與我們聯繫。</p>
                        <p className={styles.p}>電話客服（9:00A.M.～22:00P.M.）：02-5XXX-XXXX
                            <br /> 
                            電子信箱：qwertyuiopasdfghjklzxcvbnm1234567890@gmail.com
                            <br /> 
                            FACEBOOK：搜尋「宅小物」
                            <br /> 
                            IG：@qwertyuiopasdfghjklzxcvbnm1234567890
                        </p>
                        <p className={styles.p}>＊粉專私訊有時無法及時回覆，發問後請耐心等待，客服人員會盡速與您聯絡，<br /> 非常感謝您對我們的支持和信任，並期待為您提供最好的商品和服務。</p>
                    </Card>


                </Space>
 
            </Col>
        </Row>
        

    );
}