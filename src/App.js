
import './App.css';
import Landing from './Components/Landing';
import Student from './Components/Student';
import Enterpren from './Components/Enterpren';
import Enterview from './Components/Enterview';
import Login from './Components/Login';

import Post from './Components/Post';
import Responses from './Components/Responses';
import Stumyide from './Components/Stumyide';
import Upload from './Components/Upload';
import View1 from './Components/View1';
import View2 from './Components/View2';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/stu" element = {<Student />}/>
        <Route path = "/stuidea" element = {<Stumyide />}/>
        <Route path = "/enterpreneur" element = {<Enterpren />}/>
        <Route path = "/entview" element = {<Enterview />}/>
        <Route path = "/upload" element = {<Upload />}/>
        <Route path = "/view1" element = {<View1 />}/>
        <Route path = "/view2" element = {<View2 />}/>
        <Route path = "/post" element = {<Post />}/>
        <Route path = "/responses" element = {<Responses />}/>
        <Route path = "/login" element = {<Login />}/>
      </Routes>
    </Router>

  )
}

export default App;
