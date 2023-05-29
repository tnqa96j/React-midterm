import styles from './mangablock.module.css'
import { Button, Tabs, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { theme } from 'antd'
import ProductSlider from '../ProductSlider'
import '../../App.css';
import { useNavigate } from 'react-router-dom'

export default function MangaBlock({ products }) {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/AllProducts/category/Manga/1')
    }

    /*
    1.img
    2.tab
     */
    return (
        <div className={styles.container}>
            <Row gutter={[50, 20]} justify="space-evenly">
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 6 }}
                    xl={{ span: 7 }}>
                    <div className={styles.block} style={{color:'#fcfcfc',textShadow: '0 0 0.1em #000000,0 0 0.1em #4d304b,0 0 0.5em #4d304b'}}>
                        <h1 className={styles.h1}>漫畫<br />專區</h1>
                        <p className={styles.text}>不用廢話就是漫畫，這裡提供男性向、女性向、BL、GL等多元類型漫畫。</p>
                        <Button type="primary" style={{ backgroundColor: '#35B1A2', borderRadius: '0', width: '50%',gridArea:'button',marginRight:'5%' }} onClick ={handleClick}>查看更多</Button>
                    </div>
                </Col>

                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 18 }}
                    xl={{ span: 17 }}>

                    <Tabs defaultActiveKey="1"
                        centered
                        items={[
                            {
                                key: '1',
                                label: `男性向`,
                                children:
                                    <>
                                        <div className={styles.tabs}>
                                            <ProductSlider products={products} icon={false} category={2} subcategory={1} />
                                        </div>
                                    </>,
                            },
                            {
                                key: '2',
                                label: `女性向`,
                                children:
                                    <>
                                        <div className={styles.tabs}>
                                            <ProductSlider products={products} icon={false} category={2} subcategory={2} />
                                        </div>
                                    </>,
                            },
                            {
                                key: '3',
                                label: `耽美`,
                                children:
                                    <>
                                        <div className={styles.tabs}>
                                            <ProductSlider products={products} icon={false} category={2} subcategory={3} />
                                        </div>
                                    </>,
                            },
                            {
                                key: '4',
                                label: `百合`,
                                children:
                                    <>
                                        <div className={styles.tabs}>
                                            <ProductSlider products={products} icon={false} category={2} subcategory={4} />
                                        </div>
                                    </>,
                            },
                        ]} />


                </Col>
            </Row>
            <div style={{ marginBottom: '15rem' }}></div>
        </div>
    )
}