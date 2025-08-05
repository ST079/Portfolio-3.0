import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import "./Navigationbar.css";

const Navigationbar = () => {
  const { pathname } = useLocation();


    React.useEffect(() => {
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("slidedown", window.scrollY > 200);
        navbar.classList.toggle("hide", window.scrollY > 1200);
      });
    }, []);


   React.useEffect(() => {
     if (pathname) {
       window.scrollTo(0, 0);
     }
   }, [pathname]);
  
  return (
    <div>
      <nav aria-label="breadcrumb" className='navbar'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link
              to="/"
              className={`text-decoration-none text-dark ${
                pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="breadcrumb-item ">
            <Link
              to="/about"
              className={`text-decoration-none text-dark ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>

          <li className="breadcrumb-item ">
            <Link
              to="/experience"
              className={`text-decoration-none text-dark ${
                pathname === "/experience" ? "active" : ""
              }`}
            >
              Experience
            </Link>
          </li>

          <li className="breadcrumb-item ">
            <Link
              to="/projects"
              className={`text-decoration-none text-dark ${
                pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li className="breadcrumb-item ">
            <Link
              to="/contact"
              className={`text-decoration-none text-dark ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navigationbar