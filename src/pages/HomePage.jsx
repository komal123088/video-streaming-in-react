import "../styles/home.css";
import design from "../assets/img/design.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courses } from "../data";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-header">
        <h1>Home</h1>
      </div>

      <div className="course-flex">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/watch/${course.id}`}
            className="course-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="course-thumbnail">
              <div className="thumbnail-placeholder">
                <img src={course.img} alt={course.title} />
              </div>
            </div>

            <div className="course-info">
              <div className="vector">
                <img src={course.vec} alt="vector" className="title-icon" />
              </div>
              <div className="course">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-author">{course.author}</p>
                <p className="course-details">{course.details}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="user-list">
        <div className="user-item">
          <span>
            <img src={design} alt="" />
          </span>
          DesignCode
        </div>
        <div className="user-item">
          <AiFillTwitterCircle />
          @akkownvaldy
        </div>
        <div className="user-item">
          <FaInstagramSquare />
          @akkoundesign
        </div>
      </div>
      <p style={{ marginTop: "40px" }}> © 2025 Made by Komal Raza</p>
    </div>
  );
};

export default HomePage;
