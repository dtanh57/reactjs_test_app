const string_vi = {
  home: "HOME",
  news: "News",
  champions: "Champions",
  register: "Register",
  faq: "FAQ",
  about: "About",
  contact_us: "Contact Us"
};
const string_en = {
  home: "Trang chủ",
  news: "Tin tức",
  champions: "Tướng",
  register: "Đăng ký",
  faq: "FAQ",
  about: "Thông tin web",
  contact_us: "Liên hệ"
};

let STRINGS = { ...string_en, ...string_vi };

const setLanguage = language => {
  if ((language = "en")) {
    STRINGS = { ...string_vi, ...string_en };
  }
  if ((language = "vi")) {
    STRINGS = { ...string_en, ...string_vi };
  }
};

export { STRINGS };
