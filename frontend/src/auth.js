export function loginUser(email) {
  localStorage.setItem("user", email);
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

export function getUser() {
  return localStorage.getItem("user");
}
