import React, { useRef, useState } from "react";
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
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination, Navigation, Grid } from "swiper";
import { Link } from "react-router-dom";



export default function ProductSlider({ products, icon, category, subcategory,subName }) {


  const isHome = window.location.pathname === "/"; //判斷目前是否在首頁

  //const _Products = showAll ? products : products.slice(0, 6); //判斷是否showAll

  const {
    token: { colorTopNavBar },
  } = theme.useToken();


  return (
    <div>

      {
        (category == 1) ?
          (
            <Swiper
              freeMode={true}
              modules={[Navigation, FreeMode, Pagination]}
              className={styles.swiper}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                // when window width is >= 320px
                300: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
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
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                992: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}

            >
              {products
                .filter((product) => product.categoryTitle === "小說")
                .map((product) => (
                  <SwiperSlide key={product.id} >
                    <ProductItem product={product} icon={icon} />
                  </SwiperSlide>
                ))}

            </Swiper>
          ) : null

      }



      {
        (category == 2) ? (
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
            }}
            spaceBetween={0}
            modules={[Grid]}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              // when window width is >= 320px
              300: {
                slidesPerView: 2,
              },
              450: {
                slidesPerView: 2,
              },
              // when window width is >= 480px
              576: {
                slidesPerView: 2,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 3,
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 3,
              },
              // when window width is >= 640px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {
              subcategory === 1 ? (
                <>
                  {products
                    .filter((product) => product.categoryTitle === "漫畫" && product.subCategoryTitle === "男性向")
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductItem product={product} icon={icon} />
                      </SwiperSlide>
                    ))}
                </>
              ) : null
            }

            {
              subcategory === 2 ? (
                <>
                  {products
                    .filter((product) => product.categoryTitle === "漫畫" && product.subCategoryTitle === "女性向")
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductItem product={product} icon={icon} />
                      </SwiperSlide>
                    ))}
                </>
              ) : null
            }

            {
              subcategory === 3 ? (
                <>
                  {products
                    .filter((product) => product.categoryTitle === "漫畫" && product.subCategoryTitle === "耽美")
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductItem product={product} icon={icon} />
                      </SwiperSlide>
                    ))}
                </>
              ) : null
            }

            {
              subcategory === 4 ? (
                <>
                  {products
                    .filter((product) => product.categoryTitle === "漫畫" && product.subCategoryTitle === "百合")
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductItem product={product} icon={icon} />
                      </SwiperSlide>
                    ))}
                </>
              ) : null
            }

          </Swiper>
        ) : null
      }

      {
        (category == 3) ?
          (
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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}

            >
              {products
                .filter((product) => product.categoryTitle === "公仔" || product.categoryTitle === "各式周邊")
                .map((product) => (
                  <SwiperSlide key={product.id} >
                    <ProductItem product={product} icon={icon} />
                  </SwiperSlide>
                ))}

            </Swiper>
          ) : null

      }

{
        (category == 5) ?
          (
            <Swiper
              freeMode={true}
              modules={[Navigation, FreeMode, Pagination]}
              className={styles.swiper}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                // when window width is >= 320px
                300: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
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
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                992: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}

            >
              {products
                .filter((product) => product.subCategoryTitle === subName)
                .map((product) => (
                  <SwiperSlide key={product.id} >
                    <ProductItem product={product} icon={icon} />
                  </SwiperSlide>
                ))}

            </Swiper>
          ) : null

      }






    </div>
  );
}