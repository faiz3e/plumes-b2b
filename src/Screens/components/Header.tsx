import React, { memo, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Logo from '../images/logo.png'
import { Plumes } from "../../components/svg/plumes";

//  import { useDispatch } from 'react-redux'
const Header = (props) => {
  const [openStatus, setOpenStatus] = useState('')

  // const data = useSelector(state => state)
  // console.log("data",data);

  const logout = () => {
    props.history.push('/')
  }
  const openMenuHeader = () => {
    if (!openStatus) setOpenStatus('show')
    else setOpenStatus('')
  }
  return (<>


    {/* <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2 scrolled awake" id="ftco-navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <Link style={{ paddingLeft: '10px' }} className="navbar-brand" to="/">Plumes</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">

        </button>
        {true && <div className="collapse navbar-collapse" id="ftco-nav">
          {true && <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span className="nav-link"><NavLink to="/">Home</NavLink></span></li>
            <li className="nav-item dropdown">

              <span className="nav-link " id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><NavLink to="/collection">Girls</NavLink></span>
              <span className="nav-link " id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><NavLink to="/collection">Boys</NavLink></span>

            </li>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="/aboutUs" className="nav-link">About us</Link></li>
            {false && <Link to="/inventory" className="nav-link">
              <span className="">
              </span>Admin Panel</Link>}
            <li className="nav-item ">
              <Link to="/cart" className=" nav-link">
                <span className="icon-shopping_cart">{!![].length && [].length}</span>
                {[].length && <span className='notify'></span>}
              </Link>
            </li>
            <li className="nav-item cta cta-colored">
              {!false && <Link to="login" className="nav-link"><span
                className="icon-shopping_cart"></span>Login</Link>}
              {false && <Link to="/" onClick={() => logout()} className="nav-link"><span
                className="icon-shopping_cart"></span>Logout</Link>}
            </li>
          </ul>}
        </div>}
      </div>
    </nav> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <button className="navbar-toggler" onClick={openMenuHeader} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon icon-menu m-icon--flip" aria-hidden="true"></span>
      </button>
      <Link to="/"><a className="navbar-brand" href="/" ><div style={{ width: '120px', paddingTop: '5px' }}><Plumes /></div></a></Link>

      <div className={`collapse navbar-collapse ${openStatus}`} id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <span className="nav-link " id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"><NavLink to="/collection-girls">Girls</NavLink></span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link " id="dropdown05" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"><NavLink to="/collection-boys">Boys</NavLink></span>
          </li>
          <li className="nav-item"><Link to="/p" className="nav-link">Contact</Link></li>
          <li className="nav-item"><Link to="/aboutUs" className="nav-link">About us</Link></li>
          <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
          {/* {false && <Link to="/inventory" className="nav-link">
            <span className="">
            </span>Admin Panel</Link>} */}
          <li className="nav-item pr-2">
            <Link to="/cart" className=" nav-link">
              <span className="icon-shopping_cart">{!![].length && [].length}</span>
              {[].length && <span className='notify'></span>}
            </Link>
          </li>
          {/* <li className="nav-item cta cta-colored">
            {!false && <Link to="login" className="nav-link"><span
              className="icon-shopping_cart"></span>Login</Link>}
            {false && <Link to="/" onClick={() => logout()} className="nav-link"><span
              className="icon-shopping_cart"></span>Logout</Link>}
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </>
  )
}

export default Header