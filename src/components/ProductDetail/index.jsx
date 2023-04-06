import styles from "./productdetail.module.css"
import '../../App.css';
import PaymentAndShipping from "../PaymentAndShipping";
import { Row, Col, InputNumber, Image, Tabs } from "antd";
import BreadcrumbNavbar from "../BreadcrumbNavbar";
import AddToBasketBtn from "../AddToBasketBtn";
import { useState } from "react";

export default function ProductDetail({ product, category, setCategory, subCategory, setSubCategory, breadcrumbCategory, setBreadcrumbCategory, breadcrumbSubCategory, setBreadcrumbSubCategory }) {

    const handleBreadCrumbClick = (path) => {
        setCategory(product.category);
        setSubCategory(product.subCategory);
        setBreadcrumbCategory(product.categoryTitle);
        setBreadcrumbSubCategory(product.subCategoryTitle);

        if (path === '/AllProducts') {
            setBreadcrumbCategory(null);
            setBreadcrumbSubCategory(null);

            console.log("AllProducts");
        } else if (path.startsWith('/AllProducts/category/')) {
            const parts = path.split('/');
            if (parts.length === 4) {
                setBreadcrumbCategory(parts[3]);
                setBreadcrumbSubCategory(null);

            } else if (parts.length === 5) {
                setBreadcrumbCategory(parts[3]);
                setBreadcrumbSubCategory(parts[4]);

            }
        }
    };

    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

    const onChange = (value) => {
        setQty(value);
        console.log('changed', value);

    };

    const {countInStock} =product;

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
        <div>
            <BreadcrumbNavbar category={product.category} subCategory={product.subCategory} breadcrumbCategory={`${product.categoryTitle}`} breadcrumbSubCategory={`${product.subCategoryTitle}`} productName={`${product.name}`} productId={product.id} handleBreadCrumbClick={handleBreadCrumbClick} ></BreadcrumbNavbar>
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
                    <h3 className={styles.countInstock}>{`在庫數量：${product.countInStock}`}</h3>

                    {countInStock > 0
                        ? (<InputNumber size="large" min={1} max={product.countInStock} defaultValue={1} onChange={onChange} style={{ marginTop: '2%', marginBottom: '2%' }} />)
                        : (<InputNumber disabled size="large" min={0} max={0} defaultValue={0} onChange={onChange} style={{ marginTop: '2%', marginBottom: '2%' }} />)
                    }

                    <AddToBasketBtn product={product} qty={qty} />
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
                                        {product.description}
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