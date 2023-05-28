import styles from './footer1.module.css'
import Searching from '../Searching'
import '../../App.css';


export default function Footer1() {

    /*
        1.文字
        2.搜尋框
     */
    return (
        <div className={styles.bg} style={{color:'#4d304b'}}>
            <div className='container'>
                要尋找什麼商品呢？
                <div className={styles.search}>
                    <Searching />

                </div>
            </div>
        </div>
    )
}