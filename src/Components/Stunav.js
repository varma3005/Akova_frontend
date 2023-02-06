import React from 'react'
import { Link } from 'react-router-dom'
function Stunav() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-info" aria-label="Third navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Akova</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="https://www.instagram.com/navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav mx-auto mb-4 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link fw-bold mx-2"  to="/stu">Latest Projects</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold mx-2" href="https://www.instagram.com/" data-bs-toggle="dropdown" aria-expanded="false">Domains</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">Artificial Intelligence
                  </a></li>
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">Machine Learning</a></li>
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">Cloud Computing</a></li>
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">C++ Projects</a></li>
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">Python Projects</a></li>
                  </ul>
                </li>
                
              <li className="nav-item">
                <Link className="nav-link fw-bold mx-2" to="/stuidea">MyIDEABANK</Link>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                  </svg>Notifications</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mx-2" href="https://www.instagram.com/" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg></a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">My Profile</a></li>
                  <li><Link className="dropdown-item fw-bold" to="/stuidea">MyIDEABANK</Link></li>
                  <li><a className="dropdown-item fw-bold" href="https://www.instagram.com/">ApprovedIdeas</a></li>
                </ul>
              </li>
            </ul>
            
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Artificial Intelligence" aria-label="Search"/>
                <button className="btn btn-outline-success mx-2 px-2" type="submit">Search</button>
              </form>
          </div>
        </div>
      </nav>
  
    </>
  )
}

export default Stunav
