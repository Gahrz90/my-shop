
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CMSOrderPage, CMSPage, CMSProductPage, CartPage, CheckoutPage, LoginPage, ShopPage, ThanksPage } from "./pages"
import { NavBar } from "@/shared/index"


/*PRO TIPS*/
/* index all'interno della route indica che il path punta in questo caso a products */
/* per cui se nell'url cerco /cms, il navigate mi riporta di default alla pagina products */

/* path="*" casistica in cui se viene inserito un url che non corrisponde con nessuna pagina mappata */
/* bisogna avvalersi del navigate per riportarlo ad una pagina anzichè dell'error del browser (più carina) */

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />}/>
          <Route path="cart" element={<CartPage />}/>
          <Route path="checkout" element={<CheckoutPage />}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="thankyou" element={<ThanksPage />}/>

          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductPage />}/>
            <Route path="orders" element={<CMSOrderPage />}/>
            <Route index element={<Navigate to="products" />}/> 
          </Route>

          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
