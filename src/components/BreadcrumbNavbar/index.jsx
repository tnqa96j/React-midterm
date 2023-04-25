import '../../App.css';
import { Breadcrumb } from "antd";
import { Link,  useParams } from "react-router-dom";

export default function BreadcrumbNavbar({ product }) {

  const { categoryName, subCategoryName, productId } = useParams();

  const ch = (categoryName) => {
    if (categoryName == 'Novel') return ("小說");
    else if (categoryName == 'Manga') return ("漫畫");
    else if (categoryName == 'PVC') return ("公仔");
    else return ("各式周邊");
  }

  const ch2 = (subCategoryName) => {
    if (subCategoryName == 'Horror') return ("驚悚恐怖");
    else if (subCategoryName == 'Suspense') return ("懸疑推理");
    else if (subCategoryName == 'SF') return ("奇幻科幻");
    else if (subCategoryName == 'Romance') return ("愛情");
    else if (subCategoryName == 'NL') return ("男性向");
    else if (subCategoryName == 'TL') return ("女性向");
    else if (subCategoryName == 'BL') return ("耽美");
    else if (subCategoryName == 'GL') return ("百合");
    else if (subCategoryName == 'Vtuber') return ("Vtuber");
    else if (subCategoryName == 'animate') return ("動畫");
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