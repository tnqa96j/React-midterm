import styles from "./productdetail.module.css"
import '../../App.css';
import PaymentAndShipping from "../PaymentAndShipping";
import { Row, Col, InputNumber, Image, Tabs, Spin, Button } from "antd";
import BreadcrumbNavbar from "../BreadcrumbNavbar";
import AddToBasketBtn from "../AddToBasketBtn";
import { useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import Comments from "../Comments";
import ProductSlider from "../ProductSlider";

export default function ProductDetail({ product, isLoading }) {


    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

    const onChange = (value) => {
        setQty(value);
        console.log('changed', value);

    };

    const { countInStock } = product;

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 100,
            }}
            spin
        />
    );

    /*這是一個包含「單一」商品的所有資訊的元件
        1.麵包屑導覽(現在先用h1代替)category,subCategory,breadcrumbCategory,breadcrumbSubCategory
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
        <>
            {isLoading
                ? (<div className='spinner-wrap'>
                    <Spin indicator={antIcon} className='spinner' />
                </div>)

                : (<div>
                    <BreadcrumbNavbar product={product}></BreadcrumbNavbar>
                    <div style={{marginBottom:'3rem'}}></div>
                    <Row gutter={[32, 32]}>
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 9 }}>
                            <Image src={product.image} className={styles.img} />
                        </Col>

                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 15 }} >

                            <h1 className={styles.title}>{product.name}</h1>
                            <h2 className={styles.price}>{product.currency} {product.price}</h2>
                            

                            {countInStock > 0
                                ? (<div style={{display:'flex' , alignItems:'center',gap:'1rem',marginTop:'4rem'}}>
                                <h3>數量</h3>
                                <InputNumber size="large" min={1} max={product.countInStock} value={qty} onChange={onChange} style={{ marginTop: '2%', marginBottom: '2%' }} />
                                <h4 className={styles.countInstock}>{`在庫數量：${product.countInStock}`}</h4>
                                </div>
                                )
                                : (<>
                                <InputNumber disabled size="large" min={0} max={0} defaultValue={0} onChange={onChange} style={{ marginTop: '2%', marginBottom: '2%' }} />
                                <h3 className={styles.countInstock}>{`在庫數量：${product.countInStock}`}</h3>
                                </>
                                )
                            }
                            <div style={{display:'flex',alignItems:'center',gap:'5%',marginTop:'1rem'}}>
                                <AddToBasketBtn product={product} qty={qty} />
                                <Button style={{borderRadius:'50px',width:'50%'}} size="large">直接購買</Button>
                            </div>
                            <PaymentAndShipping />
                        </Col>
                    </Row>
                    <div style={{ marginBottom: '10vh' }}></div>
                    <Row gutter={[32, 32]}>
                        <Col
                            xs={{ span: 24 }}>
                            <Tabs
                                onChange={onChange}
                
                                className={styles.tab}
                                items={[
                                    {
                                        label: "商品資訊",
                                        key: "1",
                                        children: (

                                            <div style={{ whiteSpace: 'pre-line' }} className={styles.descript}>
                                                {`作者：${product.writer}\n\n`}
                                                {product.description}
                                            </div>

                                        ),
                                    },
                                    {
                                        label: "下單須知",
                                        key: "2",
                                        children: (
                                            <div className={styles.descript}>
                                                <p>若您在十天鑑賞期(含例假日)內欲退貨，請參照常見問題。<br /><br />
                                                    ▶ 依消保法之規定提供商品十天鑑賞期(含例假日)的服務，原則若已將商品拆封即無法申請退貨！申請退貨商品須保持完整無誤、且無人為損傷的情形下才能申請。<br /><br />
                                                    ▶ 超商取貨有材積及重量限制，若您訂購的商品超過尺寸或重量，我們會通知您更改取貨方式。<br /><br />
                                                    ▶ 國際貨運有壅塞及延遲之狀況發生，商品到貨日可能導致延期，請耐心等候，造成不便敬請見諒。<br /><br />
                                                    ▶ 商品的發售日期、外型、價格、贈品內容等，有因諸多不可抗力之原因導致變更、延期、中止的可能性。建議您下單前多加考慮。<br /><br />

                                                    ▶ 不適用十天鑑賞期商品：<br />
                                                    以數位或電磁紀錄形式儲存之商品、易於變質或損壞之商品、以及性質上無法或不適合退換之商品：如CD、VCD、DVD、電腦軟體，若產品瑕疵無法讀取僅接受原片換新。<br />
                                                    衣飾鞋類-如泳裝、T恤，如於送達後水洗或污損者。<br />
                                                </p>
                                            </div>
                                        ),
                                    },
                                    {
                                        label: "商品評價",
                                        key: "3",
                                        children: (
                                            <>
                                                <Comments />
                                            </>
                                        ),
                                    },
                                ]}
                            />

                        </Col>
                    </Row>
                
                </div >)
            }
        </>

    )
}