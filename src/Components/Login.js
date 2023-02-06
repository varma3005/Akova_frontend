import React from 'react'



function Login() {
  return (
    <>
    
    <section className="vh-100" style={{"background-color": "black"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{"border-radius": "1rem;"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
            <label className="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input mx-2" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button className="  btn btn-primary btn-lg btn-block " type="submit">Login</button>

            <hr className="my-6"/>

            <button className="btn btn-lg btn-block btn-primary my-2" style={{"background-color": "red"}}
              type="submit"><i className="fab fa-google me-2 "></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2 my-2" style={{"background-color": "3b5998;"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login
