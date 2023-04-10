import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsTotal from "../components/ProductsTotal";
import products from "../json/products.json";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { theme } from "antd";
import BreadcrumbNavbar from "../components/BreadcrumbNavbar";
import DayNightSwitcher from "../components/DayNightSwitcher";


/*商品導覽是否用麵包屑導覽代替?ㄋ */
/*BreadcrumbNavbar需要4個參數 */
export default function AllProducts({ category, setCategory, subCategory, setSubCategory, breadcrumbCategory, setBreadcrumbCategory, breadcrumbSubCategory, setBreadcrumbSubCategory }) {
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

  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();



  const handleBreadCrumbClick = (path) => {
    if (path === '/AllProducts') {
      setBreadcrumbCategory(null);
      setBreadcrumbSubCategory(null);

      console.log("AllProducts");
    } else if (path.startsWith('/AllProducts/category/')) {
      const parts = path.split('/');
      if (parts.length === 4) {
        setBreadcrumbCategory(parts[3]);
        setBreadcrumbSubCategory(null);

      } else if (parts.length === 5) {
        setBreadcrumbCategory(parts[3]);
        setBreadcrumbSubCategory(parts[4]);

      }
    }
  };

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

      <Header category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />

      <div className="container layoutContent">
        <div style={{ marginTop: '10vh' }}></div>
        <div style={{ display: "flex", flexDirection: 'row-reverse' }}>
          <DayNightSwitcher />
        </div>
        <h1>商品列表</h1>
        <BreadcrumbNavbar category={category} subCategory={subCategory} breadcrumbCategory={breadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} handleBreadCrumbClick={handleBreadCrumbClick} />

        <ProductsTotal products={_products} category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />
        <div style={{ marginTop: '10vh' }}></div>
      </div>
      <Footer />
    </div>
  )
}