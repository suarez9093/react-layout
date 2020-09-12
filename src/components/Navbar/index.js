// import React, { useState } from "react";
// import "./style.css";

// export default function Navbar() {
//   const [isHidden, setIsHidden] = useState(false);
//   const [isButton, setIsButton] = useState(true);
//   return (
//     <>
//       <nav>
//         <a href="#">Home</a>
//         <button
//           className="open-nav"
//           onClick={() => {
//             setIsHidden((prevState) => !prevState);
//           }}
//         >
//           &#9776;
//         </button>
//       </nav>
//     </>
//   );
// }
import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isButton, setIsButton] = useState(true);
  return (
    <>
      <div className="main-grid navbar-container">
        <div className="header">
          <a className="nav-link">Home</a>
          <button
            className="open-nav"
            onClick={() => {
              setIsHidden((prevState) => !prevState);
            }}
          >
            &#9776;
          </button>
        </div>
        <nav className="navigation ">
          <ul className="nav-links">
            {isHidden && (
              <>
                <li className="nav-item">
                  <a className="nav-link">Band</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Tour</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                  <a class="nav-link">
                    {isButton ? (
                      <>Merch</>
                    ) : (
                      <>
                        More <i className="fas fa-caret-down"></i>
                      </>
                    )}
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
