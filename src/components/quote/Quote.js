import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./Quote.module.scss";

function Quote(props) {
  const [line, setLine] = useState("This is a Gotham font from Aura");

  return <div className={classes["quote"]}>{line}</div>;
}

Quote.propTypes = {};

export default Quote;
