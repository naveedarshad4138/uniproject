import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//=>Icons
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineLogout, AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
//Animation
import { motion } from 'framer-motion';
//Firebase file
import { app } from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { CartItemModal } from './Modals/CartItemModal';
export const Header = () => {
  const location = useLocation();
  const activePath = (location.pathname);
  //=> loginHandlerFirebase using singinWith popup
  const admin_email = "naveedarshad4138@gmail.com";
  const [{ user,cartItems }, dispatch] = useStateValue();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const loginHandler = async () => {
    const { user: { providerData } } = await signInWithPopup(auth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]))
  }
  //Logout Handler Call
  const logOutHandler = () => {
    dispatch({
      type: actionType.SET_USER,
      user: null
    });
    localStorage.clear()
  }
  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="row">
        
        <div className="col-12 headerMainDiv">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark header">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid ms-4 me-4">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><AiOutlineMenu /></button>
              {/* <!-- Collapsible wrapper --> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="navbar-brand mt-2 me-4 mt-lg-0" to={'/'}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </Link>
                {/* <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link className={`nav-link  ${activePath === '/' ? "active" : ""}`} to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link  ${activePath === '/' ? "active" : ""}`} to='/'>Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link  ${activePath === '/about' ? "active" : ""}`} to='/about'>About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link  ${activePath === '/services' ? "active" : ""}`} to='/services'>Services</Link>
                  </li>
                </motion.ul> */}
              </div>
              {/* <!-- Right elements --> */}
              <div className="d-flex align-items-center">
                <div className="text-reset me-3" href="#">
                  {/* <!--CartItem modal --> */}
                  {
                      cartItems && cartItems.length > 0 &&
                  <motion.button whileTap={{ scale: 0.6 }} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-placement="top" title="Check Cart ">
                    <AiOutlineShoppingCart />
                      <span className="badge rounded-pill badge-notification bg-danger">{cartItems.length}</span>
                  </motion.button>
                  }
                </div>
                <div className="dropdown" data-bs-toggle="tooltip" data-bs-placement="top" title="Menu">
                  {
                    !user ? <motion.img whileTap={{ scale: 0.6 }} className='profileImg' src={`https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg`} alt="ProfilePic" onClick={loginHandler}  data-bs-toggle="tooltip" data-bs-placement="top" title="Login Profile"/>
                      :
                      <>
                        <button className="dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" >
                          <motion.img whileTap={{ scale: 0.6 }} className='profileImg' src={`${user.photoURL}`} alt="ProfilePic" />
                        </button>

                        <ul className="dropdown-menu dropdownMenu2ul" aria-labelledby="dropdownMenu2">
                          {/* <li><button className="dropdown-item" type="button"> <AiOutlineUser />  Profile</button></li> */}

                          {
                            user && user.email === admin_email && <><li><Link to='/additem' className="dropdown-item nav-link" type="button"><AiOutlinePlus /> Add Item </Link></li>
                            <li><Link to='/allitems' className="dropdown-item nav-link" type="button"><AiOutlinePlus /> Items </Link></li>
                            </>
                          }
                          <li><button className="dropdown-item" type="button" onClick={logOutHandler}><AiOutlineLogout /> Logout </button></li>
                        </ul>
                      </>
                  }

                </div>
                {/* <!-- Right elements --> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* CartItem Modal Show */}
      <CartItemModal />
    </>
  )
}
