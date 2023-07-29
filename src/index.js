import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
import Header from './Header';
import Home from './components/headerPages/Home';
import Resume from './components/headerPages/Resume';
import ProjectGallery from './components/headerPages/ProjectGallery';
import Project1 from './components/projectArticles/Project1';
import Project2 from './components/projectArticles/Project2';
import Project3 from './components/projectArticles/Project3';
import Project4 from './components/projectArticles/Project4';
import Applications from './components/headerPages/Applications';
import Project3App from './components/projectApplications/flaskSASCpiViewer/project3App';
import Project4App from './components/projectApplications/project4App/project4App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <HashRouter>
      <Routes>
        {/* before it was {<Header Component={App}></Header>} but we transitioned to the 'children' approach */}
        <Route path='/' element={<Footer><Header><Home /></Header></Footer>} />
        <Route path='/applications' element={<Footer><Header><Applications /></Header></Footer>} />
        <Route path='/resume' element={<Footer><Header><Resume /></Header></Footer>} />
        <Route path='/projects' element={<Footer><Header><ProjectGallery /></Header></Footer>} />
        <Route path='/projects/project1' element={<Footer><Header><Project1 /></Header></Footer>} />
        <Route path='/projects/project2' element={<Footer><Header><Project2 /></Header></Footer>} />
        <Route path='/projects/project3' element={<Footer><Header><Project3 /></Header></Footer>} />
        <Route path='/projects/project4' element={<Footer><Header><Project4 /></Header></Footer>} />
        <Route path='/applications/flaskSASCpiViewer' element={<Footer><Header><Project3App /></Header></Footer>} />
        <Route path='/applications/healthAlgorithmsApp' element={<Footer><Header><Project4App /></Header></Footer>} />
      </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
