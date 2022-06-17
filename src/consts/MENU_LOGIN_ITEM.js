import images from "~/assets/images";
import LABEL_TYPE from "./LABEL_TYPE";
import MENU_ITEM from "./MENU_ITEM";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    icon: images.profile,
    text: "Xem hồ sơ",
    type: LABEL_TYPE.LINK,
  },
  {
    id: 2,
    icon: images.coin,
    text: "Nhận xu",
    type: LABEL_TYPE.LINK,
  },
  {
    id: 3,
    icon: images.setting,
    text: "Cài đặt",
    type: LABEL_TYPE.LINK,
  },
  ...MENU_ITEM,
  {
    id: 7,
    icon: images.logout,
    text: "Đăng xuất",
    type: LABEL_TYPE.LINK,
    class:'logout'
  },
];
