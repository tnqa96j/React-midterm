import '../../App.css';
import SideMenu from "../SideMenu";
import ProductList from "../ProductList";
import { Row, Col } from "antd";
import { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

export default function ProductsTotal({ products ,category,setCategory,subCategory,setSubCategory,breadcrumbCategory,setBreadcrumbCategory,breadcrumbSubCategory,setBreadcrumbSubCategory}) {
    /*這是一個包含Breadcrumb、SideMenu和ProductList的元件 */



    const onClose =() =>{};

    const CategoryClick = (category,subCategory,breadcrumbCategory,breadcrumbSubCategory) => {
        setCategory(category);
        setSubCategory(subCategory);
        setBreadcrumbCategory(breadcrumbCategory);
        setBreadcrumbSubCategory(breadcrumbSubCategory);
        console.log(category + subCategory + breadcrumbCategory + breadcrumbSubCategory)
      };

    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 0 }}
                    sm={{ span: 0 }}
                    md={{ span: 6 }}
                >
                    <SideMenu onClose={onClose} CategoryClick={CategoryClick}/>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 18 }}
                >
                    <ProductList products={products} showAll={true} />

                    <div style={{ marginBottom: '15%' }}></div>
                </Col>
            </Row>
        </div>
    );
}