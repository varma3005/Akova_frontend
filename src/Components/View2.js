import React from 'react'
import Stunav from './Stunav'
import { Link } from 'react-router-dom'

function View2() {
  return (
    <>
    <Stunav/>
    <div className="container main">
        <h1 className="h1">Project Idea | (Static Code Checker for C++)</h1>
        <div className="d-flex justify-content-between">
          <div>
        <p> Contributer:<strong>Elon Musk</strong></p>
        <p className="tech">Technologies Used:</p>
        <p><strong>C++ Projects, Database management, Programming</strong></p>
      </div>
      <div>
        <button className="btn btn-info">Edit</button>
      </div>
      </div>
        <p style={{"color":"grey","margin-top":"32px","font-size":"18px","margin-bottom":"8px"}} >Problem Statement</p>
        <h6 className="h5">Static code checker is not able to check for the best practice after the execution of code.</h6>
        <h6 className="h5">Any one who can solve this will get awarded</h6>
        <h5 className="mt-5" style={{"color":"grey"}}>Description:</h5>
        <p className="des">The biggest problem that students face when they join big corporates is difficulty in writing high quality code that these corporates demand. The prime reason for this difficulty is because their minds have been trained in college to just make things work somehow, even if it means using dirty hacks. To help coders in general and fellow college students in particular, building a tool which can run 
          static code checks on a given code can help improve the quality of code to a great extend.</p>
        <h5 style={{"color":"grey"}}>FEATURES:</h5>
        <ol>
          <li>Memory leaks</li>
          <li>Unused variables</li>
          <li>Undeclared variables</li>
          <li>Array's bound checks</li>
          <li>Dead code</li>
          
        </ol>
        <h5>Implementation:</h5>
          <p>Static code checker could be written as a plugin to any existing IDE like Eclipse/Codeblocks (recommended) or
           it can be in the form of any website where you paste your code and run static code checks</p>
        <h5 style={{"color":"grey"}}>Output:</h5>
        <p className="des">The output of the above project is</p>
        <a href ="http://www.jslint.com/" className="btn btn-info">View Code</a>
        <div className="card my-4" style={{"width": "50rem"}}>
            <div className="ecard-body">
              <h5 className="card-title my-2">GOT THE SOLUTION?</h5>
              <h6 className="card-subtitle mb-2 text-muted my-1">What are you waiting for ??  POST YOUR RESPONSE HERE</h6>
              <p className="card-text">You can post your solution/response to the problem Statement here along with the attachmentss!!.</p>
              <h5>CLICK HERE!!</h5>
              <Link to ="/upload" target="_blank" className="btn btn-outline-success">Upload IDEA</Link>
            </div>
          </div>
          </div>
    </>
  )
}

export default View2
