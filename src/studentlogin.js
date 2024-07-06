import React from 'react';
import './studentlogin.css';

const STUDENT = () => {
  const toggleEye = () => {
    // Your toggle logic here
    console.log('Toggle eye');
  };

  const resetPassword = () => {
    // Your reset password logic here
    console.log('Reset password');
  };

  const forgotUserID = () => {
    // Your forgot user ID logic here
    console.log('Forgot user ID');
  };

  return (
    <div className="row">
      <div className="col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 WhiteBackground shadow-lg mx-auto p-0 mt-5" id="loginBox">
        <div className="card border-0">
          <div className="card-header loginBoxBorder">
            
          </div>
          <div className="card-body" id="bodyContent">
            <form id="vtopLoginForm">
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  id="username"
                  name="username"
                  onKeyUp={(e) => e.target.value = e.target.value.toUpperCase()}
                  autoComplete="off"
                />
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-user text-primary" aria-hidden="true"></i>
                </span>
              </div>

              <div className="input-group input-group-sm mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  aria-describedby="basic-addon2"
                />
                <button id="basic-addon2" className="btn btn-light border-secondary" type="button" onClick={toggleEye}>
                  <i className="fa fa-eye text-danger fw-bold" id="passwordIcon" aria-hidden="false"></i>
                </button>
              </div>

              <div
                id="recaptcha"
                className="g-recaptcha"
                data-sitekey="6LfzijMUAAAAACRHPUtzyKDeqEtqSmWOuJS3duAj"
                data-callback="callBuiltValidation"
                data-size="invisible"
              >
                <div
                  className="grecaptcha-badge"
                  data-style="bottomright"
                  style={{
                    width: '256px',
                    height: '60px',
                    display: 'block',
                    transition: 'right 0.3s ease 0s',
                    position: 'fixed',
                    bottom: '14px',
                    right: '-186px',
                    boxShadow: 'gray 0px 0px 5px',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}
                >
                  
                  <div className="grecaptcha-error"></div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: '250px',
                      height: '40px',
                      border: '1px solid rgb(193, 193, 193)',
                      margin: '10px 25px',
                      padding: '0px',
                      resize: 'none',
                      display: 'none'
                    }}
                  ></textarea>
                </div>
            
              </div>
              <input type="hidden" id="gResponse" name="gResponse" value="" />

              <button type="button" className="btn btn-sm btn-primary float-end">
                Submit
              </button>
            </form>
          </div>

          <div className="card-footer border-0 small">
            <button
              className="fw-bold text-decoration-none btn btn-link"
              onClick={resetPassword}
            >
              Forgot Password
            </button>
            <br />
            <button
              className="fw-bold text-decoration-none btn btn-link"
              onClick={forgotUserID}
            >
              Forgot LoginId
            </button>
            <div className="text-end">
              <a className="fw-light fst-italic text-success" href="http://vitapvtop.ccbp.tech">
                <strong><i>Go to Home Page</i></strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STUDENT;
