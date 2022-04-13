import React, { useEffect } from "react";

const Trailer = ({ trailerId }) => {
  useEffect(() => {
    console.log(trailerId);
  }, [trailerId]);
  return (
    <div className="video-responsive">
      <iframe
        width="420"
        height="315"
        src={trailerId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
