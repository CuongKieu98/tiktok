import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" className={cx('search-input')} spellCheck={false} />
          <span className={cx('search-spliter')}></span>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          <button className={cx("search-button")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("action")}>action</div>
      </div>
    </header>
  );
}

export default Header;
