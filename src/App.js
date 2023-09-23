import './App.css';
import React from 'react'
import Navbar from './modules/navbar';
import About from './modules/About';
import News from './modules/News';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const app = () => {


  return (
    <div>
      <Router>
        <Navbar />




        <Routes>
          <Route exact path="/" element={<News key=" busines" pageSize='5' country="in" category="business" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/business" element={<News key=" business" pageSize='5' country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment " pageSize='5' country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" pageSize='5' country="in" category="general" />} />
          <Route exact path="/health" element={<News key=" health" pageSize='5' country="in" category="health" />} />
          <Route exact path="/science" element={<News key="science " pageSize='5' country="in" category="science" />} />
          <Route exact path="/sports" element={<News key="sports " pageSize='5' country="in" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology " pageSize='5' country="in" category="technology" />} />
        </Routes>
        {/* <TextForm /> */}
      </Router>


    </div>
  )

}
export default app