import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Main/Login/Login';
import { JoinMember } from './pages/Main/Login/JoinMember';
import { Main } from './pages/Main/Main';
import { MyPage } from './pages/Main/Login/MyPage/MyPage';
import { OrderList } from './pages/Main/Login/MyPage/OrderList';
import { Edit } from './pages/Main/Login/MyPage/Edit';
import { LikeList } from './pages/Main/Login/LikeList';
import { CartList } from './pages/Main/Login/CartList/CartList';
import { Payment } from './pages/Main/Login/CartList/Payment';
import { Shopping } from './pages/Main/Shopping/Shopping';
import { Information } from './pages/Main/Shopping/Information';
import { Location } from './pages/Main/Location';
import { Community } from './pages/Main/Community';
import { Notice } from './pages/Main/Notice';

function App() {
  return (
    <div>
      <Routes>
        {/** nav바 없음 */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/joinmember' element={<JoinMember/>}/>
        {/** nav바 있음 */}
        <Route path='/' element={<Main/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/orderlist' element={<OrderList/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/likelist' element={<LikeList/>}/>
        <Route path='/cartlist' element={<CartList/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/information' element={<Information/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/notice' element={<Notice/>}/>
      </Routes>
    </div>
  );
}

export default App;
