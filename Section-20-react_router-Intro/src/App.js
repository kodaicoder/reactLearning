import { Redirect, Route, Switch } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { MainHeader } from "./components/MainHeader";
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/">
          {/* เอาไว้ทำการ redirect ไปยัง route ที่กำหนดเหมือน route ด้านบนถูกเรียก
          ในที่นี้คือ localhost:3000/ ถูกเรียก และจะวิ่งไปหา localhost:3000/welcome/ แทน*/}
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        {/* Switch เอาไว้หยุดการ render DOM ต่อท้าย สำหรับ route ที่มีชื่อเริ่มเหมือนกัน */}
        <Switch>
          {/* exact เอาไว้ทำให้switch รู้ว่าควรข้ามการ render DOM ตัวไหนไป
          สมมุติว่า กด /products/id ไป ถ้าไม่ใส่ exact render DOM หน้า /products เท่านั้น
          ทำให้หน้าที่ต้องการ route ไปไม่ถูก */}
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

///our-domain.com/ ==> component A
///our-domain.com/products ==> component B
///our-domain.com/products/a-book ==> component C with param
