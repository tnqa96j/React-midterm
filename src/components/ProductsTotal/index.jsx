import '../../App.css';
import SideMenu from "../SideMenu";
import ProductList from "../ProductList";
import { Row, Col } from "antd";



export default function ProductsTotal({ products }) {
    /*這是一個包含SideMenu和ProductList的元件 */

    return (
        <Row gutter={[32, 32]}>
            <Col
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                md={{span: 6}}
            >
                <SideMenu />
            </Col>
            <Col
                xs={{span:24}}
                sm={{ span: 24 }}
                md={{ span: 18 }}
            >
                <ProductList products={products} showAll={true} />

                <div style={{marginBottom:'15%'}}></div>
            </Col>
        </Row>
    );
}