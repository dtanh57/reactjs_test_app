let STRINGS;

const string_vi = {
  Home: "HOME"
};
const string_en = { Home: "Trang chủ" };

const setLanguage = language => {
  if ((language = "en")) {
    STRINGS = { ...string_vi, ...string_en };
  }
  if ((language = "vi")) {
    STRINGS = { ...string_en, ...string_vi };
  }
};

export { STRINGS };
