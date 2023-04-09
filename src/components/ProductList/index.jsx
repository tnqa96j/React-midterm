import styles from "./productlist.module.css";
import '../../App.css';
import { Row, Col } from "antd";
import ProductItem from "../ProductItem";



export default function ProductList({ products }) {
    return (
        <div className={styles.productlist}>
            <Row gutter={[10, 20]}>
                {products.map(product => (
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
        </div>
    )
}