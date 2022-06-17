import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react"; // different import path!
import Button from "~/components/Button";


import BUTTON_TYPE from "~/consts/BUTTON_TYPE";
import Menu from "~/components/Popper/Menu";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);
function Header() {
  
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="tiktok" />

        <Search />
        <div className={cx("action-right")}>
          <Button href={"/upload"} disabled>
            <div className={cx("div-upload")}>
              <img src={images.plusIcon} alt="" style={{ marginRight: 8 }} />
              <span>Upload</span>
            </div>
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                <div className={cx("message-icon")}>
                  <Link to={"/messgae"}>
                    <span>
                      <img
                        className={cx("style-message-icon")}
                        src={images.message}
                        alt=""
                      />
                    </span>
                  </Link>
                </div>
              </Tippy>
              <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                <div className={cx("inbox-icon")}>
                  <span>
                    <img
                      className={cx("style-inbox-icon")}
                      src={images.inbox}
                      alt=""
                    />
                  </span>
                </div>
              </Tippy>
            </>
          ) : (
            <>
              <div style={{ marginLeft: 16 }}>
                <Button
                  type="button"
                  buttonClass={BUTTON_TYPE.red}
                  onClick={() => alert("Clicked")}
                >
                  Login
                </Button>
              </div>
            </>
          )}
          <Menu>
            {currentUser ? (
              <Image
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/49a329190a02a8b72e6f5fad187e2fb3~c5_100x100.jpeg?x-expires=1655521200&x-signature=NjLT3p%2B3D5fJBni7Fdv91MMG6ok%3D"
                }
                alt="ngyenff fdsdf"
                className={cx("icon-profile")}
              />
            ) : (
              <i className={cx("icon-wrapper")}>
                <img src={images.seemore} alt="" className={cx("img-icon")} />
              </i>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
