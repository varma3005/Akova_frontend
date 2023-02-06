import React from 'react'
import { Link } from 'react-router-dom'
import Enternav from './Enternav'
import Footer from './Footer'

function Enterpren() {
  return (
    
    <div>
      <Enternav/>
      <div className="container my-4">
        <div className="card text-center text-bg-dark">
          <div className="card-body">
            <h5 className="card-title display-4 fw-bold ">Akova projects Hub</h5>
            <p className="card-text display-6 fw-bold my-4">My projects!!</p>
            <p className="lead my-4"> The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, 
              we have applied the best of ourselves to the task at hand.
            </p>
            
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title">ML Based Cancer Detection </h5>
                <p className="card-text">Type: Machine Learning, Web development, Programming </p>
                <p className="card-text ">The project is about a drone controlled by AI.Which will reduce the human effort to operate the drones and saves lot of time and money....
                </p>
                  <h3>PROBLEM STATEMENT:</h3>
                      <h5>Voice Commands are not working properly.</h5>
                  
                      <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                      <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
        </div>
        <div className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 className="card-title"> Static Code Checker for C++ </h5>
              <p className="card-text">Type: C++ Projects, Database management, Programming</p>
              <p className="card-text my-1">The biggest problem that students face when they join big 
                corporates is difficulty in writing high quality code that these corporates demand. </p>
                <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                <h5>Static code checker is not able to check for the best practice after the execution of code.</h5>
                <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 className="card-title">OpenCV C++ Program for Face Detection</h5>
              <p className="card-text">Type:C++,Web development, Programming </p>
              <p className="card-text ">This program uses the OpenCV library to detect faces in a live stream from webcam or in a video file stored in the local machine. 
                This program detects faces in real time and tracks it.
                <br/>
                </p>
                <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                    <h5>Unable to detect face in live stream.</h5>
                    <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                    <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                    
                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          
            <div className="card-body">
              <h5 className="card-title">Student Data Management in C++</h5>
              <p className="card-text">Type: Database management, System design, System development, Database manipulation, Programming  </p>
              
              <p className="card-text ">Databases are being used in every aspect of our lives right now. Trillions of bytes of data are being stored in servers around the world. SQL is one of the most basic methods to use such a database.
                 But have you ever thought about using C++ to maintain such a database.
              </p>
              <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                    <h5>Write the simple implementation of Student Management Project written in C++ </h5>
                    <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                    <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                    
                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 className="card-title">OpenCV C++ Program to play a video</h5>
              <p className="card-text">Type: Database management,C++, System design, System development, Database manipulation, Programming  </p>
              <p className="card-text ">The following is the explanation to the C++ code to play a video in C++ using the tool OpenCV. Things to know: (1) The code will only compile in Linux environment. (2) 
                To run in windows, please use the file: "play_video.o" and run it in cmd. 
              </p>
              <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                    <h5>Its not running in cmd. Identify the problem in System Architecture </h5>
                    <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                    <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
            </div>
          </div>
        </div>
        <div className="col">
            <div className="card h-100">
           
              <div className="card-body">
                <h5 className="card-title">Weather Forecasting APP </h5>
                <p className="card-text">Type: Application development, Web development, Programming </p>
                <p className="card-text ">A weather forecasting app is a great idea and can be used to provide users with real-time information
                  <br/>
                  about the weather, allowing them to make better decisions about their activities. To develop such an app, you will need to have a strong understanding of computer science concepts such as data structures and algorithms</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                      <h5>Work with various APIs that are available for accessing weather data.</h5>
                      <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                      <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title">DNA to Protein in Python 3</h5>
                <p className="card-text">Type: PYTHON ,Application development, Web development, Programming </p>
                <p className="card-text ">Aim: Convert a given sequence of DNA into its Protein equivalent. </p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                      <h5>Write the simple implementation of DNA to Protein Project written in PYTHON.</h5>
                      <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                      <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title"> Automatic Youtube Playlist Downloader </h5>
                <p className="card-text">Type: IAVA, Application development, Web development, Programming </p>
                <p className="card-text ">A playlist is used to collect videos in a group. 
                  Most of the video channels on youtube organize their videos in the form of playlists.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                      <h5>Problem with downloading Large playlist of video lectures or song from youtube</h5>
                      <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                      <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title">Morse Code Translator In Python</h5>
                <p className="card-text">Type: PYTHON, Application development, Web development, Programming </p>
                <p className="card-text ">Morse code is a method of transmitting text information as a series of on-off tones, lights, or 
                  clicks that can be directly understood by a skilled listener or observer without special equipment.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                      <h5>Write the simple implementation of Morse Code Translator Project written in PYTHON.</h5>
                  
                      <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                      <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title"> Movie recommendation based on emotion in Python </h5>
                <p className="card-text">Type: PYTHON, Application development, Database management, Programming</p>
                <p className="card-text ">One of the underlying targets of movies is to evoke emotions in their viewers. IMDb offers all the movies for all genre. 
                  Therefore the movie titles can be scraped from the IMDb list to recommend to the user.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>Work with various APIs that are available for accessing MOVIE recommendations and submit the output.</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title"> Project Approval System </h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">Academic Project management is a major issue which is faced by many educational institutes, 
                  the main reason for this is there is no automated system followed in any institute. </p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5> Develop a secured intranet application which is useful to manage  all the project reports and project sources</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title"> Aadhaar Thumb: A Platform to All Services </h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">The main objective of this project is to bring all governmental services to an 
                  online portal in the form of Desktop Software as well as Online Website Portal.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>Build a Platform to Identify the thumb Impression of the individual</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                  
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title">Attendance System Using Smart Card  </h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">The current attendance system in most of the educational institutions is paper based, 
                  wherein the students are expected to sign an attendance sheet.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>Investigate the security risks associated with Attendance System and find an alternative way to set up a system application.</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                  
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"> OpenCV C++ Program for coin detection</h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">There is no shortage of computer science project topics out there.
                  But if you are looking for something that's both technically challenging <br/>and socially relevant, 
                  consider a hospital management system.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>Write a Code Snippet for the above program.</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                  
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              
              <div className="card-body">
                <h5 className="card-title"> Generating Password and OTP in Java </h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">Many a times we forget our passwords and we opt for Forget password option and within no time we get a new password at our registered email-ID or phone no. 
                  to login our account.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>
                    Write a  Java code to explain how to generate OTP !!
                  </h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                  
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"> OpenCV C++ Program for coin detection</h5>
                <p className="card-text">Type: Application development, Database management, Programming</p>
                <p className="card-text ">There is no shortage of computer science project topics out there.
                  But if you are looking for something that's both technically challenging <br/>and socially relevant, 
                  consider a hospital management system.</p>
                  <p class = "h3 my-4">PROBLEM STATEMENT:</p>
                  <h5>Write a Code Snippet for the above program.</h5>
                  <Link to="/entview" className="btn btn-success mx-1">View Project</Link>
                  <Link to ="/responses"  className="btn btn-info mx-1">View RESPONSES</Link>
                  
              </div>
            </div>
          </div>
    </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Enterpren
