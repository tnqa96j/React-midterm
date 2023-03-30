import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import products from "../json/products.json";

    /*重點:
        1.傳進ProductList的products參數是來自products.json的products物件
        2.因為是物件所以function ProductList({products}){} products要用大括號包起來
    */

export default function Home(){

    return(
        <div>
            <Header />
            <div className="container layoutContent">
                <ProductList products={products} showAll={false}/>
            </div>
            <Footer className="layoutFooter"/>
        </div>

    );
}