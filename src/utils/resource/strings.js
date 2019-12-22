const changeObject = {};

function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}

const string_en = {
  //validate
  this_field_is_required: "This field is required",
  email_error: "Please enter a valid email address!",

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
  privacy_policy: "Privacy Policy",
  frequently_asked_question: "FREQUENTLY ASKED QUESTIONS",
  intro_contact:
    "We’d love to hear from you. For general inquiries, fill out the form below and we’ll get back with you shortly.",
  your_name: "Your name",
  your_email: "Your email",
  subject: "Subject",
  what_you_think: "What do you think about me?",
  your_message: "Your message",
  your_name_placeholder: "Enter your name",
  your_email_placeholder: "Enter your email",
  your_subject_placeholder: "Enter your subject",
  submit: "Submit"
};
const string_vi = {
  //validate
  this_field_is_required: "Trường này không được để trống",
  email_error: "Vui lòng nhập đúng định dạng email!",

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
  privacy_policy: "Chính sách bảo mật",
  frequently_asked_question: "NHỮNG CÂU HỎI THƯỜNG GẶP",
  intro_contact:
    "Tôi rất muốn được nhận những góp ý từ bạn. Hãy điền vào mẫu dưới đây và tôi sẽ sớm liên hệ lại với bạn.",
  your_name: "Tên của bạn",
  your_email: "Email của bạn",
  subject: "Chủ đề",
  what_you_think: "Bạn nghĩ gì về tui",
  your_message: "Tin nhắn của bạn",
  your_name_placeholder: "Nhập tên của bạn",
  your_email_placeholder: "Nhập email của bạn",
  your_subject_placeholder: "Nhập subject của bạn",
  submit: "Xác nhận"
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
