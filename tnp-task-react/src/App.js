import './App.css';

import { useState, useEffect } from "react";
import axios from "axios";
import Posts from './pages/postpage';
import Home from './pages/homepage';
import Navbar from './components/Navbar/navbarIndex';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
//   return (
//     // <Router>
//     // <Navbar />
//     // {/* <Routes>
//     //     <Route exact path='/' element={<Home />} />
//     //     <Route path='/post' element={<Posts/>} />
//     // </Routes> */}
//     // </Router>

//     <Navbar>

//     </Navbar>
// );

const [posts, setPosts] = useState([])
    useEffect(()=>{
      async function getAllPosts(){
        try {
          const posts = await axios.get("http://127.0.0.1:8000/api/post/")
          console.log(posts.data)
          setPosts(posts.data)
        } catch (error) {
          console.log(error)
        }
      }
      getAllPosts()
    }, [])
  
  
    return (
      <div className="App">
       <h1>Connect React JS with Laravel</h1>
       {
         posts.map((post, i)=>{
           return (
             <><h2 key={i}>{post.posthead}</h2><h3 key={i}>{post.postsubhead}</h3></>
           )
         })
       }
      </div>
    );
}

export default App;
