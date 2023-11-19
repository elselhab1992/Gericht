import "./Intro.css";
import { meal } from "../../Data";
import { useRef, useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section className="video-section">
      <video
        src={meal}
        type="video/mp4"
        loop
        muted
        controls={false}
        ref={vidRef}
      />
      <div className="video-controls">
        <div className="video-icons" onClick={handleVideo}>
          {playVideo ? (
            <FaRegCirclePause color="#fff" fontSize={70} />
          ) : (
            <FaRegCirclePlay color="#fff" fontSize={70} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
