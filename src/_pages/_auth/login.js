import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import "./styles.scss";
import Pace from 'react-pace-progress';
import Button from 'react-bootstrap-button-loader';
import { login } from '../../_actions/auth.actions';
import  toastr  from '../../_helper/toastr/index';
import * as _constants from '../../_helper/toastr/types'
import PropTypes  from 'prop-types';



class Login extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            email: "",
            password: "",
            loginLabel: "Login to your dashboard",
            redirect: null
        };  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isLoading: true, loginLabel: ' '});
        this.props.login(this.state)
        .then((res) => {
            this.setState({ email: "", password: "", isLoading: false, loginLabel: 'Login to your dashboard', redirect: '/dashboard' });
            toastr.success({ type: _constants.LOGIN_SUCCESS });
           
          })
          .catch((err) => {
            toastr.error({ type: _constants.LOGIN_INVALID });
            this.setState({ isLoading: false, loginLabel: 'Login to your dashboard'})
        });
    };
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

  render(){
    const {  email, password } = this.state;
    const { isAuthenticated } = this.props.auth;
    return (
        <section>
             {this.state.isLoading ? <Pace color="#008aff" height={3}/> : null}
            <div className="container-fluid d-flex flex-column">
                <div className="row align-items-center justify-content-center min-vh-100 ">
                <div className="col-md-1"></div>
                <div className="col-md-4 d-none d-lg-block">
                    <div className="row mx-n2">
                    <div className="col-sm-6 mt-sm-6 px-sm-2 ">
                        <div className="card border-0 mb-3">
                            <div className="h-100"><img className="card-img-top" src="https://www.essence.com/wp-content/uploads/2020/06/Black-Numbers-tout-1472x1472.jpg" alt="Card image cap"/></div>
                            <div className="card-body p-3">
                                <div className="d-flex align-items-center">
                                    <div><span className="avatar avatar-sm rounded-circle bg-warning text-white">JA</span></div>
                                    <div className="pl-3"><span className="h6 text-sm mb-0">Josephin Adeoye</span></div>
                                    <div className="ml-auto">
                                        <div className="actions"><a href="#!" className="action-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-none mb-3">
                            <div className="p-3 d-flex">
                                <div>
                                    <div className="icon icon-shape rounded-circle bg-success text-white mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg></div>
                                </div>
                                <div><span className="h6">300+ customers</span>
                                    <p className="text-sm text-muted mb-0">In Nigeria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 px-sm-2">
                        <div className="card mb-3">
                            <div className="card-body py-5 text-center h-100">
                                <div className="mb-4 w-50 mx-auto"><img src="https://smartsahara.com/assets/svg/logos/logo.png" alt="Image placeholder" className="img-fluid"/></div><span className="static-rating d-block"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star star voted">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star star voted">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star star voted">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star star voted">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star star">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg></span>
                                <h5 className="h6 mt-4 mb-1">4.95 out of 5 stars</h5>
                                <p className="text-muted text-sm mb-0">from 23 reviews</p>
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-body text-center">
                            <a href="#" className="avatar rounded-circle avatar-lg hover-translate-y-n3">
                            <img alt="Image placeholder" src="https://preview.webpixels.io/quick-website-ui-kit/assets/img/theme/light/company-1.png"/> 
                            </a>
                            <a href="#" className="d-block h6 mt-3 mb-4">Easy Documentation</a>
                            <span className="clearfix"></span>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-xl-8">
                            <div>
                                <div className="mb-3">
                                    <h6 className="h3 mb-1">Login to your dashboard!</h6>
                                </div><span className="clearfix"></span>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group"><label className="form-control-label">Email address</label>
                                        <div className="input-group input-group-merge"><input type="email" className="form-control form-control-prepend" id="input-email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={email}/>
                                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg></span></div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div><label className="form-control-label">Password</label></div>
                                            <div className="mb-2"><a href="#" className="small text-muted text-underline--dashed border-primary" data-toggle="password-text" data-target="#input-password">Show password</a></div>
                                        </div>
                                        <div className="input-group input-group-merge"><input type="password" className="form-control form-control-prepend" id="input-password" placeholder="Password" name="password"  onChange={this.handleChange} value={password}/>
                                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key">
                                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                                                    </svg></span></div>
                                        </div>
                                    </div>
                                    <div className="mt-2"><small>Forgot your password ? </small> 
                                        <NavLink to="/recover" className="small font-weight-bold">Recover</NavLink>
                                    </div>
                                    <div className="mt-2">
                                        <Button type="submit" loading={this.state.isLoading} disabled={!this.state.email || !this.state.password} className="btn btn-block btn-primary">{ this.state.loginLabel}</Button>
                                    </div>
                                </form>
                                <div className="mt-4"><small>Not registered?</small> 
                                <NavLink to="/register" className="small font-weight-bold"> Create free account</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                </div>
            </div>
        </section>
    );
    };
}

Login.protoTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.user
    }
}

export default connect(mapStateToProps, {login})(Login);
