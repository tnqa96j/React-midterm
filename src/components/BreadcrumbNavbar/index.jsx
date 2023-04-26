import '../../App.css';
import { Breadcrumb } from "antd";
import { Link,  useParams } from "react-router-dom";

export default function BreadcrumbNavbar({ product }) {

  const { categoryName, subCategoryName, productId } = useParams();

  const ch = (categoryName) => {
    if (categoryName.toUpperCase() == 'NOVEL') return ("小說");
    else if (categoryName.toUpperCase() == 'MANGA') return ("漫畫");
    else if (categoryName.toUpperCase() == 'PVC') return ("公仔");
    else return ("各式周邊");
  }

  const ch2 = (subCategoryName) => {
    if (subCategoryName.toUpperCase() == 'HORROR') return ("驚悚恐怖");
    else if (subCategoryName.toUpperCase() == 'SUSPENSE') return ("懸疑推理");
    else if (subCategoryName.toUpperCase() == 'SF') return ("奇幻科幻");
    else if (subCategoryName.toUpperCase() == 'ROMANCE') return ("愛情");
    else if (subCategoryName.toUpperCase() == 'NL') return ("男性向");
    else if (subCategoryName.toUpperCase() == 'TL') return ("女性向");
    else if (subCategoryName.toUpperCase() == 'BL') return ("耽美");
    else if (subCategoryName.toUpperCase() == 'GL') return ("百合");
    else if (subCategoryName.toUpperCase() == 'VTUBER') return ("Vtuber");
    else if (subCategoryName.toUpperCase() == 'ANIMATE') return ("動畫");
    else return ("生活小物");

  }

  return (
    <>
      {(!productId)
        ? (!categoryName)
          ? (
            <Breadcrumb style={{ listStyleType: 'none', marginBottom: '5vh' }} separator={">"}>
              <Breadcrumb.Item>
                <Link to="/AllProducts">
                  商品總覽
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          )
          : !subCategoryName
            ? (
              <Breadcrumb style={{ listStyleType: 'none', marginBottom: '5vh' }} separator={">"}>
                <Breadcrumb.Item>
                  <Link to="/AllProducts">
                    商品總覽
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link
                    to={`/AllProducts/category/${categoryName}`}>{ch(categoryName)}</Link>
                </Breadcrumb.Item>
              </Breadcrumb>)
            : (
              <Breadcrumb style={{ listStyleType: 'none', marginBottom: '5vh' }} separator={">"}>
                <Breadcrumb.Item>
                  <Link to="/AllProducts">
                    商品總覽
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link
                    to={`/AllProducts/category/${categoryName}`}>{ch(categoryName)}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link
                    to={`/AllProducts/category/${categoryName}/${subCategoryName}`}>{ch2(subCategoryName)}</Link>
                </Breadcrumb.Item>
              </Breadcrumb>)

        : (
          <Breadcrumb style={{ listStyleType: 'none', marginBottom: '5vh' }} separator={">"}>
            <Breadcrumb.Item>
              <Link to="/AllProducts">
                商品總覽
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to={`/AllProducts/category/${product.category}`}>{product.categoryTitle}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to={`/AllProducts/category/${product.category}/${product.subCategory}`}>{product.subCategoryTitle}</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>{product.name}</Breadcrumb.Item>

          </Breadcrumb>
        )
      }
    </>
  );
}