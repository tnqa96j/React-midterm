import styles from './banner.module.css'
import '../../App.css';
import { Carousel } from 'antd';
import { useMediaQuery } from '@material-ui/core';

export default function Banner(){
  const isMobile2 = useMediaQuery(`(max-width:575.98px)`);

    return(
        <Carousel autoplay className={styles.banner}>
        <div>
          {isMobile2
            ?(<img src='/images/banner03.png' className={styles.img}/>)
            :(<img src='/images/banner01.png' className={styles.img}/>)}
        </div>
        <div>
          {isMobile2
            ?(<img src='/images/banner04.png' className={styles.img}/>)
            :(<img src='/images/banner02.png' className={styles.img}/>)}
        </div>

      </Carousel>
    );
}