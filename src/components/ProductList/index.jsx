import styles from "./productlist.module.css";
import '../../App.css';
import { Row, Col, Button } from "antd";
import { RightOutlined } from '@ant-design/icons';
import ProductItem from "../ProductItem";

export default function ProductList({ products, showAll}) {


  /*重點:這是一個將productItem全部顯示出來的元件
    1.gutter是間距
      假設是
      'A A A'
      'B B B'
      第一個數字是AA的間距 第二個數字是AB的間距 單位是PX
    2.  類別標題
        product item
        read more btn
        底線  
    3.顯示8個
    */
  const isHome = window.location.pathname === "/"; //判斷目前是否在首頁

  //const filteredProducts = showAll ? products : products.slice(0, 4); //判斷是否showAll

  return (
    <div className={styles.productlist}>

      {isHome &&
        <h1 className={styles.title}>小說推薦</h1>}

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

      {!showAll && isHome && <div className={styles.btn}>
        <Button type="primary" size="large" icon={<RightOutlined />} >查看更多</Button>
      </div>}

    </div>
  );
}