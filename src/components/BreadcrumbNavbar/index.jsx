import style from "./breadcrumbnavbar.module.css"
import '../../App.css';
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function BreadcrumbNavbar({category,subCategory,breadcrumbCategory,breadcrumbSubCategory,productName}){
    return(
        <Breadcrumb separator=">" style={{marginTop:'15%',color:'black'}} >
        <Breadcrumb.Item><Link to="/AllProducts">商品總覽</Link></Breadcrumb.Item>
        {category && (
                <Breadcrumb.Item><Link to={`/AllProducts/category/${category}`}>{breadcrumbCategory}</Link></Breadcrumb.Item>
            )}

            {category&&subCategory && (
                <Breadcrumb.Item><Link to={`/AllProducts/category/${category}/${subCategory}`}>{breadcrumbSubCategory}</Link></Breadcrumb.Item>
            )}
            <Breadcrumb.Item>{productName}</Breadcrumb.Item>
        </Breadcrumb>
    )
}