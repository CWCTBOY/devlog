const ACCESS_TOKEN = localStorage.getItem("access_token");
const REFRESH_TOKEN = localStorage.getItem("refresh_token");

const tokenCheck = () => {
  if (ACCESS_TOKEN && REFRESH_TOKEN) {
    return true;
  } else {
    return false;
  }
};

const SignIn = () => {
  localStorage.setItem("access_token", "1234");
  localStorage.setItem("refresh_token", "1234");
};

const SignOut = (fnc: () => void) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  fnc();
};

export { tokenCheck, SignIn, SignOut };
