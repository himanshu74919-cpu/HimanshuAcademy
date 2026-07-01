export function loginUser(email) {
  localStorage.setItem("user", email);
}

export function logoutUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

export function getUser() {
  return localStorage.getItem("user") || "Student";
}
