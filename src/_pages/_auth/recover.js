import React from 'react';
import { NavLink } from 'react-router-dom';


class Recover extends React.Component {
    render(){
        return (
            <section class="section-half-rounded bg-cover bg-size--cover py-4 py-sm-0 bg--default">
                <div class="container-fluid d-flex flex-column">
                    <div class="row align-items-center min-vh-100">
                        <div class="col-md-6 col-lg-5 col-xl-4 mx-auto">
                            <div class="mb-5 text-center">
                                <h6 class="h3 mb-1 text-white">Reset password</h6>
                                {/* <p class="text-muted mb-0">We will send you an email that will allow you to reset your password.</p> */}
                            </div>
                            <div class="card shadow-lg border-0 mb-0">
                                <div class="card-body py-5 px-sm-5">
                                    <div>
                                       <span class="clearfix"></span>
                                        <form>
                                            <div class="form-group"><label class="form-control-label">Email address</label>
                                                <div class="input-group input-group-merge"><input type="email" class="form-control form-control-prepend" id="input-email" placeholder="name@example.com"/>
                                                    <div class="input-group-prepend"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign">
                                                                <circle cx="12" cy="12" r="4"></circle>
                                                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                                            </svg></span></div>
                                                </div>
                                            </div>
                                            <div class="mt-4"><button type="button" class="btn btn-block btn-primary">Send reset password email</button></div>
                                        </form>
                                        <div class="mt-4 text-center"><small>Not registered?</small> <NavLink to="/register" class="small font-weight-bold">Create account</NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Recover