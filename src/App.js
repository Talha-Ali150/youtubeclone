import React from 'react';
// import Slider from './components/Slider';
import Sidebar from './components/Slider/Sidebar';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <div className="app">
      <Navbar/>
      {/* <Slider /> */}
      <Sidebar/>
    </div>
  );
};

export default App;
