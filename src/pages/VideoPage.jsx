import { useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { courses } from "../data";
import "../styles/video.css";

import { FaThumbsUp, FaThumbsDown, FaShare, FaBell } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function WatchPage() {
  const { id } = useParams();

  const current = useMemo(() => courses.find((c) => c.id === id) ?? null, [id]);

  const related = useMemo(
    () => (current ? courses.filter((c) => c.id !== current.id) : []),
    [current]
  );

  if (!current) {
    return <div className="watch-page">Course not found</div>;
  }

  return (
    <div className="watch-page">
      <div className="watch-main">
        {/* Video Player */}
        <div className="player-wrapper">
          <video
            key={current.videoUrl}
            className="video-player"
            src={current.videoUrl}
            poster={current.img}
            controls
            playsInline
          />
        </div>

        <div className="video-section">
          {/* Title */}
          <h2 className="video-title">{current.title}</h2>

          {/* Channel + Actions Row */}
          <div className="video-top-row">
            <div className="channel-info">
              <img src={current.vec} alt="" />
              <div className="channel-text">
                <div className="channel-name">{current.author}</div>
                <div className="subscribers">197K subscribers</div>
              </div>
              <button className="btn join">Join</button>
              <button className="btn subscribed">
                <FaBell style={{ marginRight: "6px" }} /> Subscribed
              </button>
            </div>

            <div className="video-actions">
              <button className="btn">
                <FaThumbsUp /> 899
              </button>
              <button className="btn">
                <FaThumbsDown />
              </button>
              <button className="btn">
                <FaShare /> Share
              </button>
              <button className="btn">
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="video-desc">
            <div className="views">14k views • 1 month ago</div>
            <p>
              Design a Web app design inspired by Discord and Slack in the Figma
              design tool.
              <br />
              Sponsored by{" "}
              <a href="https://rive.app" target="_blank" rel="noreferrer">
                rive.app
              </a>{" "}
              — create beautiful animated assets for apps, sites and games.
            </p>
            <button className="show-more">Show More</button>
          </div>

          {/* Comments */}
          <div className="comments-section">
            <div className="comments-header">
              <span>899 Comments</span>
              <button className="btn outline">Sort by</button>
            </div>
            <div className="comment-input">
              <img src={current.vec} alt="" />
              <input type="text" placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="watch-side">
        {related.map((item) => (
          <Link key={item.id} to={`/watch/${item.id}`} className="side-card">
            <div className="side-thumb">
              <img src={item.img} alt={item.title} />
              <span className="duration">38:30</span>
            </div>
            <div className="side-info">
              <div className="side-title">{item.title}</div>
              <div className="muted">{item.author}</div>
              <div className="muted">{item.details}</div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}
