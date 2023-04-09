import styles from "./productslider.module.css";
import '../../App.css';
import { Button, Divider } from "antd";
import ProductItem from "../ProductItem";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";



export default function ProductSlider({ products }) {


  const isHome = window.location.pathname === "/"; //判斷目前是否在首頁

  //const _Products = showAll ? products : products.slice(0, 6); //判斷是否showAll

  const {
    token: {  colorTopNavBar },
  } = theme.useToken();


  return (
    <div>
      <Divider orientation="left"><h1 className={styles.title}>小說推薦</h1></Divider>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="pre-button">
          <LeftOutlined style={{ fontSize: '2rem', cursor: 'pointer',color: colorTopNavBar}} />
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.pre-button'
          }}
          modules={[Navigation, FreeMode, Pagination]}
          className={styles.swiper}
          breakpoints={{
            // when window width is >= 320px
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}

        >
          {products
            .filter((product) => product.categoryTitle === "小說")
            .map((product) => (
              <SwiperSlide key={product.id} >
                <ProductItem product={product} />
              </SwiperSlide>
            ))}

        </Swiper>
        <div className="next-button">
          <RightOutlined style={{ fontSize: '2rem', cursor: 'pointer',color: colorTopNavBar }} />
        </div>
      </div>
      <div className={styles.btn}>
        <Button type="primary" size="large" icon={<RightOutlined />} ><Link to={`/AllProducts/category/Novel`}>查看更多</Link></Button>
      </div>



      <Divider orientation="left"><h1 className={styles.title}>漫畫推薦</h1></Divider>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="pre-button">
          <LeftOutlined style={{ fontSize: '2rem', cursor: 'pointer',color: colorTopNavBar  }} />
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.pre-button'
          }}
          modules={[Navigation, FreeMode, Pagination]}
          className={styles.swiper}
          breakpoints={{
            // when window width is >= 320px
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}

        >
          {products
            .filter((product) => product.categoryTitle === "漫畫")
            .map((product) => (
              <SwiperSlide key={product.id} >
                <ProductItem product={product} />
              </SwiperSlide>
            ))}

        </Swiper>
        <div className="next-button">
          <RightOutlined style={{ fontSize: '2rem', cursor: 'pointer' }} />
        </div>
      </div>
      <div className={styles.btn}>
        <Button type="primary" size="large" icon={<RightOutlined />} ><Link to={`/AllProducts/category/Manga`}>查看更多</Link></Button>
      </div>




      <Divider orientation="left"><h1 className={styles.title}>公仔推薦</h1></Divider>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="pre-button">
          <LeftOutlined style={{ fontSize: '2rem', cursor: 'pointer' }} />
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.pre-button'
          }}
          modules={[Navigation, FreeMode, Pagination]}
          className={styles.swiper}
          breakpoints={{
            // when window width is >= 320px
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}

        >
          {products
            .filter((product) => product.categoryTitle === "公仔")
            .map((product) => (
              <SwiperSlide key={product.id} >
                <ProductItem product={product} />
              </SwiperSlide>
            ))}

        </Swiper>
        <div className="next-button">
          <RightOutlined style={{ fontSize: '2rem', cursor: 'pointer' }} />
        </div>
      </div>
      <div className={styles.btn}>
        <Button type="primary" size="large" icon={<RightOutlined />} ><Link to={`/AllProducts/category/PVC`}>查看更多</Link></Button>
      </div>




      <Divider orientation="left"><h1 className={styles.title}>周邊推薦</h1></Divider>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="pre-button">
          <LeftOutlined style={{ fontSize: '2rem', cursor: 'pointer' }} />
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.pre-button'
          }}
          modules={[Navigation, FreeMode, Pagination]}
          className={styles.swiper}
          breakpoints={{
            // when window width is >= 320px
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}

        >
          {products
            .filter((product) => product.categoryTitle === "周邊")
            .map((product) => (
              <SwiperSlide key={product.id} >
                <ProductItem product={product} />
              </SwiperSlide>
            ))}

        </Swiper>
        <div className="next-button">
          <RightOutlined style={{ fontSize: '2rem', cursor: 'pointer' }} />
        </div>
      </div>
      <div className={styles.btn}>
        <Button type="primary" size="large" icon={<RightOutlined />} ><Link to={`/AllProducts/category/Merch`}>查看更多</Link></Button>
      </div>

    </div>
  );
}