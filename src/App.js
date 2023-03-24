import React from "react";
import "./App.css";
import Slider from "./components/Slider";
import VideoCard from "./components/VideoCard";

const App = () => {
  const videoCardItems = [
    {
      imgSrc:
        "https://i.ytimg.com/vi/dcbhrSXnhMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAC2TlJKDnqt-6olKQlavtYwbBYA",
      logoSrc:
        "https://yt3.ggpht.com/6OBUmNVrNl74OLYgxdnxJ82JDzFX7iS2EnYlNzLROlNE1lbnd3QjBLmRQDeBzfk0yM2wAjFh=s68-c-k-c0x00ffffff-no-rj",
      heading1:
        "Let's Hear From The Players Making Their Debut In The First #AFGvPAKT20I",
      heading2: "Pakistan Cricket",
      heading3: "7.9M views . 1 month ago",
    },
  ];
  return (
    <div className="app">
      <Slider />
      <div className="myContainer">
        {videoCardItems.map((item)=>{
          return <VideoCard imgSrc={item.imgSrc} logoSrc={item.logoSrc} heading1={item.heading1} heading2={item.heading2} heading3={item.heading3} />
        })}
      </div>
    </div>
  );
};

export default App;
