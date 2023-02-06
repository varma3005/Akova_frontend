import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <div class="container">
                <h1 class="display-5 fw-bold my-4">Linking ideas through innovation</h1>
                <p class="lead fw-bold">Work-experience based learning programs
                    A portal facilitating all institutes and their students to share details on innovation and startups<br/>
                    To develop a single platform for the students / startup fellows / entrepreneurs to register and submit their their ideas / prototypes / business idea 
                    To facilitate various agencies (Govt. / Pvt.) to register and submit their problem statements 
                </p>
              </div>
              
        
        <div class="container my-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title display-7 fw-bold ">Introducing Akova projects Hub</h5>
              <p class="card-text fw-bold">Are you a Student or an Enterpreneur?</p>
              <Link to="/stu" class="btn btn-dark mx-2" target="_blank">STUDENT</Link>
              <Link to="/enterpreneur" class="btn btn-dark mx-2">ENTERPRENEUR</Link>
              <Link to="/stu" class="btn btn-dark mx-2">Find Projects</Link>
            </div>
          </div>
        </div>

    </>
  )
}

export default Header
