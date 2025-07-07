
import "./App.css";
import CirclePages from "../Circle/CirclePages";
import {useLocation } from 'react-router-dom'
function App() {
   const location = useLocation();
   const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <div className="app-container">
      {isHomePage && (
        <>
          <h1 className="t1">My projects</h1>
          <p className="p1">«توضیحات شما...»</p>
        </>
      )}
      <CirclePages />
    </div>
  );
}

export default App;