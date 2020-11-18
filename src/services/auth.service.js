import api from './api'

const authService = {
  async authenticate(data) {
    const endpoint = "/signin";
    return api.post(endpoint, data);
  },

  async signup(data) {
    const endpoint = "/signup";
    return api.post(endpoint, data);
  },

  storeUser(data) {
    let parsedData = JSON.stringify(data);
    localStorage.setItem("user", parsedData);
  },

  getUser() {
    let data = localStorage.getItem("user");
    if (!data) return null;
    try {
      let parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  logout() {
      localStorage.clear()
      window.location.reload()
  }
};

export default authService;
