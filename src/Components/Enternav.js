import React from 'react'
import { Link } from 'react-router-dom'
function Enternav() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-info" aria-label="Third navbar example">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="/">Akova</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul class="navbar-nav mx-auto mb-4 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active fw-bold mx-2" aria-current="page" to="google.com">My Projects</Link>
              </li>
    
              <li class="nav-item">
                <Link class="nav-link fw-bold mx-2" to="/post">Post a Problem</Link>
              </li>
              <li class="nav-item fw-bold">
                <a class="nav-link" href="google.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                  </svg>Notifications</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle mx-2" href="https://www.instagram.com/" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item fw-bold" href="https://www.instagram.com/">My Profile</a></li>
                  <li><a class="dropdown-item fw-bold" href="https://www.instagram.com/">My Projects</a></li>
                  <li><a class="dropdown-item fw-bold" href="https://www.instagram.com/">My Success</a></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Enternav
