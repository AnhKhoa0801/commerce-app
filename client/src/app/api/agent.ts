import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("Error interceptor");
    return Promise.reject(error.response);
  },
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("/products"),
  details: (id: number) => requests.get(`/products/${id}`),
};

const TestErrors = {
  get404Error: () => requests.get("/buggy/not-found"),
  get400Error: () => requests.get("/buggy/bad-request"),
  get401Error: () => requests.get("/buggy/unauthorized"),
  getValidationError: () => requests.get("/buggy/validation-error"),
  get500Error: () => requests.get("/buggy/server-error"),
};

const agent = {
  Catalog,
  TestErrors,
};

export default agent;
