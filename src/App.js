
// import { Calendar } from 'react-calendar';
import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Header';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom";
import CreateBlog from './Blogs/CreateBlog';
import ReadBlog from './Blogs/ReadBlog'
import Community from './Community'
import NotFound from './NotFound'
import MainBlog from './Blogs/MainBlog'
import CreateGuild from './Guild/CreateGuild'
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Routes>
        <Route path="Guild" >
             <Route index element={<Community />}/>
             <Route path="guilds/:id" element={<Community/>}/>
             <Route path="guild" element={<CreateGuild/>}/>
        </Route>
         <Route path="blog">
                <Route index element={<MainBlog/>} />
                <Route path="createBlog" element={<CreateBlog />} />
                <Route path="blogById/:id"element={<ReadBlog/>}/>
              </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
