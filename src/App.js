import React, { useState } from 'react';
import AppTile from './AppTile';
import AppContainer from './AppContainer';
import './style/App.scss';

function App() {
  const [appOpen, setAppOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [appTransform, setAppTransform] = useState("");
  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333"];

  const handleTileOpen = (index, e) => {
    setSelectedApp(index);
    const appTile = e.target.closest('.AppTile');
    const tileRect = appTile.getBoundingClientRect();
    const translateX = tileRect.x;
    const translateY = tileRect.y;
    const scaleX = tileRect.width / window.innerWidth;
    const scaleY = tileRect.height / window.innerHeight;
    const appTransformValue = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`;
    setAppTransform(appTransformValue);
    setAppOpen(true);
  }

  const handleTileClose = () => {
    setAppOpen(false);
  }
  
  return (
    <div className="App">
      <div className={appOpen ? "app-tile-container active" : "app-tile-container"}>
        {colors.map((color, index) => (
          <AppTile
            key={index}
            bgColor={color}
            onClick={(e) => handleTileOpen(index, e)} 
          />
        ))}
      </div>
      <AppContainer
        index={selectedApp}
        appOpen={appOpen}
        appTransform={appTransform}
        bgColor={colors[selectedApp]}
        handleTileClose={handleTileClose}
      />
    </div>
  );
}

export default App;