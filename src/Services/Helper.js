// List previous year list
const GET_YEARS_FN = () => {
  const currentYear = new Date().getFullYear();
  const sec = currentYear - 50;
  const step = -1;
  const Yrs = Array.from(
    { length: (sec - currentYear) / step + 1 },
    (_, i) => currentYear + i * step
  );
  return ["", ...Yrs].map((y) => ({ name: y, value: y }));
};

// Check fileds are empty or Not
export const checkValidations = (state) => {
  let newState = {};
  let noTrim = ["undefined", "object", "boolean", "number"];
  let error = "";
  for (let [key, value] of Object.entries(state)) {
    if (!noTrim.includes(typeof value)) {
      value = value.trim();
      if (value === "") {
        key = key.charAt(0).toUpperCase() + key.slice(1);
        error += `${key},`;
      }
      newState[key] = value;
    } else {
      newState[key] = value;
    }
  }
  if (error !== "") {
    error = error.substring(0, error.length - 1);
    error += " is required!";
  } else {
    error = false;
  }
  delete newState["errors"];
  return { data: newState, error: error };
};

// Check errors
export const checkError = (errors) => {
  let err = "<ul>";
  let disabled = false;
  for (var key of Object.keys(errors)) {
    if (errors[key] && errors[key].length > 0) {
      err += `<li>${key} ${errors[key]}<li>`;
      disabled = true;
    }
  }
  err += "</ul>";
  return { error: err, disabled };
};

export const GET_YEARS = GET_YEARS_FN();

export const PRICE_WITH_CURRENCY = (value, isPriceNot) => {
  let price = Number(value || 0);

  var isDecimal = price - Math.floor(price) !== 0;

  price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let FinalPrice = isPriceNot
    ? `${price || 0}`
    : isDecimal
    ? `$${price || 0}`
    : `$${price + ".00" || 0}`;

  return FinalPrice;
};

export const validateMobile = (mobilenumber) => {
  var regmm = "^([0-9]{3})[0-9]{3}-[0-9]{4}$";
  var regmob = new RegExp(regmm);
  if (regmob.test(mobilenumber)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (password) => {
  if (password && password !== "") {
    var regp = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/";
    var regmpass = new RegExp(regp);
    if (regmpass.test(password)) {
      return true;
    } else {
      return false;
    }
  }
};

export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
