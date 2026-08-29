const currentUser = {
  name: "Current User",
  email: "user@example.com",
};

export function fakeLogin(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "fake-jwt-token",
        name: currentUser.name,
        email: email || currentUser.email,
      });
    }, 800);
  });
}

export function fakeCheckToken(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-jwt-token") {
        resolve({
          name: currentUser.name,
          email: currentUser.email,
        });
      } else {
        reject("Invalid token");
      }
    }, 800);
  });
}

export function fakeSaveArticle(article) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...article, _id: Date.now() });
    }, 500);
  });
}

export function fakeDeleteArticle() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}
