import './style/AppTile.scss';

function AppTile({ bgColor, onClick }) {
  return (
    <div className="AppTile" style={{ background: bgColor }} onClick={ onClick }>
    </div>
  );
}

export default AppTile;

