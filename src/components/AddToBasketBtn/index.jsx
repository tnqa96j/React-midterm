import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import { Basket } from "../Icons";
import { useLocation } from "react-router-dom";
import { theme } from "antd";


export default function AddToBasketBtn({ product, qty }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const openNotification = (qty) => {
    (qty>0)
    ?(    
      notification.open({
      message: '已成功加入購物清單',
      placement: 'bottom',
      duration: 2,
    })
    )
    :(
      notification.open({
        message: '您尚未選擇商品數量',
        placement: 'bottom',
        duration: 2,
      })
    )

  };

  const addToCart = () => {
    openNotification(qty);
    if(qty>0)
   { dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))}
  };

  const { countInStock } = product;

  const {
    token: { colorPrimary,badgeColor }
} = theme.useToken();

  return (

    <>
    {
      location.pathname.startsWith("/AllProducts") 
      ?(
        <Button
        icon={<Basket color={colorPrimary}/>}
        disabled={countInStock <= 0}
        onClick={addToCart}
        type="link"
      />
      )
      :(<Button type="primary" block size="large" disabled={countInStock <= 0} style={{ display: 'block', marginTop: '2%', marginBottom: '2%',borderRadius:'50px',width:'50%' }} onClick={addToCart}>
          加入購物車
        </Button>
      )
    }

    </>
  );
}
