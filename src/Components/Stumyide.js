import React from 'react'
import Stunav from './Stunav'
import Footer from './Footer'
function Stumyide() {
  return (
    <>
    <Stunav/>
    <div className="container main">
        <h2>My Project Ideas</h2>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-success">Approved</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab  px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-warning">In progress</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-info">Submitted</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-danger">Rejected</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab  px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-secondary">Draft</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab  px-3 py-2">
              <h3 className="text-center">Project Name</h3>
              <blockquote>Contributer:Elon Musk</blockquote>
              <p><strong>Idea</strong>:You should change the code regarding... </p>
              <p>Status:<span className="badge bg-secondary">Draft</span></p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary"> View Idea</button>
              </div>
            </div>
          </div>
       
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Stumyide
