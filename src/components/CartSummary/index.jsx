import { Badge, Popover, Avatar, Button } from "antd";
import styles from "./cartsummary.module.css"
import { ShoppingCartOutlined } from '@ant-design/icons';
import { selectCartItems } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItems } from "../../redux/cartSlice";
import { theme } from 'antd';
import { Logo, Menu, Search, Basket, User } from '../Icons';
import { useUserInfo } from "../../react-query";
import { useNavigate } from 'react-router-dom';



export default function CartSummary({ avatarStyle }) {

    const {
        token: { colorPrimary, badgeColor }
    } = theme.useToken();
    const navigate = useNavigate();



    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { data: userInfo } = useUserInfo();

    const count = (cartItems.length > 0)
        ? cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
            cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0;
    }

    const goToShipping = () => {
        if (userInfo?.name)
            navigate("/shopping/shipping")
        else
            navigate("/auth/login?redirect=/shopping/shipping");
    }

    const text = <span>最近選購的商品</span>;
    const content = (
        <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            {cartItems.length === 0 ? (
                <div style={{ marginBottom: '1rem' }}>您尚未選購任何商品</div>
            ) : (
                cartItems.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <Link to={`/product/id/${item.id}`} >
                            <img
                                className={styles.img}
                                src={item.image}
                                alt={item.name}
                            />
                        </Link>
                        <div className={styles.content}>
                            <div className={styles.productTitle}>{item.name}</div>
                            <div className={styles.qty}>數量：{item.qty}件</div>
                        </div>
                        <div className={styles.price}>${item.price * item.qty}</div>
                        <div
                            className={styles.delete}
                            onClick={(event) => { event.stopPropagation(); dispatch(removeCartItems(item.id)); }}
                        >
                            x
                        </div>

                    </li>
                ))
            )}
            {cartItems.length === 0
                ? (<Button disabled block>結帳</Button>)
                : (
                    <div>
                        <div className={styles.totalprice}>總金額：${getTotalPrice()}</div>
                        <Button block type="primary" onClick={goToShipping}>結帳</Button>
                    </div>)
            }
        </div>
    );

    return (
        <Popover placement="bottom" title={text} content={content} trigger="click">
            <Badge count={count} color={badgeColor}>
                <div className={styles.icon}  >
                    <Basket color={colorPrimary} />
                </div>
            </Badge>
        </Popover>
    );
}