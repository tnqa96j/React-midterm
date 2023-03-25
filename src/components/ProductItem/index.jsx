import styles from "./productitem.module.css";
import '../../App.css';

export default function ProductItem({product}){

  /*
    1.包含圖片、標題、價錢的一個方塊
    2.圖片(現在用方塊代替)
    3.商品標題
    4.價錢
  */
    return(
      <div className={styles.item}>
         <div className={styles.sqare}>  
            <img src="https://cdn.cite.com.tw/images/s/SPB7G000089.jpg" className={styles.img}/>
         </div>

         <h2 className={styles.name}>
            {product.name}
         </h2>

         <h6 className={styles.price}>
            TWD {product.price}.00
         </h6>
      </div>
    );
}