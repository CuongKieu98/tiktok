import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import BUTTON_TYPE from "~/consts/BUTTON_TYPE";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  onClick,
  children,
  disabled = false,
  buttonClass,
  type,
  ...passProps
}) {
  let Comp = "button";
  let typeClass =
    buttonClass && buttonClass === BUTTON_TYPE.primary
      ? "btn-primary"
      : buttonClass && buttonClass === BUTTON_TYPE.redOutline
      ? "btn-red-outline"
      : buttonClass && buttonClass === BUTTON_TYPE.red
      ? "btn-red"
      : "btn-default";
  const props = {
    onClick,
    disabled,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper") + " " + cx(typeClass);
  return (
    <Comp 
      type={type} 
      className={classes}
      {...props}
      {...onClick &&!disabled ? {onClick:onClick} : {}} 
       
    >
      <div>{children}</div>
    </Comp>
  );
}

export default Button;
