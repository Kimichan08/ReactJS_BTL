import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { CartProvider } from 'react-use-cart';
function MasterLayout({ children }) {
    return (


        <CartProvider>
            <Header />
            {children}
            <Footer />
        </CartProvider>

    );
}

export default MasterLayout;
