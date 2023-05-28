import { Input } from 'antd';
import { useState } from 'react';
import { useProducts } from "../../react-query";
import styles from "./searching.module.css";
import '../../App.css';
import { Link } from 'react-router-dom';
import { theme } from 'antd';

export default function Searching() {

    const { data, isLoading } = useProducts();
    const products = data || [];

    const { Search } = Input;
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    const filteredProducts = searchValue.trim() === '' ? [] : products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const {
        token: { colorProductItem, colorTextBase }
    } = theme.useToken();

    return (
        <div>
            <Input
                placeholder="搜尋商品"
                onChange={onSearch}
                style={{ width: '100%' ,position:'absolute',left:'0',zIndex:'1' ,top:'0',borderRadius:'50px',height:'100%',transition:'0.3s all linear'}}

            />
            <div className={styles.list} >
                {filteredProducts.map((product) => {
                    // 用正則表達式將匹配的關鍵字替換為帶有樣式的文字
                    const nameWithHighlight = product.name.replace(new RegExp(searchValue, 'ig'), (match) => {
                        return `<span style="font-weight:SemiBold;color:#ea05fa;">${match}</span>`;
                    });
                    // 用 dangerouslySetInnerHTML 將 HTML 字串渲染到頁面上
                    return (
                        <Link to={`/product/id/${product.id}`} style={{color:'#4d304b'}}>
                        <div key={product.id} className={styles.option}  dangerouslySetInnerHTML={{ __html: nameWithHighlight }}/>
                        </Link>
                      );
                })}
            </div>
        </div>
    );
}