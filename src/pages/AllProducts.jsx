import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsTotal from "../components/ProductsTotal";
import products from "../json/products.json";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";


/*商品導覽是否用麵包屑導覽代替?ㄋ */
export default function AllProducts(){
    const { categoryName } = useParams();

    const _products = !categoryName
    ? products
    : products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );

      const title = !categoryName
    ? "商品總覽"
    :`商品總覽 — ${_products[0]?.category}`;

    return(
        <div>
            <Helmet><title>{title}</title></Helmet>
            <Header />
            <div className="container layoutContent">
            <h1 style={{color:'black',marginTop:'15%'}}>商品總覽</h1> 
                <ProductsTotal products={_products}/>
            </div>
            <Footer />
        </div>
    )
}