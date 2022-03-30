import React from "react";
import FeedTop from "./FeedTop";
import FeedContents from "./FeedContents";

function Feed() {
  return (
    <div className="flex flex-[0.6] flex-col">
      <FeedTop />
      <FeedContents />
    </div>
  );
}

export default Feed;
