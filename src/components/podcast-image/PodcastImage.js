import React from "react";

import src from "./img/podcast-image.jpg";

import classes from "./PodcastImage.module.scss";

export default function PodcastImage() {
  return (
    <div className={classes["image"]}>
      <img src={src} />
    </div>
  );
}
