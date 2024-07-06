import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PARENT from './parentlogin';
import EMPLOY from './employeelogin';
import './studentlogin.css';
import STUDENT from './studentlogin';
function App() {
  return (
    <div className="App">
     
      <Router>
      <div className='m-1'>
            <div className="row row-cols-2 row-cols-sm-4 py-3 g-2 g-sm-5">
            <Link to="/studentlogin" className="text-decoration-none"> <div className="col">
                    <div className="card card-body cardStudent shadow">
                        <form className="text-center" action="studentlogin.html">
                            <a href="studentlogin.html" target="_blank" className="text-decoration-none">
                                <div className="d-flex jusitfy-content-start align-items-stretch">
                                    <div className="w-50">
                                        <img src="https://vtop.vitap.ac.in/vtop/assets/img/students.png" className="img-responsive center imgSize" alt="..." />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-primary d-block d-lg-none h6">Student</div>
                                        <div className="fw-bold text-primary d-none d-lg-block h5">Student</div>
                                        <button type="submit" className="btn btn-primary fw-bold">Login</button>
                                    </div>
                                </div>
                            </a>
                        </form>
                    </div>
                </div>
                </Link>
                <Link to="/employeelogin" className="text-decoration-none"> <div className="col">
                    <div className="card card-body cardEmployee shadow">
                        <form className="text-center" action="employeelogin.html">
                            <a href="employeelogin.html" className="text-decoration-none">
                                <div className="d-flex jusitfy-content-start align-items-stretch">
                                    <div className="w-50">
                                        <img src="https://vtop.vitap.ac.in/vtop/assets/img/employee.png" className="img-responsive center imgSize" alt="..." />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-warning d-block d-lg-none h6">Employee</div>
                                        <div className="fw-bold text-warning d-none d-lg-block h5">Employee</div>
                                        <button type="submit" className="btn btn-outline btn-warning fw-bold">Login</button>
                                    </div>
                                </div>
                            </a>
                        </form>
                    </div>
                </div></Link>
                <Link to="/parentlogin" className="text-decoration-none">     <div className="col">
                    <div className="card card-body cardParent shadow">
                        <form className="text-center" action="parentlogin.html">
                            <a href="<STUDENT/>" className="text-decoration-none">
                                <div className="d-flex jusitfy-content-start align-items-stretch">
                                    <div className="w-50">
                                        <img src="https://vtop.vitap.ac.in/vtop/assets/img/parent.png" className="img-responsive center imgSize" alt="..." />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-success d-block d-lg-none h6">Parent</div>
                                        <div className="fw-bold text-success d-none d-lg-block h5">Parent</div>
                                        <button type="submit" className="btn btn-success fw-bold">Login</button>
                                    </div>
                                </div>
                            </a>
                        </form>
                    </div>
           </div>
           </Link>
           </div>
      <Routes>
       <Route path="/studentlogin" element={<STUDENT/>} />
        <Route path="/employeelogin" element={<EMPLOY/>} />
        <Route path="/parentlogin" element={<PARENT/>} />
      </Routes>
      </div>
</Router>
</div>
  );
}

export default App;
