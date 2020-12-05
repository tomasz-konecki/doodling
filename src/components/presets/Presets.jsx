import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";

import { presetsData } from "../../data/data";

import classes from "./Presets.module.scss";

function Presets() {
  const [selected, setSelected] = useState("");

  const handleIconClick = id => e => {
    e.stopPropagation();
    setSelected(id);
  };

  const resetState = () => {
    setSelected(prev => (!!selected ? "" : prev));
  };

  return (
    <div className={classes["sample-list"]}>
      {presetsData.map(item => (
        <div
          className={classes["sample-list-row"]}
          key={item.id}
          onClick={resetState}
        >
          <div className={classes["sample-list-row-content"]}>
            <div>{item.name}</div>
            <div>{item.payload}</div>
          </div>
          <div className={classes["sample-list-row-content"]}>
            PORT:&nbsp;{item.port}
          </div>
          <div className={classes["sample-list-row-content"]}>
            <div className={classes["icon"]} onClick={handleIconClick(item.id)}>
              <MoreVertIcon />
            </div>
          </div>

          <div
            className={clsx(classes["side-menu"], {
              [classes["side-menu-show"]]: item.id === selected
            })}
          >
            <div>
              <div onClick={() => alert("Edit")}>Edit</div>
              <div>Delete</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Presets;
