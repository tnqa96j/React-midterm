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

  //取得全部商品
  const { data, isLoading } = useProducts();
  const products = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  //取得url裡的大分類、小分類參數
  const { categoryName, subCategoryName, pageNumber } = useParams();

  console.log(categoryName + subCategoryName + pageNumber);




  const _products = !categoryName || !data
    ? products
    : !subCategoryName
      ? products.filter(x => x?.category.toUpperCase() === categoryName.toUpperCase())
      : products.filter(x =>
        x?.category.toUpperCase() === categoryName.toUpperCase() &&
        x?.subCategory.toUpperCase() === subCategoryName.toUpperCase()
      )

    
      //單頁要渲染的商品數量
      const startIndex = (parseInt(pageNumber) - 1) * 20;
      const endIndex = parseInt(pageNumber) * 20;
      const productsToDisplay = _products.slice(startIndex, endIndex);
    
      //還是要將符合類別的全部商品傳過去ProductsTotal，Pagination元件才能判斷數量

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
        <BreadcrumbNavbar />

        <ProductsTotal products={productsToDisplay} totalProducts={_products} isLoading={isLoading} />
        <div style={{ marginTop: '10vh' }}></div>
      </div>
      <Footer />
    </div>
  )
}