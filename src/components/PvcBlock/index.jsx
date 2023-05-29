import styles from './pvcblock.module.css'
import { Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { theme } from 'antd'
import ProductSlider from '../ProductSlider'
import { useMediaQuery } from '@material-ui/core';

export default function PvcBlock({ products }) {
    /*
        1.pvc img 2.three block
        3.productSlider 4.other img
     */

    const {
        token: { colorBgBase, colorTopNavBar },
    } = theme.useToken();

    const isMobile = useMediaQuery(`(max-width:766.98px)`);

    return (
        <>
            <Row gutter={[50, 20]}>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 15 }}
                    lg={{ span: 15 }}
                    xl={{ span: 15 }}>
                    <div className={styles.pvc} style={{ color: '#fcfcfc' }}>
                        <div className={styles.h1}>
                            公仔專區
                            <p className={styles.text}>這裡有很多公仔、真的。</p>
                        </div>

                        <Button type="primary" style={{ backgroundColor: '#6C5574', borderRadius: '30px', width: '230px', marginRight: '15%' }}>查看更多</Button>
                    </div>
                </Col>

                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 9 }}
                    lg={{ span: 9 }}
                    xl={{ span: 9 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                    {isMobile ? (
                        <>
                            <div className={styles.row3}>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq1}>
                                    動畫
                                </Link>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq2}>
                                    Vtuber
                                </Link>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq3}>
                                    生活<br />小物
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.row1}>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq1}>
                                    動畫
                                </Link>
                            </div>
                            <div className={styles.row2}>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq2}>
                                    Vtuber
                                </Link>
                                <Link to="/About" style={{ textDecoration: 'none', color: '#4d304b' }} className={styles.sq3}>
                                    生活<br />小物
                                </Link>
                            </div>
                        </>
                    )}

                </Col >
            </Row >

            <div style={{ marginTop: '3rem' }}></div>
            <Row gutter={[50, 20]}>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 15 }}
                    xl={{ span: 15 }}>
                    <div className={styles.sss}>
                        <ProductSlider products={products} icon={false} category={3} />
                    </div>
                </Col>

                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 9 }}
                    xl={{ span: 9 }}>
                    <div className={styles.other} style={{ color: '#fcfcfc' }}>
                        <div className={styles.h12}>
                            周邊專區
                            <p className={styles.text}>這裡有很多周邊、真的。</p>
                        </div>

                        <Button type="primary" style={{ backgroundColor: '#5A9790', borderRadius: '30px', width: '230px', marginLeft: '15%' }}>查看更多</Button>

                    </div>
                </Col>

            </Row>
            <div style={{ marginTop: '15rem' }}></div>
        </>
    )
}