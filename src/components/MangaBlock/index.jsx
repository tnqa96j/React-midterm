import styles from './mangablock.module.css'
import { Button, Tabs, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { theme } from 'antd'
import ProductSlider from '../ProductSlider'
import '../../App.css';

export default function MangaBlock({ products }) {

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
                    <div className={styles.block} style={{ color: '#4d304b' }}>
                        <h1 className={styles.h1}>漫畫<br />專區</h1>
                        <p className={styles.text}>不用廢話這是漫畫。</p>
                        <Button type="primary" style={{ backgroundColor: '#5A9790', borderRadius: '0', width: '60%',gridArea:'button' }}>查看更多</Button>
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