import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";


export default function AddToBasketBtn({ product, qty }) {
    const dispatch = useDispatch();
  
    const openNotification = () => {
      notification.open({
        message: '已成功加入購物車！',
        placement: 'bottom',
        duration:2,
      });
    };
  
    const addToCart = () => {
      openNotification();
      dispatch(addCartItems({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      }))
    };

    const {countInStock}=product;
  
    return (
       
      <Button type="primary" block size="large" disabled={countInStock <= 0} style={{ display: 'block', marginTop: '2%', marginBottom: '2%' }} onClick={addToCart}>
        加入購物車
      </Button>
    );
  }
  