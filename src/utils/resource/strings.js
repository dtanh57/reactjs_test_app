const changeObject = {};

function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}

const string_vi = {
  home: "HOME",
  news: "News",
  champions: "Champions",
  register: "Register",
  faq: "FAQ",
  about: "About",
  contact_us: "Contact Us",
  name: "Name"
};
const string_en = {
  home: "Trang chủ",
  news: "Tin tức",
  champions: "Tướng",
  register: "Đăng ký",
  faq: "FAQ",
  about: "Thông tin web",
  contact_us: "Liên hệ",
  name: "Họ tên"
};

let STRINGS = { ...string_en, ...string_vi };
let lang = "English";

const setLanguage = language => {
  if (language === "en") {
    lang = "English";
    STRINGS = { ...string_en, ...string_vi };
  }
  if (language === "vi") {
    lang = "Vietnamese";
    STRINGS = { ...string_vi, ...string_en };
  }
  broadcast();
};

const onChangeLanguage = (key, cb) => {
  changeObject[key] = () => cb();
};

export { STRINGS, lang, setLanguage, onChangeLanguage };
