import { Link } from 'react-router-dom';
import styles from "./productitem.module.css";
import '../../App.css';
import { theme } from 'antd';

export default function ProductItem({ product }) {

  /*這是一個將「單一」商品顯示出來的元件
    1.包含圖片、標題、價錢的一個方塊
    2.圖片(現在用方塊代替)
    3.商品標題
    4.價錢
  */
  const {
    token: { colorProductItem, colorTextBase }
  } = theme.useToken();

  return (
    <div className={styles.item} style={{ backgroundColor: colorProductItem, borderColor: colorProductItem }}>

      <Link to={`/product/id/${product.id}`} >
        <img src={product.image} className={styles.img} />
      </Link>


      <h2>
        <Link to={`/product/id/${product.id}` } className={styles.name} style={{ color: colorTextBase }} >
          {product.name}
        </Link>
      </h2>

      <h3 className={styles.writer}>
        {product.writer}
      </h3>

      <h6 className={styles.price}>
        TWD {product.price}.00
      </h6>
    </div>
  );
}