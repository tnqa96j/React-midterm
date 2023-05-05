import '../../App.css';
import SideMenu from "../SideMenu";
import ProductList from "../ProductList";
import { Row, Col, Pagination } from "antd";
import { useParams,useNavigate } from 'react-router-dom';

export default function ProductsTotal({ products, isLoading, totalProducts }) {
    /*這是一個包含Breadcrumb、SideMenu和ProductList的元件 */

    const PAGE_SIZE = 20;
    const { categoryName, subCategoryName, pageNumber } = useParams();
    console.log("pageNumber"+pageNumber)
    const navigate = useNavigate();

    const total = totalProducts?.length;
    const handlePageChange = (page) => {
        //console.log(page); // 當前點擊的分頁號碼
        !categoryName
            ? navigate(`/AllProducts/${page}`)
            : (!subCategoryName)
                ? navigate(`/AllProducts/category/${categoryName}/${page}`)
                : navigate(`/AllProducts/category/${categoryName}/${subCategoryName}/${page}`);


        // 在這裡更新商品列表資料
    }

    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 0 }}
                    sm={{ span: 0 }}
                    md={{ span: 6 }}
                >
                    <SideMenu />
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 18 }}
                >
                    <ProductList products={products} isLoading={isLoading} />

                    <Pagination
                        total={total}
                        pageSize={PAGE_SIZE}
                        showSizeChanger={false}
                        current={parseInt(pageNumber)}
                        onChange={(page) => handlePageChange(page)}
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                    />

                    <div style={{ marginBottom: '15%' }}></div>
                </Col>
            </Row>
        </div>
    );
}