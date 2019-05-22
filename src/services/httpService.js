import axios from "axios";
import logger from "./logService";
import auth from "./authService";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.staus >= 404 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast("An unexpected error occured.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true
    });
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
