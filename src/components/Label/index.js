import React from "react";
import classNames from "classnames/bind";
import styles from "./Label.module.scss";
import LABEL from "~/consts/LABEL_TYPE";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Label({
  id,
  img,
  text,
  type,
  to,
  href,
  onClick,
  disabled = false,
  className,
}) {
  const props = {
    onClick,
    disabled,
  };
  let Comp = "div";
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("item-label") + (className ? " " + cx(className) : "");
  return (
    <Comp
      type={type}
      className={classes}
      {...props}
      {...(onClick && !disabled ? { onClick: onClick } : {})}
    >
      {img && (<img className={cx('item-img')} src={img} alt="" />)}
      <span>{text}</span>
    </Comp>
  );
}

export default Label;
