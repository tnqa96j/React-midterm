import styles from './banner.module.css'
import '../../App.css';
import { Carousel } from 'antd';

export default function Banner(){

    return(
        <Carousel autoplay className={styles.banner}>
        <div>
          <img src='../../../public/images/banner01.png' className={styles.img}/>
        </div>
        <div>
        <img src='../../../public/images/banner02.png' className={styles.img}/>
        </div>

      </Carousel>
    );
}