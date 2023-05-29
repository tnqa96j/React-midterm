import styles from './novelblock.module.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { theme } from 'antd'
import ProductSlider from '../ProductSlider'
import { useNavigate } from 'react-router-dom'


export default function NovelBlock({ products }) {
    /*
    1.img
    2.tag
    3.productSlider
     */
    const navigate = useNavigate();
    const {
        token: { colorBgBase, colorTopNavBar },
    } = theme.useToken();
    const handleClick = () =>{
        navigate('/AllProducts/category/Novel/1')
    }

    return (
        <div>
            <div className={styles.block} style={{ color: '#fcfcfc', textShadow: '0 0 0.1em #000000,0 0 0.1em #4d304b,0 0 0.5em #4d304b' }}>
                <h1>小說專區</h1>
                <p className={styles.text}>不用多說這是小說。</p>
                <Button type="primary" style={{ backgroundColor: '#4d304b', borderRadius: '0', width: '230px', color: '#fcfcfc' }} onClick ={handleClick}>查看更多</Button>
            </div>

            <ul className={styles.ul}>

                <Link to="/AllProducts/category/Novel/Horror/1" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.li1}>
                    <li >
                        驚悚恐怖區
                    </li>
                </Link>


                <Link to="/AllProducts/category/Novel/Suspense/1" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.li2}>
                    <li >
                        懸疑推理區
                    </li>
                </Link>

                <Link to="/AllProducts/category/Novel/SF/1" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.li1}>
                    <li >
                        奇幻科幻區
                    </li>
                </Link>

                <Link to="/AllProducts/category/Novel/Romance/1" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.li2}>
                    <li >
                        浪漫愛情區
                    </li>
                </Link>
            </ul>
            <div className={styles.container}>
                <ProductSlider products={products} icon={false} category={1} />
            </div>
        </div>
    )
}