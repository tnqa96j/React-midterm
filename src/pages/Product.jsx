import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import products from "../json/products.json";
import { Helmet } from "react-helmet-async";

export default function Product({category,setCategory,subCategory,setSubCategory,breadcrumbCategory,setBreadcrumbCategory,breadcrumbSubCategory,setBreadcrumbSubCategory}) {

    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );

    

    return (
        <div>
            <Helmet><title>{`宅小物 — ${product.name}`}</title></Helmet>
            <Header />
            <div className="container" style={{ marginBottom: '15%' }}>
                <ProductDetail product={product} category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory}/>
            </div>

            <Footer />
        </div>
    )
}