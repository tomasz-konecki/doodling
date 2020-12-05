import React from "react";
import classes from "./App.module.scss";
import Quote from "./components/quote/Quote";
import PodcastImage from "./components/podcast-image/PodcastImage";
import Counter from "./components/counter/Counter";
import Presets from "./components/presets/Presets";

function App() {
  return (
    <div className={classes["app"]}>
      <Presets />
    </div>
  );
}

export default App;
