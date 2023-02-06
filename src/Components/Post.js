import React from 'react'
import Enternav from './Enternav'
import Footer from './Footer'


function Post() {
  return (
    <>
    <Enternav/>
    <div className="container">
    <div className="mb-3">
        <p className="h4 my-4">UPLOAD PROJECT</p>
        <p className="h6 my-4">Project Details</p>
        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Project Title </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="eg: artificial intelligence based project" rows="1"></textarea>
    </div>
    <h5 className="mt-3">Tenologies & Languages</h5>
      <form>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Technologies"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Languages"/>
          </div>
        </div>
      </form>
      
      <div className="mt-4">
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Domain</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
              <label className="form-check-label" for="gridRadios1">
                Artificial Intelligence
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
              <label className="form-check-label" for="gridRadios2">
                Machine Learning
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
              <label className="form-check-label" for="gridRadios3">
                Robotics
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
              <label className="form-check-label" for="gridRadios3">
                AR and VR
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Uses</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Output</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Few words abt output" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label for="formFileMultiple" className="form-label fw-bold">Upload Output</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple/>
        
        
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label fw-bold">Enter Your Problem Statement</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="The problem is about"  rows="4"></textarea>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-success">Submit</button>
      </div>

    </div>
    <Footer/>
    </>
   
  )
}

export default Post
