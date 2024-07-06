import React from "react"

const EMPLOY =() =>{
    return(
        <div className="row">
        <div className="col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 WhiteBackground shadow-lg mx-auto p-0 mt-5" id="loginBox">
            
                <div className="card border-0">
                    <div className="card-header loginBoxBorder">
                        <h4 className="fw-bold"></h4>
                    </div>
                    <div className="card-body" id="bodyContent">
                        <form id="vtopLoginForm">


                            <div className="input-group input-group-sm mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="username" name="username"autocomplete="off"/>
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user text-primary" aria-hidden="true"></i></span>
                            </div>


                            <div className="input-group input-group-sm mb-3">
                                <input type="password" className="form-control" placeholder="Password" id="password" name="password" aria-describedby="basic-addon2"/>
                                <button id="basic-addon2" className="btn btn-light border-secondary" type="button">
                                    <i className="fa fa-eye text-danger fw-bold" id="passwordIcon"    aria-hidden="false"></i>
                                </button>
                            </div>

                            

                            
                            

                            

                            <button type="button"  className="btn btn-sm btn-primary float-end">Submit</button>
                        </form>
                    </div>
                    
                    

                    <div className="card-footer border-0 small">
                        <a href="#"className="fw-bold text-decoration-none"  >Forgot
                            Password</a><br/>
                        <a href="#" className="fw-bold text-decoration-none " >Forgot
                            LoginId</a>
                        <div className="text-end">
                            <a className="fw-light fst-italic text-success" href="http://vitapvtop.ccbp.tech"><strong><i>Go to
                                        Home
                                        Page</i></strong></a>
                        </div>

                    </div>
                </div>
            
        </div>
    </div>
    );
};


export default EMPLOY;