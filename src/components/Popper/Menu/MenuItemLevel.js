import React from "react";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function MenuItemLevel({ title, onBack }) {
  return (
    <header className={cx("header-level")}>
      <button className={cx("back-level")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <h4 className={cx("title-level")}>{title}</h4>
    </header>
  );
}

export default MenuItemLevel;
