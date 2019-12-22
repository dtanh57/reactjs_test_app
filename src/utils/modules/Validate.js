import { STRINGS } from "../resource";

/* eslint-disable eqeqeq */
const Validate = {
  email: email => {
    let status = false;
    let content = null;
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === null || email.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
    } else if (!re.test(email)) {
      status = false;
      content = STRINGS.email_error;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  subEmail: email => {
    let status = false;
    let content = null;
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === null || email.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
    } else if (!re.test(email)) {
      status = false;
      content = STRINGS.Email_error;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  password: password => {
    let status = false;
    let content = null;

    const re = /^(?=.*[A-z])(?=.*\d)[A-z\d]{8,}$/;
    if (password === null || password.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
    } else if (password.length > 32) {
      status = false;
      content =
        STRINGS.password_only_include_letter_and_number_between_8_and_32_characters;
    } else if (!re.test(password)) {
      status = false;
      content =
        STRINGS.password_only_include_letter_and_number_between_8_and_32_characters;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  emptyContentOnly: text => {
    let status = false;
    let content = null;
    if (text.length === 0) {
      status = false;
      content = `${STRINGS.this_field_is_required}`;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  numberContent: text => {
    let status = false;
    let content = null;

    const re = /^\d*$/;

    if (text.length === 0) {
      status = false;
      content = `${STRINGS.this_field_is_required}`;
    } else if (!re.test(text)) {
      status = false;
      content = STRINGS.only_contain_number;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  sameContent: (text1, text2, field) => {
    let status = false;
    let content = null;

    if (text2 === null || text2.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
      return { status, content };
    }
    if (text1 === "" || text1 === null) {
      status = false;
      content = `${field}`;
    } else if (text1 === text2) {
      status = true;
      content = null;
    } else if (text1 !== text2) {
      status = false;
      content = `${field}`;
    }
    return { status, content };
  },

  phoneNumber: phone => {
    let status = false;
    let content = null;

    const re = /^(?:\d{11}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/;
    if (phone === null || phone.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
    } else if (!re.test(phone)) {
      status = false;
      content = STRINGS.phone_number_contain_10_numbers_and_only_numbers;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  },

  zipCode: text => {
    let status = false;
    let content = null;

    const re = /^([0-9]{7})$/;

    if (text.length === 0) {
      status = false;
      content = STRINGS.this_field_is_required;
    } else if (!re.test(text)) {
      status = false;
      content = STRINGS.validate_zip_code_strings;
    } else {
      status = true;
      content = null;
    }
    return { status, content };
  }
};

export { Validate };
