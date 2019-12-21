const changeObject = {};

function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}

const string_en = {
  home: "HOME",
  news: "News",
  champions: "Champions",
  register: "Register",
  faq: "FAQ",
  about: "About",
  contact_us: "Contact Us",
  name: "Name",
  email: "Email",
  phone: "Phone",
  role: "Role",
  programming_language: "Programming Language",
  technique: "Technique",
  intent: "Intent",
  language: "Language",
  hobby: "Hobbies",
  quotes: "QUOTES",
  stay_connected: "STAY CONNECTED",
  terms_of_service: "Terms of Service",
  privacy_policy: "Privacy Policy"
};
const string_vi = {
  home: "Trang chủ",
  news: "Tin tức",
  champions: "Tướng",
  register: "Đăng ký",
  faq: "FAQ",
  about: "Thông tin tác giả",
  contact_us: "Liên hệ",
  name: "Họ tên",
  email: "Email",
  phone: "Số điện thoại",
  role: "Vai trò",
  programming_language: "Ngôn ngữ lập trình",
  technique: "Công nghệ",
  intent: "Mục tiêu",
  language: "Ngoại ngữ",
  hobby: "Sở thích",
  quotes: "QUOTES HAY",
  stay_connected: "Liên lạc",
  terms_of_service: "Điều khoản dịch vụ",
  privacy_policy: "Chính sách bảo mật"
};

let STRINGS = { ...string_vi, ...string_en };
let lang = "English";

const setLanguage = language => {
  if (language === "en") {
    lang = "English";
    STRINGS = { ...string_vi, ...string_en };
  }
  if (language === "vi") {
    lang = "Vietnamese";
    STRINGS = { ...string_en, ...string_vi };
  }
  broadcast();
};

const onChangeLanguage = (key, cb) => {
  changeObject[key] = () => cb();
};

export { STRINGS, lang, setLanguage, onChangeLanguage };
