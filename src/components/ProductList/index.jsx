import styles from "./productlist.module.css";
import '../../App.css';
import { Row, Col ,Spin} from "antd";
import ProductItem from "../ProductItem";
import { LoadingOutlined } from '@ant-design/icons';



export default function ProductList({ products, isLoading }) {

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 100,
            }}
            spin
        />
    );
    return (
        <>
            {
                isLoading
                    ? (
                        <div className='spinner-wrap'>
                            <Spin indicator={antIcon} className='spinner' />
                        </div>
                    )
                    : (
                        <div className={styles.productlist} >
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
                        </div >
                    )
            }
        </>
    )
}