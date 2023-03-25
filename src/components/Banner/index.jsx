import styles from './banner.module.css'
import '../../App.css';
import { Carousel } from 'antd';

export default function Banner(){

    return(
        <Carousel autoplay>
        <div>
          <h3 className={styles.contentStyle}>1</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>2</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>3</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>4</h3>
        </div>
      </Carousel>
    );
}