import style from "./breadcrumbnavbar.module.css"
import '../../App.css';
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function BreadcrumbNavbar({
    category,
    subCategory,
    breadcrumbCategory,
    breadcrumbSubCategory,
    productName,
    productId,
    handleBreadCrumbClick,
  }) {
    const breadcrumbItems = [];
  
    breadcrumbItems.push(
      <Breadcrumb.Item key="AllProducts">
        <Link to="/AllProducts" onClick={() => handleBreadCrumbClick('/AllProducts')}>
          商品總覽
        </Link>
      </Breadcrumb.Item>
    );
  
    if (breadcrumbCategory) {
      breadcrumbItems.push(
        <Breadcrumb.Item key="category">
          <Link
            to={`/AllProducts/category/${category}`}
            onClick={() => handleBreadCrumbClick(`/AllProducts/category/${breadcrumbCategory}`)}
          >
            {breadcrumbCategory}
          </Link>
        </Breadcrumb.Item>
      );
    }
  
    if (breadcrumbSubCategory) {
      breadcrumbItems.push(
        <Breadcrumb.Item key="subCategory">
          <Link
            to={`/AllProducts/category/${category}/${subCategory}`}
            onClick={() =>
              handleBreadCrumbClick(`/AllProducts/category/${breadcrumbCategory}/${breadcrumbSubCategory}`)
            }
          >
            {breadcrumbSubCategory}
          </Link>
        </Breadcrumb.Item>
      );
    }

    if(productName){
        breadcrumbItems.push(
            <Breadcrumb.Item key="productName">
                <Link
                    to={`/product/id/${productId}`}>
                        {productName}
                    </Link>
            </Breadcrumb.Item>
        );
    }
  
    return <Breadcrumb separator={">"} className={style.bread}>{breadcrumbItems}</Breadcrumb>;
  }