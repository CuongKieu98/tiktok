import { useState, useRef, useEffect } from "react";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import MENU_ITEM from "~/consts/MENU_ITEM";
import Label from "~/components/Label";
import MenuItemLevel from "./MenuItemLevel";
import MENU_LOGIN_ITEM from "~/consts/MENU_LOGIN_ITEM";

const cx = classNames.bind(styles);
function Menu({ children }) {
  const [currentUser,setCurrentUser] = useState(true);
  const userMenu = currentUser ? {data : MENU_LOGIN_ITEM} : {data : MENU_ITEM}
  const [listItem, setListItem] = useState([userMenu]);
  const currentData = listItem[listItem.length - 1];
  const handleBack = () => {
    if (listItem.length < 2) return;
    setListItem((prev) => {
      return [...prev].slice(0, -1);
    });
  };
  const handleChildren = (item) => {
    if (!!item) {
      setListItem((prev) => {
        return [...prev, item];
      });
    }
  };

  const handleClick = () => {
    setCurrentUser(false)
  };

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      onHide={() => setListItem((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={cx("menu-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {listItem.length > 1 && (
              <MenuItemLevel title={"Ngôn Ngữ"} onBack={handleBack} />
            )}
            <ul className={cx("UlItemWrapper")}>
              {currentData.data.map((item, index) => (
                <li key={index} className={cx("LiItemWrapper") + " " + cx(item.class)}>
                  <Label
                    img={item.icon}
                    text={item.text}
                    to={item.to}
                    onClick={() => {
                      if(!!item.childrenLevel){
                        handleChildren(item.childrenLevel);
                      }else{
                        handleClick()
                      }
                      
                    }}
                  />
                </li>
              ))}
            </ul>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
