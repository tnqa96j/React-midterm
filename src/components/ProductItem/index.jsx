import { Link } from 'react-router-dom';
import styles from "./productitem.module.css";
import '../../App.css';
import { theme } from 'antd';
import AddToFavoriteBtn from '../AddToFavoriteBtn';
import { ShoppingCartOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useToggleFavoriteProduct, useUserInfo } from '../../react-query';
import AddToBasketBtn from '../AddToBasketBtn';



export default function ProductItem({ product, icon }) {

  /*這是一個將「單一」商品顯示出來的元件
    1.包含圖片、標題、價錢的一個方塊
    2.圖片(現在用方塊代替)
    3.商品標題
    4.價錢
  */
  const {
    token: { colorProductItem, colorTextBase }
  } = theme.useToken();


  const { mutate } = useToggleFavoriteProduct();
  const { data: userInfo } = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  let isFavorite = _.includes(favorites, product.id);
  const toggleFavorite = () => {
    if (!!userInfo?.uid)
      mutate({ productId: product.id, uid: userInfo?.uid })
  }


  return (
    <div className={styles.item}>
      <div className={styles.square} style={{ backgroundColor: colorProductItem }}>
        <Link to={`/product/id/${product.id}`} >
          <img src={product.image} className={styles.img} />
        </Link>
      </div>
      <h2>
        <Link to={`/product/id/${product.id}`} className={styles.name} style={{ color: colorTextBase }} >
          {product.name}
        </Link>
      </h2>

      <h3 className={styles.writer}>
        {product.writer}
      </h3>

      <h6 className={styles.price}>
        NT $ {product.price}
      </h6>

      {
        (icon == true)
          ? (<div className={styles.btngroup}>
            <div onClick={toggleFavorite} className={styles.favorite}>
              <AddToFavoriteBtn color={colorTextBase} productId={product.id} />
            </div>

            <div className={styles.shop}>
              <AddToBasketBtn product={product} qty={1}/>
            </div>

          </div>)
          : (<></>)

      }

    </div>
  );
}