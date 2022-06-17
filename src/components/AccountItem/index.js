import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import images from "~/assets/images";
import Image from "../Image";


const cx = classNames.bind(styles);
function AccountItem({data}) {
  return (
    <div className={cx("wrapper")} >
      <Image className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <h4 className={cx('title')}>{data.full_name}
          {data.tick &&<img className={cx('verify')} src={images.verify} alt=''/>}
          </h4>
        <p className={cx("username")}>{data.nickname}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
