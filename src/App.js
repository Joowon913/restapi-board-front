import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CreatePost from "./page/CreatePost";
import PostDetail from "./page/PostDetail";
import PostEdit from "./page/PostEdit";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/create"} element={<CreatePost />}/>
            <Route path={"/post/:id"} element={<PostDetail/>}/>
            <Route path={"/post/edit/:id"} element={<PostEdit />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
