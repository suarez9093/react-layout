import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isButton, setIsButton] = useState(true);
  return (
    <>
      <div class="container nav-container">
        <a href="" class="nav-link-home">
          Home
        </a>
        <nav class="nav">
          <ul class="nav-links">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Band
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tour
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a class="btn"> &#9776;</a>
        <a class="finder">
          <i class="fas fa-search"></i>
        </a>
      </div>
    </>
  );
}
