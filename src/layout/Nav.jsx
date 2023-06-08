import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import style from './Nav.module.scss'
import { useSelector, useDispatch  } from 'react-redux';
//css

// import style from './Nav.module.scss'

// add
import {
  HeaderStyle, InnerStyle, LogoImage, MenuStyle, MenuItems, MenuUtil, MenuItems_item
  , MenuItems_item_slide, ProfileImg, SubItems, SubLink, LoginBtn
} from './styles/NavStylecomp'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';


export const Nav = () => {
  // add
  const [isCommunityHovered, setCommunityHovered] = useState(false);
  const dispatch = useDispatch();
  const getUser =  JSON.parse(sessionStorage.getItem('user'));
  


  const handleCommunityHover = () => {
    setCommunityHovered(true);
  };
  const handleCommunityLeave = () => {
    setCommunityHovered(false);
  }
  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return(
    <div>
      {/** add */}
      <HeaderStyle>
        <InnerStyle>
          {/** 로고 */}
          <Link to={'/'}>
            <LogoImage src="./img/logo.svg" />
          </Link>
          {/** 메뉴 */}
          <MenuStyle>
            <MenuItems>
              <MenuItems_item>
                <Link to={'/shopping'}>Shopping</Link>
              </MenuItems_item>
              <MenuItems_item>
                <Link to={"/location"}>Location</Link>
              </MenuItems_item>
              <MenuItems_item_slide
                onMouseEnter={handleCommunityHover}
                onMouseLeave={handleCommunityLeave}
              >
                <Link to={"/community"}>Community</Link>
                {
                  isCommunityHovered ? (<ArrowDropUpSharpIcon />)
                    : (<ArrowDropDownIcon />)
                }
                <SubItems>
                  <Link><SubLink>Mungstagram</SubLink></Link>
                  <Link><SubLink>Mung's News</SubLink></Link>
                </SubItems>
              </MenuItems_item_slide>
              <MenuItems_item>
                <Link to={"/notice"}>Notice</Link>
              </MenuItems_item>
            </MenuItems>

            <MenuUtil>
              {getUser ? (
                <>
                  <MenuItems_item>
                    <p>My Like</p>
                  </MenuItems_item>
                  <MenuItems_item>
                    <p>Cart</p>
                  </MenuItems_item>
                  <Link to={'/mypage'}>
                    <ProfileImg />
                  </Link>
                </>
              ) : (
                <Link to={"/login"}>
                  <LoginBtn onClick={handleLogin}>Login</LoginBtn>
                </Link>
              )}
            </MenuUtil>
          </MenuStyle>
        </InnerStyle>
      </HeaderStyle>
    </div>
  )
}




// export const Nav2 = () => {
//   // 로그인
//   const [Login, setLogin] = useState(false);
//   //버튼 토글
//   const [btn, setBtn] = useState(false);
  
//   const user = useSelector((state)=>(state));
//   console.log(user);



//   return (
//     <div>
//       {/* * 로고 */}
//       {/* <ul className={style.navbar_logo}>
//         <Link to={`/`}>
//           <img src="/img/LOGO.svg" alt="" />
//         </Link>
//       </ul> */}
//       {/** 메뉴 */}
//       {/* <ul className={style.navbar_menu}>
//         <li><Link to={`/shopping`}>Shopping</Link></li>
//         <li><Link to={`/location`}>Loaction</Link></li>
//         <li>
//           <Link to={`/community`}>Community</Link> 
//           <span onClick={()=>{setBtn(!btn)}}>
//             {btn ? '🔽':'🔼'}
//           </span>
//           <div>
//             <div className={style.navbar_menu_comu} style={btn ? {visibility:''}: {visibility:'hidden'}}>
//               <ul className={style.navbar_menu_comu_list}>
//                 <li><Link to={`/community`}>Mungstagram</Link></li>
//                 <li><Link to={`/community`}>Mung's News</Link></li>
//               </ul>
//             </div>
//           </div>
//         </li>
//         <li><Link to={`/notice`}>Notice</Link></li>
//       </ul> */}
//       {/** 로그인  */}

//       {/* <ul className={style.navbar_login}>
//         <li><Link to={`/login`}>Login</Link></li>
//       </ul> */}

      
//     </div>
//   )
// }
