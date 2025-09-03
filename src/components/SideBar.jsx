import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import {
  HiHome,
  HiFilm,
  HiMusicNote,
  HiCollection,
  HiClock,
  HiVideoCamera,
  HiOutlineClock,
  HiDownload,
  HiDotsHorizontal,
  HiCog,
  HiCode,
  HiPencil,
  HiPuzzle,
  HiCube,
} from "react-icons/hi";

const SideBar = ({ isOpen }) => {
  return (
    <>
      <div className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
        <div className="sidebar-section">
          <h3 className="sidebar-title">Home</h3>
          <div className="sidebar-item">
            <Link to={"/"}>
              <HiHome size={20} />
              <span>Home</span>
            </Link>
          </div>
          <div className="sidebar-item">
            <HiFilm size={20} />
            <span>Shorts</span>
          </div>
          <div className="sidebar-item">
            <span>Subscriptions</span>
          </div>
          <div className="sidebar-item">
            <HiMusicNote size={20} />
            <span>Papaya Music</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-title">Drivers</h3>
          <div className="sidebar-item">
            <HiCollection size={20} />
            <span>Library</span>
          </div>
          <div className="sidebar-item">
            <HiClock size={20} />
            <span>History</span>
          </div>
          <div className="sidebar-item">
            <HiVideoCamera size={20} />
            <span>Your Videos</span>
          </div>
          <div className="sidebar-item">
            <HiOutlineClock size={20} />
            <span>Watch Later</span>
          </div>
          <div className="sidebar-item">
            <HiDownload size={20} />
            <span>Downloads</span>
          </div>
          <div className="sidebar-item">
            <HiDotsHorizontal size={20} />
            <span>Show More</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-title">Customers</h3>
          <div className="sidebar-item">
            <HiCog size={20} />
            <span>PassionTools</span>
          </div>
          <div className="sidebar-item">
            <HiCode size={20} />
            <span>DesignCode</span>
          </div>
          <div className="sidebar-item">
            <HiPencil size={20} />
            <span>Figma</span>
          </div>
          <div className="sidebar-item">
            <HiPuzzle size={20} />
            <span>Sketch</span>
          </div>
          <div className="sidebar-item">
            <HiCube size={20} />
            <span>Spline</span>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="sidebar-collapsed">
          <div className="sidebar-section">
            <div className="sidebar-item">
              <HiHome size={20} />
            </div>
            <div className="sidebar-item">
              <HiFilm size={20} />
            </div>
            <div className="sidebar-item">
              <HiMusicNote size={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
