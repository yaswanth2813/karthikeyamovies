import React from "react";

const PARENT =() =>{
    return(
<div className="row">
            <div className="col-12 col-sm-6 col-md-4 WhiteBackground shadow-lg mx-auto p-0 mt-5" id="loginBox">
                
                    <div className="card border-0">
                        <div className="card-header loginBoxBorder">

                        </div>
                        <div className="card-body" id="bodyContent">

                            <form className="form-signin" >

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" id="username" name="username" required="required" placeholder="Enter Student's Register Number" onkeyup="this.value = this.value.toUpperCase();"/>
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user text-primary" aria-hidden="true"></i></span>
                                </div>

                          

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control hasDatepicker" required="required" placeholder="Enter Student's Date Of Birth" id="password" name="password" aria-describedby="basic-addon2"/>
                                    <button id="basic-addon2" className="btn btn-light border-secondary" type="button">
                                        <i className="fa fa-calendar  fw-bold" id="passwordIcon" aria-hidden="false"></i>
                                    </button>
                                </div>

                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Parent EMail ID" id="otpFieldId" name="otpFieldId" required="required" aria-describedby="basic-addon3"/>
                                    <button id="basic-addon3" className="btn btn-light border-secondary" type="button">
                                        <i className="fa fa-calendar  fw-bold" id="passwordIcon" aria-hidden="false"></i>
                                    </button>
                                </div>

                                <div className="row">
                                    <div className="col-8 mx-auto">
                                        <div className="input-group input-group-sm mb-3" id="captchaBlock">
                                            
    <button className="btn btn-outline bg-light" type="button"     id="button-addon2"> </button>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" autocomplete="off" maxlength="6" onkeyup="this.value = this.value.toUpperCase()" id="captchaStr" name="captchaStr" aria-describedby="captchaHelp" placeholder="Enter CAPTCHA shown above"/>
                                </div>


                                <div className="text-end">
                                    <button type="submit" className="btn btn-sm btn-primary">SignIn As Parent</button>
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
                            </form>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};



export default PARENT;