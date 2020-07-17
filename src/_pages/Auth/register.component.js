import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./styles.scss";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    axios
      .post("/api/auth/users/create", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-8 col-lg-5 py-6">
              <div>
                <div className="mb-3 text-center">
                  <h6 className="h5 mb-1 text-left text-uppercase">
                    Let's get you started with your PensionAnalytica account
                  </h6>
                </div>
                <span className="clearfix"></span>

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Business Name</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="form-control form-control-prepend"
                        id="input-name"
                        name="name"
                        placeholder="John Ive"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email address</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="email"
                        className="form-control form-control-prepend"
                        id="input-email"
                        name="email"
                        placeholder="name@example.com"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-at-sign"
                          >
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <label className="form-control-label">Password</label>
                      </div>
                      <div className="mb-2">
                        <a
                          href="#"
                          className="small text-muted text-underline--dashed border-primary"
                          data-toggle="password-text"
                          data-target="#input-password"
                        >
                          Show password
                        </a>
                      </div>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="form-control form-control-prepend"
                        id="input-password"
                        placeholder="********"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-key"
                          >
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check-terms"
                        checked
                      />{" "}
                      <label className="custom-control-label" for="check-terms">
                        I agree to the{" "}
                        <a href="../../pages/utility/terms.html">
                          terms and conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="button" className="btn btn-block btn-primary">
                      Create my account
                    </button>
                  </div>
                </form>
                {/* <div className="py-3 text-center"><span className="text-xs text-uppercase">or</span></div> */}
                {/* <div className="row">
                            <div className="col-sm-6"><a href="#" className="btn btn-block btn-neutral btn-icon mb-3 mb-sm-0"><span className="btn-inner--icon"><img src="../../assets/img/icons/brands/github.svg" alt="Image placeholder"/></span><span className="btn-inner--text">Github</span></a></div>
                            <div className="col-sm-6"><a href="#" className="btn btn-block btn-neutral btn-icon"><span className="btn-inner--icon"><img src="../../assets/img/icons/brands/google.svg" alt="Image placeholder"/></span><span className="btn-inner--text">Google</span></a></div>
                        </div> */}
                <div className="mt-4 text-left">
                  <small>Already have an account?</small>{" "}
                  <NavLink to="/login" className="small font-weight-bold">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
