import "../styles/topBar.css";
import {
  HiOutlineMenu,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="top-bar">
      {/* -------- Row 1 -------- */}
      <div className="top-row">
        <button className="dots-btn">
          <HiOutlineDotsHorizontal size={20} />
        </button>

        <div className="search-bar">
          <HiOutlineSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="top-bar-right">
          <button className="icon-button">
            <HiOutlineBell size={20} />
          </button>
          <button className="icon-button">
            <HiOutlineUser size={20} />
          </button>
        </div>
      </div>

      {/* -------- Row 2 -------- */}
      <div className="menu-row">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <HiOutlineMenu size={20} />
          <span className="logo-text">Papaya</span>
        </button>

        <div className="menus">
          <span>All</span>
          <span>Gaming</span>
          <span>Thoughts</span>
          <span>Music</span>
          <span>Thrillers</span>
          <span>Mixes</span>
          <span>Avatar</span>
          <span>Film criticism</span>
          <span>Korean dramas</span>
          <span>Characters</span>
          <span>Eating</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
