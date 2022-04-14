const storage = window.localStorage;

const Storage = {
  isSupported() {
    const testKey = "test";
    try {
      storage.setItem(testKey, "1");
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  },

  clear() {
    storage.clear();
  },

  saveUser(user) {
    try {
      storage.setItem("user", JSON.stringify(user));
    } catch (error) {
      return null;
    }
  },

  loadUser() {
    try {
      return JSON.parse(storage.getItem("user"));
    } catch (error) {
      return null;
    }
  },

  deleteUser() {
    try {
      storage.removeItem("user");
    } catch (error) {
      return null;
    }
  },

  saveToken(token) {
    try {
      storage.setItem("token", token);
    } catch (error) {
      return null;
    }
  },

  loadToken() {
    try {
      return storage.getItem("token");
    } catch (error) {
      return null;
    }
  },

  deleteToken() {
    try {
      storage.removeItem("token");
    } catch (error) {
      return null;
    }
  },

  saveLastTime() {
    try {
      return storage.setItem("last-time", Date.now());
    } catch (error) {
      return null;
    }
  },

  isTimeout() {
    try {
      return Date.now() - storage.getItem("last-time") > 5000; // If the page is not reopen in 5 secs, it is considered that user exited it.
    } catch (error) {
      return true;
    }
  },

  setRemember(flag = true) {
    return storage.setItem("remember", flag);
  },

  getRemember() {
    return storage.getItem("remember");
  },

  removeRemember() {
    storage.removeItem("token");
  },
};

if (!Storage.isSupported()) {
  console.log(
    "Your browser does not support sessionStorage. Don't worry. The app can work without it."
  );
}

export default Storage;
