import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsTotal from "../components/ProductsTotal";
import products from "../json/products.json";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BreadcrumbNavbar from "../components/BreadcrumbNavbar";


/*商品導覽是否用麵包屑導覽代替?ㄋ */
/*BreadcrumbNavbar需要4個參數 */
export default function AllProducts() {
    const { categoryName, subCategoryName } = useParams();


    const _products = !categoryName
        ? products
        : !subCategoryName
            ? products.filter(x => x?.category.toUpperCase() === categoryName.toUpperCase())
            : products.filter(x =>
                x?.category.toUpperCase() === categoryName.toUpperCase() &&
                x?.subCategory.toUpperCase() === subCategoryName.toUpperCase()
            )



    const title = !subCategoryName
        ? "商品總覽"
        : `商品總覽 — ${_products[0]?.subCategory}`;


    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [breadcrumbCategory, setBreadcrumbCategory] = useState('');
    const [breadcrumbSubCategory, setBreadcrumbSubCategory] = useState('');


    return (
        <div>
            <Helmet><title>{title}</title></Helmet>

            <Header category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory}/>

            <div className="container layoutContent">
                <div style={{ marginTop: '3vh' }}></div>

                <BreadcrumbNavbar category={category} subCategory={subCategory} breadcrumbCategory={breadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} />

                <ProductsTotal products={_products} category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory}/>
            </div>
            <Footer />
        </div>
    )
}