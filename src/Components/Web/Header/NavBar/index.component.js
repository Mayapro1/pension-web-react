import React from 'react';


class WNavBar extends React.Component {
    render() {
      return (
        <header className="header-transparent" id="header-main">
            <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
                <div className="container"><a className="navbar-brand" width="200px" href="../../index.html">
                    <img alt="" className="img-fluid" src={'https://penop.com.ng/wp-content/uploads/2018/09/PenOp-logo.svg'} id="navbar-logo" width="70px"/> </a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                        <div className="position-relative"><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg></button></div>
                        <ul className="navbar-nav ">
                            <li className="nav-item"><a className="nav-link" href="../../overview.html">Products</a></li>
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Schedule Demo</a>
                            </li>
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customers</a>
                            </li>
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pricing</a>
                            </li>
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Developers</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                            <li className="nav-item"><a className="nav-link" href="../../pages/authentication/login-basic.html">Login</a></li>
                            <li className="nav-item"><a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" className="btn btn-sm btn-primary btn-icon ml-3 p-2" ><span className="btn-inner--icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg></span> <span className="btn-inner--text">Create free account</span></a></li>
                        </ul>
                        <div className="d-lg-none px-4 text-center"><a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" className="btn btn-block btn-sm btn-primary" >Purchase now</a></div>
                    </div>
                </div>
            </nav>
        </header>
      );
    }
}
export default WNavBar;
