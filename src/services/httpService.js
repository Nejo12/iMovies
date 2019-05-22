import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.staus >= 404 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    // console.log("Logging the error", error);
    toast.error("An unexpected error occured.", {
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
