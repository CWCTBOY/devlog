import axios from "axios";

const useApi = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer`,
  },
});

useApi.interceptors.response.use(
  (res) => {
    return { ...res };
  },
  async (err) => {
    const { config, response } = err;
    const originalRequest = config;
    if (response.status === 401) {
      const {
        status,
        data: { accessToken },
      } = await axios.patch(
        "/api/jwt/refresh/re-issuance",
        {
          accessToken: "ACCESS_TOKEN",
          refreshToken: "REFRESH_TOKEN",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (status === 200) {
        localStorage.setItem("access_token", accessToken);
        originalRequest.headers = { Authorization: `ACCESS_TOKEN` };
        return useApi(originalRequest);
      }
      if (status === 403) {
        localStorage.clear();
        alert("Session Expired: 로그인을 해주세요.");
        window.location.href = "/sign_in";
      }
    }
    return Promise.reject(err);
  }
);

export default useApi;
