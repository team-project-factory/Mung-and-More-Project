import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Main/Login/Login";
import { JoinMember } from "./pages/main/login/JoinMember";
import { Main } from "./pages/main/Main";
import { MyPage } from "./pages/main/login/mypage/MyPage";
import { OrderList } from "./pages/main/login/mypage/OrderList";
import { Edit } from "./pages/main/login/mypage/Edit";
import { LikeList } from "./pages/main/login/LikeList";
import { CartList } from "./pages/main/login/cartList/CartList";
import { Payment } from "./pages/main/login/cartList/Payment";
import { Shopping } from "./pages/main/shopping/Shopping";
import { Information } from "./pages/main/shopping/Information";
import { Location } from "./pages/main/Location";
import { Community } from "./pages/main/Community";
import { Noctice } from "./pages/main/Noctice";

function App() {
  return (
    <div>
      <Routes>
        {/** nav바 없음 */}
        <Route path="/login" element={<Login />} />
        <Route path="/joinmember" element={<JoinMember />} />

        {/** nav바 있음 */}
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/likelist" element={<LikeList />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/information" element={<Information />} />
        <Route path="/location" element={<Location />} />
        <Route path="/community" element={<Community />} />
        <Route path="/noctice" element={<Noctice />} />
      </Routes>
    </div>
  );
}

export default App;
