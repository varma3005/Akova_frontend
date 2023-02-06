import React from 'react'

function Footer() {
  return (
    <>
    <div className="container my-5">
        
        <footer className="text-center text-dark" style={{"background-color": "lightblue"}}>
          
          <div className="container">
            
            <section className="mt-5">
              
              <div className="row text-center d-flex justify-content-center pt-5">
                
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="https://www.instagram.com/" className="text-dark">About us</a>
                  </h6>
                </div>
                
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="https://www.instagram.com/" className="text-dark">Products</a>
                  </h6>
                </div>
                
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="https://www.instagram.com/" className="text-dark">Awards</a>
                  </h6>
                </div>
                
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="https://www.instagram.com/" className="text-dark">Help</a>
                  </h6>
                </div>
                
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="https://www.instagram.com/" className="text-dark">Contact</a>
                  </h6>
                </div>
                
              </div>
              
            </section>
         
      
            <hr className="my-5" />
      
            
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    distinctio earum repellat quaerat voluptatibus placeat nam,
                    commodi optio pariatur est quia magnam eum harum corrupti
                    dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="text-center mb-5">
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-dark me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
            
          </div>
        
      
         
          <div
               className="text-center p-3"
               style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
               >
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/"
               >MDBootstrap.com</a
              >
          </div>
          
        </footer>
        
      </div>
      
  
    </>
  )
}

export default Footer
