import React from 'react'
//import './App.css';

function App() {
  return (<>
    <div className="container-fluid bg-warning" style={{backgroundImage:'url("")', backgroundSize:"100% 100%"}}>
    <div className="container" style={{height:"100vh"}}>
    

    <div className="row d-flex justify-content-between py-3">
    <div className="col-6">
    <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
    <span className="navbar-toggler-icon">icon</span>
    </button>


    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header"><p></p>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        
        <div className="row">
        <div className="col-10 ms-3">
        <button className="w-100 btn btn-dark my-2">Sign up</button>
        <button className="w-100 btn btn-warning my-2">Login up</button>
        <p className="p mt-3">Create a business Account</p>
        <p className="p">Add your restorent</p>
        <p className="p">Sign up to delever</p>

        

        </div>
        </div>
      </div>
    </div>
  </div>



    <div className="col-6">
    <div className="float-end">
    <button className="btn bg-white mx-3 rounded-pill">Sign in</button>
    <button className="btn btn-dark rounded-pill">Login in</button>
    </div>
    </div>
    </div>






    <div className="row mt-5">
    <div className="col-10">
    <h1 style={{fontSize:"45px", fontWeight:"700"}}>Order food to your door</h1>

    <div className="row my-4 mt-5">
    <div className="col-7">
    <input type="test" className="form-control rounded-0 ps-3" placeholder="Enter delivery address"/>
    </div>

    <div className="col-3">
    <div className="dropdown">
    <button className="btn btn-light dropdown-toggle w-100 rounded-0" type="button" data-bs-toggle="dropdown">Deliver now</button></div>
    <ul className="dropdown-menu">
    <li><a className="dropdown-list" href="#">Action</a></li>
    </ul>
    </div>

    <div className="col-2 btn btn-dark">Find Food</div>
 </div>
    <p><a href="#" className="text-black">Sign in</a> for your recent addresses</p>
    
    </div>
    </div>

    </div>

    </div>
  </>);
}

export default App;
