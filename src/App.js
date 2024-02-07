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
    setAppOpen(true);

    const appTile = e.target.closest('.AppTile');
    const appContainer = document.querySelector('.AppContainer');

    const tileRect = appTile.getBoundingClientRect();
    const containerRect = appContainer.getBoundingClientRect();
    
    const translateX = tileRect.x;
    const translateY = tileRect.y;

    const scaleX = tileRect.width / containerRect.width;
    const scaleY = tileRect.height / containerRect.height;

    const appTransformValue = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`;
    setAppTransform(appTransformValue);
  }

  const handleTileClose = () => {
    setAppOpen(false);
    setAppTransform("translate3d(0,0,0) scale(1)");
  }

  let appTileContainer = "app-tile-container";
  if (appOpen) {
    appTileContainer += " active";
  }
  return (

    <div className="App">
      <div className={appTileContainer}>
        {
          colors.map((color, index) => {
            return (
              <AppTile
                key={index}
                bgColor={color}
                onClick={(e) => handleTileOpen(index, e)} 
              />
            );
          })
        }
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
