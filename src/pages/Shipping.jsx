import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from '../components/Header';
import Footer from "../components/Footer"
import ShippingInfo from '../components/ShippingInfo';

import { useProductById } from '../react-query';

function Shipping() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const { productId } = useParams();
   const { data, isLoading } = useProductById(productId);

   const product = data || {};

   return (
      <>
         <Helmet>
            <title>結帳</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>

         <div className="top" style={{ backgroundColor: colorBgBase }}>
                <div className="container">
                    <Header />
                </div>
            </div>

         <div className="container">
            <ShippingInfo />
         </div>
         <Footer  />
      </>
   );
}

export default Shipping;