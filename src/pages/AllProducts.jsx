import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsTotal from "../components/ProductsTotal";
import { useProducts } from "../react-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { theme } from "antd";
import BreadcrumbNavbar from "../components/BreadcrumbNavbar";
import DayNightSwitcher from "../components/DayNightSwitcher";


export default function AllProducts() {

  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { data, isLoading } = useProducts();
  const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];


  const { categoryName, subCategoryName } = useParams();

 
  const _products = !categoryName
    ? products
    : !subCategoryName
      ? products.filter(x => x?.category.toUpperCase() === categoryName.toUpperCase())
      : products.filter(x =>
        x?.category.toUpperCase() === categoryName.toUpperCase() &&
        x?.subCategory.toUpperCase() === subCategoryName.toUpperCase()
      )


  const title = !categoryName
    ? "商品總覽"
    : !subCategoryName
      ? `商品總覽 — ${_products[0]?.categoryTitle}`
      : `商品總覽 — ${_products[0]?.categoryTitle} — ${_products[0]?.subCategoryTitle}`

  const title2 = !subCategoryName
    ? "商品總覽"
    : `商品總覽 — ${_products[0]?.subCategory}`;


  return (
    <div>
      <Helmet><title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>

      <Header />

      <div className="container layoutContent">
        <div style={{ marginTop: '10vh' }}></div>
        <div style={{ display: "flex", flexDirection: 'row-reverse' }}>
          <DayNightSwitcher />
        </div>
        <h1>商品列表</h1>
        <BreadcrumbNavbar  />

        <ProductsTotal products={_products} />
        <div style={{ marginTop: '10vh' }}></div>
      </div>
      <Footer />
    </div>
  )
}