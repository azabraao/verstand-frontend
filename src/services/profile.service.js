import api from "./api";
import authService from "./auth.service";

const profileService = {
  async getJson() {
    const { token, id } = authService.getUser();

    const endpoint = `/capa/${id}`;
    return api.get(endpoint, {
      headers: { authorization: `Bearer ${token}` },
    });
  },

  storeJson(json) {
    localStorage.json = JSON.stringify(json);
  },

  getStoredJson() {
    return localStorage.json && JSON.parse(localStorage.json);
  },

  async uploadJson(data) {
    const { token, id } = authService.getUser();
    const endpoint = `/upload/${id}`;

    return api.put(endpoint, data, {
      headers: { authorization: `Bearer ${token}` },
    });
  },
};

export default profileService;
