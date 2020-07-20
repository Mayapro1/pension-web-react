import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import { logout } from '../../../../_actions/auth.actions';



class WNavBar extends React.Component {

    Logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { isAuthenticated } =  this.props.auth

        const avatar = (
            <>
                <div class="order-lg-4 ml-lg-3"><a class="" href="#modal-profile" role="button" data-toggle="modal"><span class="avatar rounded-circle"><img alt="Image placeholder" src={"https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/person-auth.jpg"}/></span></a></div>
            </>
        );
        const userlinks = (
        <>
            <ul class="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                <li class="nav-item">
                    <a href="#" data-action="omnisearch-open" data-target="#omnisearch" class="nav-link nav-link-icon px-2 active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </a>
                </li>
                <li class="nav-item dropdown dropdown-animate">
                    <a class="nav-link nav-link-icon px-2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </a>
                    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow p-3">
                        <h6 class="dropdown-header px-0 mb-2 text-primary">Hi, Emma!</h6><a href="../../pages/account/profile.html" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg> <span>My profile</span> </a><a href="../../pages/account/billing.html" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg> <span>Billing</span> </a><a href="../../pages/boards/overview.html" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg> <span>Dashboard</span></a>
                        <div class="dropdown-divider"></div>
                        <a onClick={this.Logout.bind(this)} class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg> <span>Settings</span> 
                        </a>
                        <NavLink to="" onClick={this.Logout.bind(this)}class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg> 
                            <span>Logout</span>                            
                        </NavLink>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-animate">
                    <a class="nav-link nav-link-icon px-2" href="#modal-notifications" role="button" data-toggle="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </>
        )

        const guestlinks = (
        <>
            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item"><NavLink to="/register" className="btn btn-sm btn-primary btn-icon ml-3 p-2" >
                    <span className="btn-inner--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </span> 
                    <span className="btn-inner--text">Create free account</span></NavLink>
                </li>
            </ul>
        </>
        );
      return (
        <header className="header-transparent" id="header-main">
            <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
                <div className="container"><a className="navbar-brand" width="200px" href="../../index.html">
                    <img alt="" className="img-fluid" src={'https://penop.com.ng/wp-content/uploads/2018/09/PenOp-logo.svg'} id="navbar-logo" width="70px"/> </a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                        <div className="position-relative">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <ul className="navbar-nav ">
                            {/* Products route */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            {/*  Demo schedule routes */}
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                                <NavLink className="nav-link" data-toggle="dropdown" to="#" aria-haspopup="true" aria-expanded="false">Schedule Demo</NavLink>
                            </li>
                            {/*  Demo schedule routes */}
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                                <NavLink className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customers</NavLink>
                            </li>
                            {/*  Demo schedule routes */}
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                                <NavLink className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pricing</NavLink>
                            </li>
                            {/*  Demo schedule routes */}
                            <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                                <NavLink className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Developers</NavLink>
                            </li>
                        </ul>
                        
                        {isAuthenticated ? userlinks : guestlinks}
                        <div className="d-lg-none px-4 text-center"><NavLink to="/register" className="btn btn-block btn-sm btn-primary" >Purchase now</NavLink></div>
                       
                    </div>
                    {isAuthenticated ? avatar : ""}
                </div>
            </nav>
        </header>
      );
    }
}

WNavBar.protoTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateProps (state){
   return {
        auth: state.user
   }
}
export default connect(mapStateProps, {logout})(WNavBar);
