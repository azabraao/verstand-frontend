import api from "./api";

const profileService = {
  async getJson(userId) {
    const endpoint = `/capa/${userId}`;
    return api.get(endpoint);
  },

  async uploadJson(userId) {
    const endpoint = `/upload/${userId}`;
    return api.put(endpoint);
  }
};

export default profileService;
