import styles from "./paymentandshipping.module.css"
import '../../App.css';
import { theme } from "antd";

export default function PaymentAndShipping(){
    /*這是付款資訊+配送資訊的元件 */

    return(
        <div className={styles.background}>
            <h2 className={styles.title}>付款方式</h2>
            <p className={styles.p}>宅配代收、7-11取貨付款、全家取貨付款、信用卡分期付款、信用卡、ATM 虛擬帳號</p>
            <h2 className={styles.title}>運送方式</h2>
            <p className={styles.p}>國際快遞、7-11取貨、全家取貨、實體門市取貨、一般宅配、貨到付款</p>
        </div>
    )
}