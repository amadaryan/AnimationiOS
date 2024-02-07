import './style/AppContainer.scss';

function AppContainer({ index, appOpen, appTransform, bgColor, handleTileClose }) {
  let appContainer = "AppContainer";
  if (appOpen) {
    appContainer += " active";
  }

  return (
    <div className={appContainer} style={{ backgroundColor: bgColor, transform: appTransform }}>
      <h1>Application n° {index + 1}</h1>
      <p>An application aims to provide a specific solution or service to users. It can simplify tasks, automate processes, facilitate communication, entertain, or inform users. Applications offer a user-friendly and intuitive interface to interact with specific features, enabling users to achieve their goals efficiently and enjoyably.</p>
      <svg width="50" height="50" onClick={handleTileClose}>
        <line x1="0" y1="0" x2="50" y2="50" stroke="black" strokeWidth="2" />
        <line x1="0" y1="50" x2="50" y2="0" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default AppContainer;