import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f9fd6058-0969-4174-92ce-355ca076238c",
  },
});

export const usersApi = {
  async getUsers(page, pageSize) {
    let response = await instanse.get(`users?page=${page}&count=${pageSize}`);
    return response.data;
  },

  async follow(userId) {
    let response = await instanse.post(`follow/${userId}`, {});
    return response.data;
  },
  async unFollow(userId) {
    let response = await instanse.delete(`follow/${userId}`);
    return response.data;
  },
  async getUserProfile(userId) {
    let response = await instanse.get(`profile/${userId}`);
    return response.data;
  },
};

export const authApi = {
  async authMe() {
    const response = await instanse.get(`auth/me`);
    if (response.data.resultCode === 0) return response.data;
  },

  async logIn(email, password, rememberMe, captcha = false) {
    const response = await instanse.post(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return response.data;
  },

  async logOut() {
    const response = await instanse.delete(`auth/login`);
    if (response.data.resultCode === 0) return response.data;
  },
};

export const profileApi = {
  getUserProfile: usersApi.getUserProfile,

  async getUserProfileStatus(userId) {
    const response = await instanse.get(`profile/status/${userId}`);
    return response.data;
  },

  async setUserProfileStatus(status) {
    const response = await instanse.put(`profile/status`, { status });
    return response.data;
  },
};
