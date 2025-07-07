import { Link, Routes, Route } from "react-router-dom"
import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2" // Import Page2
import Page3 from "./pages/page3/Page3" // Import Page3
import "./Circle.css"

const CirclePages = () => {
 
  return (
    <>
      <div className="circle-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <div className="circle-container">
                <Link to="/page1" className="circle circle-1">
                  Tech Shop
                </Link>
                {/*<Link to="/page2" className="circle circle-2">
                  prject 2
                </Link>*/}
                <Link to="/page3" className="circle circle-3">
                  Dashdord
                </Link>
          </div>
          }
        />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} /> {/* Route for Page2 */}
        <Route path="/page3/*" element={<Page3 />} /> {/* Route for Page3 */}
      </Routes>
    </div>
 
    </>
  )
}

export default CirclePages
