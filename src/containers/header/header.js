import React from 'react';

const Header = () => {
  return (
    <header className="header-c1">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-3">
            <img src="images/centivo-logo2.png" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-9  col-md-9">
            <ul className="nav justify-content-end">
              <li className="nav-item">member search</li>
              <li className="nav-item">referral management</li>
              {/*<li className="nav-item dropdown">
                           <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           More <i className="fas fa-chevron-down"></i>
                           </a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                           </div>
                        </li>*/}
              <li className="nav-item logout">
                <i className="fas fa-sign-out-alt" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
