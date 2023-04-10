import styles from "./productlist.module.css";
import '../../App.css';
import { Row, Col, Pagination } from "antd";
import ProductItem from "../ProductItem";
import { useState } from "react";



export default function ProductList({ products }) {

    const [currentPage, setCurrentPage] = useState(1);  // 記錄當前頁數，初始值為 1
    const productsPerPage = 16;  // 每頁顯示的商品數量
    const indexOfLastProduct = currentPage * productsPerPage;  // 最後一個商品的索引值
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;  // 第一個商品的索引值
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);  // 取出當前頁數對應的商品

    const handlePageChange = (page) => {  // 處理分頁改變事件
        setCurrentPage(page);
        window.scrollTo(0, 0);

    };
    return (
        <div className={styles.productlist}>
            <Row gutter={[10, 20]}>
                {currentProducts.map(product => (
                    <Col
                        key={product.id}
                        xs={{ span: 12 }}
                        sm={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 6 }}
                    >
                        <ProductItem product={product} />
                    </Col>
                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={productsPerPage}
                total={products.length}
                onChange={handlePageChange}
                showSizeChanger={false}
                className={styles.pag}
            />
        </div>
    )
}