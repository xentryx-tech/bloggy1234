import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import './index.css'
// import Layout from './Layout.jsx'
import Blogger
    from "./Blogger.jsx";

import 'bootstrap/dist/css/bootstrap.css'
import Playground from "./Playground.jsx";
import Invento from "./Invento.jsx";
import { AppNameProvider } from "./context/AppNameContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";




createRoot(document.getElementById('root')).render(

    <StrictMode>

        {/* <Layout/> */}
        <Blogger />
        {/* <Playground /> */}
        {/* <AppNameProvider>
            <ProductsProvider>
                <Invento />
            </ProductsProvider>

        </AppNameProvider> */}

    </StrictMode>


)