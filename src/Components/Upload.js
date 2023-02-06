import React from 'react'
import Stunav from './Stunav'
import Footer from './Footer'
function Upload() {
  return (
    <>
    <Stunav/>
    <div class="container">
    <div class="mb-3">
        <p class="h4 my-4">DNA to Protein in Python 3</p>
        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Solution Overview</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Upload Your Idea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label fw-bold">Upload a File</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple/>
        <a href="https://www.instagram.com/" class="btn btn-success my-2">SUBMIT IDEA</a>
        
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Comments</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg float-left"
                type="submit">
             Post
        </button>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default Upload
