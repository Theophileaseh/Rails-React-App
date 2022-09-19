import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './Components/Greetings.js';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Greetings />} />
    </Routes>
  </Router>
);

export default App;
