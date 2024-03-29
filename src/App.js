import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Main/Login/Login";
import { JoinMember } from "./pages/Main/Login/JoinMember";
import { Main } from "./pages/Main/Main";
import { MyPage } from "./pages/Main/Login/MyPage/MyPage";
import { OrderList } from "./pages/Main/Login/MyPage/OrderList";
import { Mypost } from "./pages/Main/Login/MyPage/Mypost"
import { Edit } from "./pages/Main/Login/MyPage/Edit";
import { LikeList } from "./pages/Main/Login/LikeList";
import { CartList } from "./pages/Main/Login/CartList/CartList";
import { Payment } from "./pages/Main/Login/CartList/Payment";
import { Shopping } from "./pages/Main/Shopping/Shopping";
import { Information } from "./pages/Main/Shopping/Information";
import { Location } from "./pages/Main/Location";
import { Community } from "./pages/Main/Community";
import { Notice } from "./pages/Main/Notice";
import { MungsNews } from "./pages/Main/MungsNews";
import CreatePost from "./pages/Main/CreatePost";
import { MungsNewsContents } from "./components/main/community/mungsNews/MungsNewsContents";
import InstagramComp from "./components/main/community/InstagramComp";
import CartModalComp from "./components/main/login/likelist/CartModalComp";

function App() {
  return (
    <div>
      <Routes>
        {/** nav바 없음 */}
        <Route path="/login" element={<Login />} />
        <Route path="/joinmember" element={<JoinMember />} />

        {/** nav바 있음 */}
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/mypost" element={<Mypost/>}></Route>
        <Route path="/edit" element={<Edit />} />
        <Route path="/likelist" element={<LikeList />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shopping" element={<Shopping />}>
          <Route path="/shopping/:name" element={<Information />} />
        </Route>
        <Route path="/location" element={<Location />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/community" element={<Community />}>
          <Route path="/community/:id" element={<InstagramComp/>}/>
        </Route>
        <Route path="/mungsnews" element={<MungsNews/>}>
          <Route path="/mungsnews/:id" element={<MungsNewsContents/>} />
        </Route>
        <Route path="/createpostcomp" element={<CreatePost/>}/>

        {/** 로그인 성공했을 때 */}
        <Route path="/mylike" element={<LikeList />}>
          <Route path="/mylike/:name" element={<CartModalComp/>}/>
        </Route>
        <Route path="/cart" element={<CartList />}/>
      </Routes>
    </div>
  );
}

export default App;
