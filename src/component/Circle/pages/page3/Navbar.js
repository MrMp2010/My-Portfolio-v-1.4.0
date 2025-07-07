import { NavLink } from "react-router-dom"

const Navbar = ({ user , totalProductsInCart}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/page3/">
                  Home
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/logout">
                      LogOut
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/users">
                      Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/dashbord">
                      Dashbord
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/products">
                       Products
                    </NavLink>
                  </li>  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/cart">
                      cart
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {user && (
            <div className="nav-icons d-flex align-items-center">
              <span className="position-relative">
                🛒
                {totalProductsInCart > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '0.7em',
                      lineHeight: '1',
                    }}
                  >
                    {totalProductsInCart}
                  </span>
                )}
              </span>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
