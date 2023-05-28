import ProductItem from "../ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Divider, Tooltip } from "antd";

import styles from "./swipercoverflow.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function SwiperCoverflow({products}) {


    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // 根据上架日期排序
        const sortedProducts = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
        // 取最新的8个商品
        const latest = sortedProducts.slice(0, 8);
        setLatestProducts(latest);
    }, [products]);

    return (
        <>
            <div style={{ marginTop: '50px', marginBottom: '20px' }}>
                <Divider><h1>新品上市</h1></Divider>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.swiper}
                >
                    {latestProducts.map((product) => (
                        <SwiperSlide key={product.id} className={styles.swiperSlide}>
                            <Link to={`/product/id/${product.id}`}>
                                <Tooltip placement="bottom" title={`上架時間:${product.date}`}>
                                    <img src={product.image} alt={product.name} className={styles.img} />
                                </Tooltip>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    )
}