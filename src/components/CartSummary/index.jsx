import { useState } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import styles from "./cartsummary.module.css"

export default function CartSummary() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.cartSummary} >
      <Badge count={5} color="#6366F2" style={{color: 'white'}}>
        <CartIcon />
      </Badge>
    </nav>
  );
}